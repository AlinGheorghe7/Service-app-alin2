"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [showForm, setShowForm] = useState(false);
  const [nume, setNume] = useState("");
  const [numar_de_telefon, setNumar_de_telefon] = useState("");
  const [email, setEmail] = useState("");
  const [marca, setMarca] = useState("");
  const [model, setModel] = useState("");
  const [sasiu, setSasiu] = useState("");
  const [numar_inmatriculare, setNumar_inmatriculare] = useState("");
  const [anul_fabricatiei, setAnul_fabricatiei] = useState("");
  const [motorizare, setMotorizare] = useState("");
  const [cai, setCai] = useState("");
  const [kw_putere, setKw_putere] = useState("");
  const [probleme, setProbleme] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nume || !numar_de_telefon) {
      alert("Vă rugăm completați datele necesare.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          nume,
          numar_de_telefon,
          email,
          marca,
          model,
          sasiu,
          numar_inmatriculare,
          anul_fabricatiei,
          motorizare,
          cai,
          kw_putere,
          probleme,
        }),
      });

      if (res.ok) {
        router.push("/api/Administrare");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url('/background.jpg')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          Height: "100vh",
          overflowY: "auto",
        }}
      ></div>
      {!showForm && (
        <button
          className=" rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-gray-300 "
          onClick={() => setShowForm(true)}
        >
          Adaugă client
        </button>
      )}
      {showForm && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            onChange={(e) => setNume(e.target.value)}
            value={nume}
            className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
            type="text"
            placeholder="Nume"
          />
          <input
            onChange={(e) => setNumar_de_telefon(e.target.value)}
            value={numar_de_telefon}
            className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
            type="text"
            placeholder="numar de telefon"
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
            type="text"
            placeholder="email"
          />

          <button
            type="submit"
            className="bg-orange-700 font-bold text-white py-3 px-6 rounded-full"
          >
            Adaugă
          </button>
        </form>
      )}
    </div>
  );
}
