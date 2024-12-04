import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model.jsx";

const Scene = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      {}
      <ambientLight />
    </>
  );
};

const App = () => {
  return (
    <Canvas>
      <OrbitControls />

      <Scene />
    </Canvas>
  );
};

export default App;
