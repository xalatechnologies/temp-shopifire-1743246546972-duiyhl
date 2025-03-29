
import { IMaterial, IProgram } from './types';
import { createProgram, getUniforms, hashCode } from './webgl-utils';

export class Material implements IMaterial {
  vertexShader: WebGLShader;
  fragmentShaderSource: string;
  programs: WebGLProgram[];
  activeProgram: WebGLProgram | null;
  uniforms: { [key: string]: WebGLUniformLocation };
  gl: WebGLRenderingContext;

  constructor(gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShaderSource: string) {
    this.gl = gl;
    this.vertexShader = vertexShader;
    this.fragmentShaderSource = fragmentShaderSource;
    this.programs = [];
    this.activeProgram = null;
    this.uniforms = {};
  }

  setKeywords(keywords: string[]): void {
    const gl = this.gl;
    let hash = 0;
    
    for (let i = 0; i < keywords.length; i++) {
      hash += hashCode(keywords[i]);
    }
    
    let program = this.programs[hash];
    
    if (program == null) {
      const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
      
      if (!fragmentShader) {
        throw new Error("Failed to create fragment shader");
      }
      
      let source = this.fragmentShaderSource;
      
      if (keywords.length > 0) {
        source = "#define " + keywords.join("\n#define ") + "\n" + source;
      }
      
      gl.shaderSource(fragmentShader, source);
      gl.compileShader(fragmentShader);
      
      if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        console.trace(gl.getShaderInfoLog(fragmentShader));
      }
      
      program = createProgram(gl, this.vertexShader, fragmentShader);
      this.programs[hash] = program;
    }
    
    if (program === this.activeProgram) return;
    
    this.uniforms = getUniforms(gl, program);
    this.activeProgram = program;
  }

  bind(): void {
    const gl = this.gl;
    if (this.activeProgram) {
      gl.useProgram(this.activeProgram);
    }
  }
}

export class Program implements IProgram {
  uniforms: { [key: string]: WebGLUniformLocation };
  program: WebGLProgram;
  gl: WebGLRenderingContext;

  constructor(gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) {
    this.gl = gl;
    this.program = createProgram(gl, vertexShader, fragmentShader);
    this.uniforms = getUniforms(gl, this.program);
  }

  bind(): void {
    this.gl.useProgram(this.program);
  }
}
