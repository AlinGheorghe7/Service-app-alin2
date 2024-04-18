"use client";
import React, { useRef } from "react";
import "./styles.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/lambo.gltf");
  const group = useRef();

  useFrame(() => {
    group.current.rotation.y += 0.004;
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
          position: "relative",
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
            width: "100%",
            height: "100%",
          }}
        >
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight
              position={[3, 1, 1]}
              color="#ff9900"
              intensity={20}
            />{" "}
            <Stage environment={"city"} intensity={0.1}>
              <Model scale={[0.07, 0.07, 0.07]} />
            </Stage>
          </Canvas>
        </div>
      </div>
    </div>
  );
}
