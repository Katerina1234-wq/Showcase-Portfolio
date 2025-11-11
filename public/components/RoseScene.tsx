"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";

function Model() {
  const gltf = useGLTF("/models/rosemodel.glb");
  if (!gltf?.scene) return null;
  return <primitive object={gltf.scene} scale={1.2} position={[0, -0.2, 0]} />;
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
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}

useGLTF.preload?.("/models/rosemodel.glb");
