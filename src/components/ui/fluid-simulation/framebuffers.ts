
import { FBO, DoubleFBO } from './types';

export function createFBO(
  gl: WebGLRenderingContext,
  w: number,
  h: number,
  internalFormat: number,
  format: number,
  type: number,
  param: number
): FBO {
  gl.activeTexture(gl.TEXTURE0);
  
  const texture = gl.createTexture();
  if (!texture) throw new Error("Failed to create texture");
  
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);

  const fbo = gl.createFramebuffer();
  if (!fbo) throw new Error("Failed to create framebuffer");
  
  gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
  gl.framebufferTexture2D(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    gl.TEXTURE_2D,
    texture,
    0
  );
  gl.viewport(0, 0, w, h);
  gl.clear(gl.COLOR_BUFFER_BIT);

  const texelSizeX = 1.0 / w;
  const texelSizeY = 1.0 / h;
  
  return {
    texture,
    fbo,
    width: w,
    height: h,
    texelSizeX,
    texelSizeY,
    attach(id: number): number {
      gl.activeTexture(gl.TEXTURE0 + id);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      return id;
    },
  };
}

export function createDoubleFBO(
  gl: WebGLRenderingContext,
  w: number,
  h: number,
  internalFormat: number,
  format: number,
  type: number,
  param: number
): DoubleFBO {
  let fbo1 = createFBO(gl, w, h, internalFormat, format, type, param);
  let fbo2 = createFBO(gl, w, h, internalFormat, format, type, param);

  return {
    width: w,
    height: h,
    texelSizeX: fbo1.texelSizeX,
    texelSizeY: fbo1.texelSizeY,
    get read(): FBO {
      return fbo1;
    },
    set read(value: FBO) {
      fbo1 = value;
    },
    get write(): FBO {
      return fbo2;
    },
    set write(value: FBO) {
      fbo2 = value;
    },
    swap(): void {
      const temp = fbo1;
      fbo1 = fbo2;
      fbo2 = temp;
    },
  };
}

export function resizeFBO(
  gl: WebGLRenderingContext,
  target: FBO,
  w: number,
  h: number,
  internalFormat: number,
  format: number,
  type: number,
  param: number,
  copyProgram: any
): FBO {
  const newFBO = createFBO(gl, w, h, internalFormat, format, type, param);
  copyProgram.bind();
  gl.uniform1i(copyProgram.uniforms.uTexture, target.attach(0));
  blit(gl, newFBO);
  return newFBO;
}

export function resizeDoubleFBO(
  gl: WebGLRenderingContext,
  target: DoubleFBO,
  w: number,
  h: number,
  internalFormat: number,
  format: number,
  type: number,
  param: number,
  copyProgram: any
): DoubleFBO {
  if (target.width === w && target.height === h) return target;
  
  target.read = resizeFBO(
    gl,
    target.read,
    w,
    h,
    internalFormat,
    format,
    type,
    param,
    copyProgram
  );
  
  target.write = createFBO(gl, w, h, internalFormat, format, type, param);
  target.width = w;
  target.height = h;
  target.texelSizeX = 1.0 / w;
  target.texelSizeY = 1.0 / h;
  
  return target;
}

export function blit(gl: WebGLRenderingContext, target?: FBO, clear: boolean = false): void {
  if (target == null) {
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  } else {
    gl.viewport(0, 0, target.width, target.height);
    gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
  }
  
  if (clear) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  }
  
  gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
}

export function getResolution(
  gl: WebGLRenderingContext,
  resolution: number
): { width: number; height: number } {
  let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
  if (aspectRatio < 1) aspectRatio = 1.0 / aspectRatio;
  
  const min = Math.round(resolution);
  const max = Math.round(resolution * aspectRatio);
  
  if (gl.drawingBufferWidth > gl.drawingBufferHeight)
    return { width: max, height: min };
  else 
    return { width: min, height: max };
}
