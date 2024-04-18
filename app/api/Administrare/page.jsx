"use client";
import React, { useState, useEffect } from "react";
import AddTopic from "@/app/addTopic/page";
import ServiceList from "@/components/ServiceList";

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
      <AddTopic></AddTopic>
      <ServiceList></ServiceList>
    </div>
  );
}
