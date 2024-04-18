"use client";
import React, { useRef } from "react";
import "./styles.css"; // Importă fișierul CSS pentru animație
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/lambo.gltf");
  const group = useRef();

  // Folosim useFrame pentru a actualiza constant rotatia modelului
  useFrame(() => {
    group.current.rotation.y += 0.004; // Se rotește în jurul axei y cu un unghi mic
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

export default function About() {
  return (
    <div>
      <div
        className="flex h-screen justify-center"
        style={{
          position: "relative", // Adaugăm poziția relativă pentru a poziționa modelul absolut
          background: "url('/background.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div
          className="text-8xl absolute burningText"
          style={{
            top: "25%",
            fontFamily: "Rocket Pop italic",
          }}
        >
          Service Alin
        </div>
        <div
          className=" flex text-sm absolute justify-center "
          style={{
            fontWeight: "lighter",
            bottom: "1%",
          }}
        >
          Platforma dedicata exclusiv personalului staff SERVICE ALIN SRL.
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%", // Ajustăm lățimea Canvas-ului
            height: "100%", // Ajustăm înălțimea Canvas-ului
          }}
        >
          <Canvas>
            <ambientLight intensity={0.5} /> {/* Lumină ambientală */}
            <pointLight
              position={[3, 1, 1]}
              color="#ff9900"
              intensity={20}
            />{" "}
            {/* Lumină portocalie */}
            <Stage environment={"city"} intensity={0.1}>
              <Model scale={[0.07, 0.07, 0.07]} />
            </Stage>
          </Canvas>
        </div>
      </div>
    </div>
  );
}
