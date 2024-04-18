import React from "react";
import Istorice from "@/components/Istorice";
export default function Istoric() {
  return (
    <div
      style={{
        backgroundImage: `url('/background.jpg')`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        Height: "100vh",
        overflowY: "auto",
      }}
    >
      <Istorice></Istorice>
    </div>
  );
}
