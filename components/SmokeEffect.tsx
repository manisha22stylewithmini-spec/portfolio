"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SmokeMaterial = {
    uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#cfe6ff') },
        uOpacity: { value: 0.18 }
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor;
        uniform float uOpacity;
        varying vec2 vUv;

        // Simplex 3D Noise 
        // by Ian McEwan, Ashima Arts
        vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

        float snoise(vec3 v){ 
            const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
            const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

            vec3 i  = floor(v + dot(v, C.yyy) );
            vec3 x0 = v - i + dot(i, C.xxx) ;

            vec3 g = step(x0.yzx, x0.xyz);
            vec3 l = 1.0 - g;
            vec3 i1 = min( g.xyz, l.zxy );
            vec3 i2 = max( g.xyz, l.zxy );

            vec3 x1 = x0 - i1 + 1.0 * C.xxx;
            vec3 x2 = x0 - i2 + 2.0 * C.xxx;
            vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

            i = mod(i, 289.0 ); 
            vec4 p = permute( permute( permute( 
                        i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                    + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
                    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

            float n_ = 1.0/7.0;
            vec3  ns = n_ * D.wyz - D.xzx;

            vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

            vec4 x_ = floor(j * ns.z);
            vec4 y_ = floor(j - 7.0 * x_ );

            vec4 x = x_ *ns.x + ns.yyyy;
            vec4 y = y_ *ns.x + ns.yyyy;
            vec4 h = 1.0 - abs(x) - abs(y);

            vec4 b0 = vec4( x.xy, y.xy );
            vec4 b1 = vec4( x.zw, y.zw );

            vec4 s0 = floor(b0)*2.0 + 1.0;
            vec4 s1 = floor(b1)*2.0 + 1.0;
            vec4 sh = -step(h, vec4(0.0));

            vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
            vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

            vec3 p0 = vec3(a0.xy,h.x);
            vec3 p1 = vec3(a0.zw,h.y);
            vec3 p2 = vec3(a1.xy,h.z);
            vec3 p3 = vec3(a1.zw,h.w);

            vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
            p0 *= norm.x;
            p1 *= norm.y;
            p2 *= norm.z;
            p3 *= norm.w;

            vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
            m = m * m;
            return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                        dot(p2,x2), dot(p3,x3) ) );
        }

        float fbm(vec3 p) {
            float value = 0.0;
            float amplitude = 0.5;
            float frequency = 1.0;
            for (int i = 0; i < 4; i++) {
                value += amplitude * snoise(p * frequency);
                p.z += uTime * 0.05; // Internal animate drift
                frequency *= 2.0;
                amplitude *= 0.5;
            }
            return value;
        }

        void main() {
            vec2 pos = vUv * 2.0 - 1.0;
            
            // Scaled coordinates to stretch noise horizontally
            vec3 p = vec3(pos * vec2(2.5, 1.0), uTime * 0.1); 

            // Layered noise for organic flow
            float n = fbm(p + fbm(p + vec3(0.0, -uTime * 0.15, 0.0)));
            n = (n + 1.0) * 0.5; // normalize to 0.0 -> 1.0
            
            // Masking/Fading
            // Base fade: dense at bottom (0.0), fades out going up (0.5+). 
            // Inverted vUv.y logic: vUv.y=0 is bottom, vUv.y=1 is top.
            float fadeY = smoothstep(1.0, 0.0, vUv.y * 1.5);
            
            // Soft edges horizontally so it doesn't clip on wide screens
            float fadeX = smoothstep(0.0, 0.2, vUv.x) * smoothstep(1.0, 0.8, vUv.x);
            
            float alpha = n * fadeY * fadeX * uOpacity;

            gl_FragColor = vec4(uColor, alpha);
        }
    `
};

function SmokePlane() {
    const materialRef = useRef<THREE.ShaderMaterial>(null);

    useFrame((state) => {
        if (materialRef.current) {
            // Unlink time directly to keep it slow and smooth
            materialRef.current.uniforms.uTime.value = state.clock.elapsedTime * 0.4;
        }
    });

    return (
        <mesh>
            <planeGeometry args={[12, 4]} />
            <shaderMaterial
                ref={materialRef}
                attach="material"
                args={[SmokeMaterial]}
                transparent={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </mesh>
    );
}

export default function SmokeEffect() {
    return (
        <div className="absolute bottom-0 left-0 w-full h-[300px] md:h-[400px] pointer-events-none z-0 overflow-hidden">
            <Canvas camera={{ position: [0, 0, 2], fov: 60 }} className="w-full h-full">
                <SmokePlane />
            </Canvas>
        </div>
    );
}
