
import { WebGLContext } from './types';

export function getWebGLContext(canvas: HTMLCanvasElement): WebGLContext | null {
  const params = {
    alpha: true,
    depth: false,
    stencil: false,
    antialias: false,
    preserveDrawingBuffer: false
  };

  let gl = canvas.getContext('webgl2', params) as WebGLRenderingContext;
  const isWebGL2 = !!gl;
  
  if (!isWebGL2) {
    gl = (canvas.getContext('webgl', params) || 
         canvas.getContext('experimental-webgl', params)) as WebGLRenderingContext;
  }

  if (!gl) {
    console.error('WebGL not supported');
    return null;
  }

  // Extension handling and capabilities detection
  let halfFloat;
  let supportLinearFiltering;
  
  if (isWebGL2) {
    gl.getExtension('EXT_color_buffer_float');
    supportLinearFiltering = gl.getExtension('OES_texture_float_linear');
    halfFloat = gl.getExtension('OES_texture_half_float');
  } else {
    halfFloat = gl.getExtension('OES_texture_half_float');
    supportLinearFiltering = gl.getExtension('OES_texture_half_float_linear');
  }

  // Using standard WebGL 1.0 formats with polyfill for WebGL 2.0 specific formats
  const halfFloatTexType = halfFloat ? halfFloat.HALF_FLOAT_OES : gl.FLOAT;

  // Using compatibility constants for formats
  const formatRGBA = {
    internalFormat: gl.RGBA,
    format: gl.RGBA
  };
  
  const formatRG = {
    internalFormat: gl.RGBA, 
    format: gl.RGBA
  };
  
  const formatR = {
    internalFormat: gl.RGBA,
    format: gl.RGBA
  };

  return {
    gl,
    ext: {
      formatRGBA,
      formatRG,
      formatR,
      halfFloatTexType,
      supportLinearFiltering: !!supportLinearFiltering
    }
  };
}

export function useRGBAFormat(gl: WebGLRenderingContext) {
  return {
    internalFormat: gl.RGBA,
    format: gl.RGBA
  };
}

export function useRGFormat(gl: WebGLRenderingContext) {
  return {
    internalFormat: gl.RGBA, 
    format: gl.RGBA
  };
}

export function useRFormat(gl: WebGLRenderingContext) {
  return {
    internalFormat: gl.RGBA,
    format: gl.RGBA
  };
}

// Add the missing utility functions
export function HSVtoRGB(h: number, s: number, v: number) {
  let r: number, g: number, b: number;
  let i = Math.floor(h * 6);
  let f = h * 6 - i;
  let p = v * (1 - s);
  let q = v * (1 - f * s);
  let t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0: r = v; g = t; b = p; break;
    case 1: r = q; g = v; b = p; break;
    case 2: r = p; g = v; b = t; break;
    case 3: r = p; g = q; b = v; break;
    case 4: r = t; g = p; b = v; break;
    case 5: r = v; g = p; b = q; break;
    default: r = 0; g = 0; b = 0;
  }

  return { r, g, b };
}

export function scaleByPixelRatio(value: number): number {
  return value * (window.devicePixelRatio || 1);
}

export function wrap(value: number, min: number, max: number): number {
  const range = max - min;
  return range === 0 ? min : min + ((((value - min) % range) + range) % range);
}

export function getUniforms(gl: WebGLRenderingContext, program: WebGLProgram) {
  const uniforms: { [key: string]: WebGLUniformLocation } = {};
  const uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
  
  for (let i = 0; i < uniformCount; i++) {
    const uniformInfo = gl.getActiveUniform(program, i);
    if (uniformInfo) {
      const uniformName = uniformInfo.name;
      uniforms[uniformName] = gl.getUniformLocation(program, uniformName) as WebGLUniformLocation;
    }
  }
  
  return uniforms;
}

export function hashCode(str: string): number {
  let hash = 0;
  if (str.length === 0) return hash;
  
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  
  return hash;
}

export function compileShader(
  gl: WebGLRenderingContext, 
  type: number, 
  source: string, 
  keywords?: string[] | null
): WebGLShader {
  // If keywords are provided, prepend them to the shader source
  if (keywords && keywords.length > 0) {
    source = '#define ' + keywords.join('\n#define ') + '\n' + source;
  }

  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Could not compile shader: ' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    throw new Error('Shader compilation failed');
  }

  return shader;
}

export function createProgram(
  gl: WebGLRenderingContext, 
  vertexShader: WebGLShader, 
  fragmentShader: WebGLShader
): WebGLProgram {
  const program = gl.createProgram()!;
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Could not link program: ' + gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    throw new Error('Program linking failed');
  }

  return program;
}
