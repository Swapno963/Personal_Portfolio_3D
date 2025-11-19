import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  Html,
} from "@react-three/drei";

import CanvasLoader from "../Loader";


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const [hovered, setHovered] = useState(false);
  
  return (
    // <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
    //   <ambientLight intensity={0.25} />
    //   <directionalLight position={[0, 0, 0.05]} />
    //   <mesh castShadow receiveShadow scale={2.75}>
    //     <icosahedronGeometry args={[1, 1]} />
    //     <meshStandardMaterial
    //       color='#fff8eb'
    //       polygonOffset
    //       polygonOffsetFactor={-5}
    //       flatShading
    //     />
    //     <Decal
    //       position={[0, 0, 1]}
    //       rotation={[2 * Math.PI, 0, 6.25]}
    //       scale={1}
    //       map={decal}
    //       flatShading
    //     />
    //   </mesh>
    // </Float>
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh
        castShadow
        receiveShadow
        scale={2.75}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
        }}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />

        {hovered && (
          <Html position={[0, 0, 1.5]} center>
            <div
              style={{
                background: "rgba(0,0,0,0.7)",
                color: "white",
                padding: "6px 10px",
                borderRadius: 6,
                whiteSpace: "nowrap",
                fontSize: 12,
                pointerEvents: "none",
              }}
            >
              {props.label ?? "Label"}
            </div>
          </Html>
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, name }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={true} />
        <Ball imgUrl={icon} label={name}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
