"use client";
import React, { useState, useEffect } from "react";
import Programare from "@/components/Programare";

export default function Administrare() {
  return (
    <div
      style={{
        backgroundImage: `url('/background.jpg')`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        Height: "100vh",
        overflowY: "auto",
        // Puteți adăuga alte stiluri dorite aici
      }}
    >
      <Programare></Programare>
    </div>
  );
}
