"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import carlogo from "../public/carlogo.png";
import "./styles.css";

export default function Header() {
  const lightRef = useRef(null);
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setLightPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setLightPosition({ x: -100, y: -100 }); // Poziționare în afara zonei vizibile
  };

  return (
    <div className="header-container" onMouseMove={handleMouseMove}>
      <Image className="absolute justify-start ml-8" src={carlogo} width={90} />
      <nav
        className="flex justify-center py-3 text-white"
        style={{
          fontWeight: "lighter",
          backgroundImage: "url('/header-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
        onMouseLeave={handleMouseLeave}
      >
        <Link href="/" className="nav-link text-xl mx-4 hover:text-orange-500">
          Acasa
        </Link>
        <Link
          href="/api/Administrare"
          className="nav-link text-xl mx-4 hover:text-orange-500"
        >
          Administrare clienți
        </Link>
        <Link
          href="/api/Programari"
          className="nav-link text-xl mx-4 hover:text-orange-500"
        >
          Programări clienți
        </Link>
        <Link
          href="/api/Istoric"
          className="nav-link text-xl mx-4 hover:text-orange-500"
        >
          Istoric service
        </Link>
        <Link
          href="/api/Statistici"
          className="nav-link text-xl mx-4 hover:text-orange-500 "
        >
          Statistici
        </Link>
      </nav>
      {lightPosition.x >= 0 &&
        lightPosition.y >= 0 && ( // Verificăm dacă mouse-ul este peste meniu
          <div
            ref={lightRef}
            className="light-effect"
            style={{
              left: `${lightPosition.x}px`,
              top: `${lightPosition.y}px`,
            }}
          ></div>
        )}
    </div>
  );
}
