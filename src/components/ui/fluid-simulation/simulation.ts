
import { ColorRGB, DoubleFBO, FBO, PointerData, SimulationConfig, WebGLContext } from './types';
import { Material, Program } from './webgl-classes';
import { compileShader, HSVtoRGB, scaleByPixelRatio, wrap } from './webgl-utils';
import { 
  advectionShaderSource, 
  baseVertexShaderSource, 
  clearShaderSource, 
  copyShaderSource,
  curlShaderSource, 
  displayShaderSource, 
  divergenceShaderSource, 
  gradientSubtractShaderSource, 
  pressureShaderSource, 
  splatShaderSource, 
  vorticityShaderSource 
} from './shaders';
import { blit, createDoubleFBO, createFBO, getResolution, resizeDoubleFBO } from './framebuffers';

export class FluidSimulation {
  gl: WebGLRenderingContext;
  ext: WebGLContext['ext'];
  config: SimulationConfig;
  pointers: PointerData[];
  canvas: HTMLCanvasElement;
  lastUpdateTime: number;
  colorUpdateTimer: number;
  
  // Programs
  baseVertexShader: WebGLShader;
  copyProgram: any;
  clearProgram: any;
  splatProgram: any;
  advectionProgram: any;
  divergenceProgram: any;
  curlProgram: any;
  vorticityProgram: any;
  pressureProgram: any;
  gradienSubtractProgram: any;
  displayMaterial: any;
  
  // Buffers
  dye: DoubleFBO | null;
  velocity: DoubleFBO | null;
  divergence: FBO | null;
  curl: FBO | null;
  pressure: DoubleFBO | null;
  
  // Buffer preparation
  blit: (target?: FBO, clear?: boolean) => void;

