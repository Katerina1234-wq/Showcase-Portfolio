"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { Group } from "three";

function Model() {
  const gltf = useGLTF("/models/rosemodel.glb");
  const modelRef = useRef<Group>(null!);

  // Animate model
  useFrame(({ clock }) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;

      // Move up and down
      modelRef.current.position.y =
        -0.1 + Math.sin(clock.getElapsedTime()) * 0.1;
    }
  });

  if (!gltf?.scene) return null;
  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={[0.8, 0.8, 0.8]}
      position={[0, -0.1, 0]}
    />
  );
}

export default function RoseScene() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 1.6, 4], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 6, 4]} intensity={1} />
        <Suspense
          fallback={
            <Html center>
              <div className="rounded-md px-4 py-2 bg-white/80 text-gray-800">
                Loading model…
              </div>
            </Html>
          }
        >
          <Model />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 2.8}
          rotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload?.("/models/rosemodel.glb");
