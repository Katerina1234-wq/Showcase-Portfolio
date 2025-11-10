"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei";
import * as THREE from "three";

function Model() {
  const gltf = useGLTF("/models/rosemodel.glb");
  return <primitive object={gltf.scene} scale={1.2} position={[0, -0.2, 0]} />;
}

export default function RoseScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 1.6, 4], fov: 45 }}
        shadows
        dpr={[1, 2]}
        gl={{
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
          outputColorSpace: THREE.SRGBColorSpace, // ✅ Updated property
        }}
      >
        <color attach="background" args={["#fefafc"]} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 6, 4]} intensity={1.2} castShadow />

        <Suspense
          fallback={
            <Html center>
              <div className="rounded-md px-4 py-2 bg-white/80 text-gray-800">
                Loading model…
              </div>
            </Html>
          }
        >
          {/* Adds realistic ambient lighting */}
          <Environment preset="sunset" background={false} />
          <Model />
        </Suspense>

        <OrbitControls enableZoom enablePan />
      </Canvas>
    </div>
  );
}


useGLTF.preload("/models/rosemodel.glb");
