import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

const FloatingScene: React.FC = () => {
  const sphere1Ref = useRef<THREE.Mesh>(null);
  const sphere2Ref = useRef<THREE.Mesh>(null);
  const sphere3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (sphere1Ref.current) {
      sphere1Ref.current.rotation.x = Math.sin(t / 4) * Math.PI;
      sphere1Ref.current.rotation.y = Math.cos(t / 2) * Math.PI;
      sphere1Ref.current.position.y = Math.sin(t / 1.5) * 0.5;
    }
    
    if (sphere2Ref.current) {
      sphere2Ref.current.rotation.x = Math.cos(t / 3) * Math.PI;
      sphere2Ref.current.rotation.z = Math.sin(t / 2) * Math.PI;
      sphere2Ref.current.position.x = Math.cos(t) * 2;
    }
    
    if (sphere3Ref.current) {
      sphere3Ref.current.rotation.y = Math.sin(t / 2) * Math.PI;
      sphere3Ref.current.rotation.z = Math.cos(t / 3) * Math.PI;
      sphere3Ref.current.position.z = Math.sin(t / 2) * 1;
    }
  });

  return (
    <>
      <Stars radius={300} depth={60} count={5000} factor={7} saturation={0} fade speed={1} />
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7b2ff7" />
      
      {/* Main floating sphere */}
      <Sphere ref={sphere1Ref} args={[1, 100, 200]} scale={2} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#00d4ff"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive="#00d4ff"
          emissiveIntensity={0.3}
        />
      </Sphere>
      
      {/* Secondary sphere */}
      <Sphere ref={sphere2Ref} args={[0.5, 100, 200]} scale={1.5} position={[3, 1, -2]}>
        <MeshDistortMaterial
          color="#7b2ff7"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          emissive="#7b2ff7"
          emissiveIntensity={0.4}
        />
      </Sphere>
      
      {/* Tertiary sphere */}
      <Sphere ref={sphere3Ref} args={[0.3, 100, 200]} scale={1} position={[-2, -1, -1]}>
        <MeshDistortMaterial
          color="#f093fb"
          attach="material"
          distort={0.4}
          speed={2.5}
          roughness={0.3}
          metalness={0.7}
          emissive="#f093fb"
          emissiveIntensity={0.2}
        />
      </Sphere>
    </>
  );
};

export default FloatingScene;
