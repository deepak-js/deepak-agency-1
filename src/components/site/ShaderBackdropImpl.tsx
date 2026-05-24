import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;

  // Cheap 2D simplex-ish noise
  vec3 hash3(vec2 p) {
    vec3 q = vec3(dot(p, vec2(127.1, 311.7)),
                  dot(p, vec2(269.5, 183.3)),
                  dot(p, vec2(419.2, 371.9)));
    return fract(sin(q) * 43758.5453);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float a = hash3(i).x;
    float b = hash3(i + vec2(1.0, 0.0)).x;
    float c = hash3(i + vec2(0.0, 1.0)).x;
    float d = hash3(i + vec2(1.0, 1.0)).x;
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p *= 2.02;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = uv * 2.5;
    p += uMouse * 0.35;
    float t = uTime * 0.06;

    float n = fbm(p + vec2(t, -t * 0.7));
    float m = fbm(p * 1.4 + vec2(-t * 0.5, t * 0.9) + n);

    // Pale lavender + ice blue + white (Redpanda-inspired light)
    vec3 lavender = vec3(0.86, 0.84, 0.95);
    vec3 ice = vec3(0.84, 0.92, 0.98);
    vec3 white = vec3(0.99, 0.99, 1.0);

    vec3 col = mix(white, lavender, smoothstep(0.25, 0.85, m));
    col = mix(col, ice, smoothstep(0.55, 0.95, n * m));

    // Soft vignette toward white edges
    float vig = smoothstep(1.2, 0.45, length(uv - 0.5));
    col = mix(white, col, vig);

    gl_FragColor = vec4(col, 0.55);
  }
`;

function Plane() {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    [],
  );

  useFrame((state, dt) => {
    if (!mat.current) return;
    const u = mat.current.uniforms;
    u.uTime.value += dt;
    const { x, y } = state.pointer;
    mouse.current.x += (x - mouse.current.x) * 0.04;
    mouse.current.y += (y - mouse.current.y) * 0.04;
    u.uMouse.value.copy(mouse.current);
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={mat}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
}

export default function ShaderBackdrop() {
  return (
    <Canvas
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 1] }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <Plane />
    </Canvas>
  );
}