  constructor(canvas: HTMLCanvasElement, config: SimulationConfig) {
    this.canvas = canvas;
    this.config = config;
    this.pointers = [this.createPointerPrototype()];
    this.lastUpdateTime = Date.now();
    this.colorUpdateTimer = 0.0;
    
    // Initialize WebGL
    const ctx = canvas.getContext('webgl', { 
      alpha: true,
      depth: false,
      stencil: false,
      antialias: false,
      preserveDrawingBuffer: false,
    }) as WebGLRenderingContext;
    
    if (!ctx) throw new Error('Could not initialize WebGL');
    this.gl = ctx;
    
    // Setup extensions
    const halfFloat = this.gl.getExtension('OES_texture_half_float');
    const supportLinearFiltering = this.gl.getExtension('OES_texture_half_float_linear');
    
    const halfFloatTexType = halfFloat ? halfFloat.HALF_FLOAT_OES : this.gl.UNSIGNED_BYTE;
    
    const formatRGBA = { internalFormat: this.gl.RGBA, format: this.gl.RGBA };
    const formatRG = { internalFormat: this.gl.RGBA, format: this.gl.RGBA };
    const formatR = { internalFormat: this.gl.RGBA, format: this.gl.RGBA };
    
    this.ext = {
      formatRGBA,
      formatRG,
      formatR,
      halfFloatTexType,
      supportLinearFiltering: !!supportLinearFiltering,
    };
    
    // Setup vertex buffer
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.gl.createBuffer());
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]),
      this.gl.STATIC_DRAW
    );
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.gl.createBuffer());
    this.gl.bufferData(
      this.gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array([0, 1, 2, 0, 2, 3]),
      this.gl.STATIC_DRAW
    );
    this.gl.vertexAttribPointer(0, 2, this.gl.FLOAT, false, 0, 0);
    this.gl.enableVertexAttribArray(0);
    
    // Compile shaders
    this.baseVertexShader = compileShader(this.gl, this.gl.VERTEX_SHADER, baseVertexShaderSource);
    
    // Initialize blit function
    this.blit = (target, clear = false) => blit(this.gl, target, clear);
    
    // Setup programs
    this.copyProgram = new Program(this.gl, this.baseVertexShader, 
      compileShader(this.gl, this.gl.FRAGMENT_SHADER, copyShaderSource));
    
    this.clearProgram = new Program(this.gl, this.baseVertexShader, 
      compileShader(this.gl, this.gl.FRAGMENT_SHADER, clearShaderSource));
    
    this.splatProgram = new Program(this.gl, this.baseVertexShader, 
      compileShader(this.gl, this.gl.FRAGMENT_SHADER, splatShaderSource));
    
    this.advectionProgram = new Program(this.gl, this.baseVertexShader, 
      compileShader(this.gl, this.gl.FRAGMENT_SHADER, advectionShaderSource, 
        this.ext.supportLinearFiltering ? null : ["MANUAL_FILTERING"]));
    
    this.divergenceProgram = new Program(this.gl, this.baseVertexShader, 
      compileShader(this.gl, this.gl.FRAGMENT_SHADER, divergenceShaderSource));
    
    this.curlProgram = new Program(this.gl, this.baseVertexShader, 
      compileShader(this.gl, this.gl.FRAGMENT_SHADER, curlShaderSource));
    
    this.vorticityProgram = new Program(this.gl, this.baseVertexShader, 
      compileShader(this.gl, this.gl.FRAGMENT_SHADER, vorticityShaderSource));
    
    this.pressureProgram = new Program(this.gl, this.baseVertexShader, 
      compileShader(this.gl, this.gl.FRAGMENT_SHADER, pressureShaderSource));
    
    this.gradienSubtractProgram = new Program(this.gl, this.baseVertexShader, 
      compileShader(this.gl, this.gl.FRAGMENT_SHADER, gradientSubtractShaderSource));
    
    this.displayMaterial = new Material(this.gl, this.baseVertexShader, displayShaderSource);
    
    // Initialize buffers
    this.dye = null;
    this.velocity = null;
    this.divergence = null;
    this.curl = null;
    this.pressure = null;
    
    this.initFramebuffers();
    this.updateKeywords();
    
    // Event listeners
    this.setupEventListeners();
  }

  createPointerPrototype(): PointerData {
    return {
      id: -1,
      texcoordX: 0,
      texcoordY: 0,
      prevTexcoordX: 0,
      prevTexcoordY: 0,
      deltaX: 0,
      deltaY: 0,
      down: false,
      moved: false,
      color: { r: 0, g: 0, b: 0 }
    };
  }

  initFramebuffers(): void {
    const simRes = getResolution(this.gl, this.config.SIM_RESOLUTION);
    const dyeRes = getResolution(this.gl, this.config.DYE_RESOLUTION);
    
    const texType = this.ext.halfFloatTexType;
    const rgba = this.ext.formatRGBA;
    const rg = this.ext.formatRG;
    const r = this.ext.formatR;
    const filtering = this.ext.supportLinearFiltering ? this.gl.LINEAR : this.gl.NEAREST;
    
    this.gl.disable(this.gl.BLEND);
    
    if (!this.dye) {
      this.dye = createDoubleFBO(
        this.gl,
        dyeRes.width,
        dyeRes.height,
        rgba.internalFormat,
        rgba.format,
        texType,
        filtering
      );
    } else {
      this.dye = resizeDoubleFBO(
        this.gl,
        this.dye,
        dyeRes.width,
        dyeRes.height,
        rgba.internalFormat,
        rgba.format,
        texType,
        filtering,
        this.copyProgram
      );
    }
    
    if (!this.velocity) {
      this.velocity = createDoubleFBO(
        this.gl,
        simRes.width,
        simRes.height,
        rg.internalFormat,
        rg.format,
        texType,
        filtering
      );
    } else {
      this.velocity = resizeDoubleFBO(
        this.gl,
        this.velocity,
        simRes.width,
        simRes.height,
        rg.internalFormat,
        rg.format,
        texType,
        filtering,
        this.copyProgram
      );
    }
    
    this.divergence = createFBO(
      this.gl,
      simRes.width,
      simRes.height,
      r.internalFormat,
      r.format,
      texType,
      this.gl.NEAREST
    );
    
    this.curl = createFBO(
      this.gl,
      simRes.width,
      simRes.height,
      r.internalFormat,
      r.format,
      texType,
      this.gl.NEAREST
    );
    
    this.pressure = createDoubleFBO(
      this.gl,
      simRes.width,
      simRes.height,
      r.internalFormat,
      r.format,
      texType,
      this.gl.NEAREST
    );
  }

  updateKeywords(): void {
    let displayKeywords = [];
    if (this.config.SHADING) displayKeywords.push("SHADING");
    this.displayMaterial.setKeywords(displayKeywords);
  }

  updateColors(dt: number): void {
    this.colorUpdateTimer += dt * this.config.COLOR_UPDATE_SPEED;
    if (this.colorUpdateTimer >= 1) {
      this.colorUpdateTimer = wrap(this.colorUpdateTimer, 0, 1);
      this.pointers.forEach((p) => {
        p.color = this.generateColor();
      });
    }
  }

  applyInputs(): void {
    this.pointers.forEach((p) => {
      if (p.moved) {
        p.moved = false;
        this.splatPointer(p);
      }
    });
  }

  step(dt: number): void {
    if (!this.velocity || !this.pressure || !this.dye || !this.divergence || !this.curl) return;
    
    this.gl.disable(this.gl.BLEND);
    
    // Curl
    this.curlProgram.bind();
    this.gl.uniform2f(
      this.curlProgram.uniforms.texelSize,
      this.velocity.texelSizeX,
      this.velocity.texelSizeY
    );
    this.gl.uniform1i(this.curlProgram.uniforms.uVelocity, this.velocity.read.attach(0));
    this.blit(this.curl);
    
    // Vorticity
    this.vorticityProgram.bind();
    this.gl.uniform2f(
      this.vorticityProgram.uniforms.texelSize,
      this.velocity.texelSizeX,
      this.velocity.texelSizeY
    );
    this.gl.uniform1i(this.vorticityProgram.uniforms.uVelocity, this.velocity.read.attach(0));
    this.gl.uniform1i(this.vorticityProgram.uniforms.uCurl, this.curl.attach(1));
    this.gl.uniform1f(this.vorticityProgram.uniforms.curl, this.config.CURL);
    this.gl.uniform1f(this.vorticityProgram.uniforms.dt, dt);
    this.blit(this.velocity.write);
    this.velocity.swap();
    
    // Divergence
    this.divergenceProgram.bind();
    this.gl.uniform2f(
      this.divergenceProgram.uniforms.texelSize,
      this.velocity.texelSizeX,
      this.velocity.texelSizeY
    );
    this.gl.uniform1i(this.divergenceProgram.uniforms.uVelocity, this.velocity.read.attach(0));
    this.blit(this.divergence);
    
    // Clear pressure
    this.clearProgram.bind();
    this.gl.uniform1i(this.clearProgram.uniforms.uTexture, this.pressure.read.attach(0));
    this.gl.uniform1f(this.clearProgram.uniforms.value, this.config.PRESSURE);
    this.blit(this.pressure.write);
    this.pressure.swap();
    
    // Pressure
    this.pressureProgram.bind();
    this.gl.uniform2f(
      this.pressureProgram.uniforms.texelSize,
      this.velocity.texelSizeX,
      this.velocity.texelSizeY
    );
    this.gl.uniform1i(this.pressureProgram.uniforms.uDivergence, this.divergence.attach(0));
    
    for (let i = 0; i < this.config.PRESSURE_ITERATIONS; i++) {
      this.gl.uniform1i(this.pressureProgram.uniforms.uPressure, this.pressure.read.attach(1));
      this.blit(this.pressure.write);
      this.pressure.swap();
    }
    
    // Gradient Subtract
    this.gradienSubtractProgram.bind();
    this.gl.uniform2f(
      this.gradienSubtractProgram.uniforms.texelSize,
      this.velocity.texelSizeX,
      this.velocity.texelSizeY
    );
    this.gl.uniform1i(this.gradienSubtractProgram.uniforms.uPressure, this.pressure.read.attach(0));
    this.gl.uniform1i(this.gradienSubtractProgram.uniforms.uVelocity, this.velocity.read.attach(1));
    this.blit(this.velocity.write);
    this.velocity.swap();
    
    // Advection
    this.advectionProgram.bind();
    this.gl.uniform2f(
      this.advectionProgram.uniforms.texelSize,
      this.velocity.texelSizeX,
      this.velocity.texelSizeY
    );
    
    if (!this.ext.supportLinearFiltering) {
      this.gl.uniform2f(
        this.advectionProgram.uniforms.dyeTexelSize,
        this.velocity.texelSizeX,
        this.velocity.texelSizeY
      );
    }
    
    let velocityId = this.velocity.read.attach(0);
    this.gl.uniform1i(this.advectionProgram.uniforms.uVelocity, velocityId);
    this.gl.uniform1i(this.advectionProgram.uniforms.uSource, velocityId);
    this.gl.uniform1f(this.advectionProgram.uniforms.dt, dt);
    this.gl.uniform1f(this.advectionProgram.uniforms.dissipation, this.config.VELOCITY_DISSIPATION);
    this.blit(this.velocity.write);
    this.velocity.swap();
    
    if (!this.ext.supportLinearFiltering) {
      this.gl.uniform2f(
        this.advectionProgram.uniforms.dyeTexelSize,
        this.dye.texelSizeX,
        this.dye.texelSizeY
      );
    }
    
    this.gl.uniform1i(this.advectionProgram.uniforms.uVelocity, this.velocity.read.attach(0));
    this.gl.uniform1i(this.advectionProgram.uniforms.uSource, this.dye.read.attach(1));
    this.gl.uniform1f(this.advectionProgram.uniforms.dissipation, this.config.DENSITY_DISSIPATION);
    this.blit(this.dye.write);
    this.dye.swap();
  }

  render(target?: FBO): void {
    if (!this.dye) return;
    
    this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
    this.gl.enable(this.gl.BLEND);
    
    this.displayMaterial.bind();
    
    if (this.config.SHADING) {
      let width = target == null ? this.gl.drawingBufferWidth : target.width;
      let height = target == null ? this.gl.drawingBufferHeight : target.height;
      this.gl.uniform2f(this.displayMaterial.uniforms.texelSize, 1.0 / width, 1.0 / height);
    }
    
    this.gl.uniform1i(this.displayMaterial.uniforms.uTexture, this.dye.read.attach(0));
    this.blit(target);
  }

  calcDeltaTime(): number {
    let now = Date.now();
    let dt = (now - this.lastUpdateTime) / 1000;
    dt = Math.min(dt, 0.016666);
    this.lastUpdateTime = now;
    return dt;
  }

  resizeCanvas(): boolean {
    let width = scaleByPixelRatio(this.canvas.clientWidth);
    let height = scaleByPixelRatio(this.canvas.clientHeight);
    
    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
      return true;
    }
    
    return false;
  }

  updateFrame = (): void => {
    const dt = this.calcDeltaTime();
    if (this.resizeCanvas()) this.initFramebuffers();
    this.updateColors(dt);
    this.applyInputs();
    this.step(dt);
    this.render(null);
    requestAnimationFrame(this.updateFrame);
  };

  generateColor(): ColorRGB {
    let c = HSVtoRGB(Math.random(), 1.0, 1.0);
    c.r *= 0.15;
    c.g *= 0.15;
    c.b *= 0.15;
    return c;
  }

  updatePointerDownData(pointer: PointerData, id: number, posX: number, posY: number): void {
    pointer.id = id;
    pointer.down = true;
    pointer.moved = false;
    pointer.texcoordX = posX / this.canvas.width;
    pointer.texcoordY = 1.0 - posY / this.canvas.height;
    pointer.prevTexcoordX = pointer.texcoordX;
    pointer.prevTexcoordY = pointer.texcoordY;
    pointer.deltaX = 0;
    pointer.deltaY = 0;
    pointer.color = this.generateColor();
  }

  updatePointerMoveData(pointer: PointerData, posX: number, posY: number, color: ColorRGB): void {
    pointer.prevTexcoordX = pointer.texcoordX;
    pointer.prevTexcoordY = pointer.texcoordY;
    pointer.texcoordX = posX / this.canvas.width;
    pointer.texcoordY = 1.0 - posY / this.canvas.height;
    pointer.deltaX = this.correctDeltaX(pointer.texcoordX - pointer.prevTexcoordX);
    pointer.deltaY = this.correctDeltaY(pointer.texcoordY - pointer.prevTexcoordY);
    pointer.moved = Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;
    pointer.color = color;
  }

  updatePointerUpData(pointer: PointerData): void {
    pointer.down = false;
  }

  correctDeltaX(delta: number): number {
    let aspectRatio = this.canvas.width / this.canvas.height;
    if (aspectRatio < 1) delta *= aspectRatio;
    return delta;
  }

  correctDeltaY(delta: number): number {
    let aspectRatio = this.canvas.width / this.canvas.height;
    if (aspectRatio > 1) delta /= aspectRatio;
    return delta;
  }

  correctRadius(radius: number): number {
    let aspectRatio = this.canvas.width / this.canvas.height;
    if (aspectRatio > 1) radius *= aspectRatio;
    return radius;
  }

  splatPointer(pointer: PointerData): void {
    let dx = pointer.deltaX * this.config.SPLAT_FORCE;
    let dy = pointer.deltaY * this.config.SPLAT_FORCE;
    this.splat(pointer.texcoordX, pointer.texcoordY, dx, dy, pointer.color);
  }

  clickSplat(pointer: PointerData): void {
    const color = this.generateColor();
    color.r *= 10.0;
    color.g *= 10.0;
    color.b *= 10.0;
    
    let dx = 10 * (Math.random() - 0.5);
    let dy = 30 * (Math.random() - 0.5);
    
    this.splat(pointer.texcoordX, pointer.texcoordY, dx, dy, color);
  }

  splat(x: number, y: number, dx: number, dy: number, color: ColorRGB): void {
    if (!this.velocity || !this.dye) return;
    
    this.splatProgram.bind();
    this.gl.uniform1i(this.splatProgram.uniforms.uTarget, this.velocity.read.attach(0));
    this.gl.uniform1f(
      this.splatProgram.uniforms.aspectRatio,
      this.canvas.width / this.canvas.height
    );
    this.gl.uniform2f(this.splatProgram.uniforms.point, x, y);
    this.gl.uniform3f(this.splatProgram.uniforms.color, dx, dy, 0.0);
    this.gl.uniform1f(
      this.splatProgram.uniforms.radius,
      this.correctRadius(this.config.SPLAT_RADIUS / 100.0)
    );
    this.blit(this.velocity.write);
    this.velocity.swap();

    this.gl.uniform1i(this.splatProgram.uniforms.uTarget, this.dye.read.attach(0));
    this.gl.uniform3f(this.splatProgram.uniforms.color, color.r, color.g, color.b);
    this.blit(this.dye.write);
    this.dye.swap();
  }

  setupEventListeners(): void {
    // Mouse events
    window.addEventListener("mousedown", (e) => {
      let pointer = this.pointers[0];
      let posX = scaleByPixelRatio(e.clientX);
      let posY = scaleByPixelRatio(e.clientY);
      this.updatePointerDownData(pointer, -1, posX, posY);
      this.clickSplat(pointer);
    });

    document.body.addEventListener(
      "mousemove",
      (e) => {
        let pointer = this.pointers[0];
        let posX = scaleByPixelRatio(e.clientX);
        let posY = scaleByPixelRatio(e.clientY);
        let color = this.generateColor();
        this.updateFrame(); // start animation loop
        this.updatePointerMoveData(pointer, posX, posY, color);
      },
      { once: true }
    );

    window.addEventListener("mousemove", (e) => {
      let pointer = this.pointers[0];
      let posX = scaleByPixelRatio(e.clientX);
      let posY = scaleByPixelRatio(e.clientY);
      let color = pointer.color;
      this.updatePointerMoveData(pointer, posX, posY, color);
    });

    // Touch events
    document.body.addEventListener(
      "touchstart",
      (e) => {
        const touches = e.targetTouches;
        let pointer = this.pointers[0];
        for (let i = 0; i < touches.length; i++) {
          let posX = scaleByPixelRatio(touches[i].clientX);
          let posY = scaleByPixelRatio(touches[i].clientY);
          this.updateFrame(); // start animation loop
          this.updatePointerDownData(pointer, touches[i].identifier, posX, posY);
        }
      },
      { once: true }
    );

    window.addEventListener("touchstart", (e) => {
      const touches = e.targetTouches;
      let pointer = this.pointers[0];
      for (let i = 0; i < touches.length; i++) {
        let posX = scaleByPixelRatio(touches[i].clientX);
        let posY = scaleByPixelRatio(touches[i].clientY);
        this.updatePointerDownData(pointer, touches[i].identifier, posX, posY);
      }
    });

    window.addEventListener(
      "touchmove",
      (e) => {
        const touches = e.targetTouches;
        let pointer = this.pointers[0];
        for (let i = 0; i < touches.length; i++) {
          let posX = scaleByPixelRatio(touches[i].clientX);
          let posY = scaleByPixelRatio(touches[i].clientY);
          this.updatePointerMoveData(pointer, posX, posY, pointer.color);
        }
      },
      false
    );

    window.addEventListener("touchend", (e) => {
      const touches = e.changedTouches;
      let pointer = this.pointers[0];
      for (let i = 0; i < touches.length; i++) {
        this.updatePointerUpData(pointer);
      }
    });
  }

  start(): void {
    this.updateFrame();
  }
}
