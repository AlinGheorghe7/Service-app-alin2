"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
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

    if (!marca) {
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
    <>
      {" "}
      <div
        style={{
          backgroundImage: `url('/background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          overflowY: "auto",
          justifyContent: "center",
          alignItems: "center",
          // Alte stiluri dorite pot fi adăugate aici
        }}
      >
        {" "}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            onChange={(e) => setNume(e.target.value)}
            value={nume}
            className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
            type="text"
            placeholder="nume"
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
          <input
            onChange={(e) => setMarca(e.target.value)}
            value={marca}
            className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
            type="text"
            placeholder="Marca"
          />
          <input
            onChange={(e) => setModel(e.target.value)}
            value={model}
            className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
            type="text"
            placeholder="Model"
          />
          <input
            onChange={(e) => setSasiu(e.target.value)}
            value={sasiu}
            className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
            type="text"
            placeholder="Sasiu"
          />
          <input
            onChange={(e) => setNumar_inmatriculare(e.target.value)}
            value={numar_inmatriculare}
            className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
            type="text"
            placeholder="Numar inmatriculare"
          />
          <input
            onChange={(e) => setAnul_fabricatiei(e.target.value)}
            value={anul_fabricatiei}
            className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
            type="text"
            placeholder="Anul fabricatiei"
          />
          <input
            onChange={(e) => setMotorizare(e.target.value)}
            value={motorizare}
            className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
            type="text"
            placeholder="Motorizare"
          />
          <input
            onChange={(e) => {
              setCai(e.target.value);
              setKw_putere(Number((e.target.value * 0.745699872).toFixed(3)));
            }}
            value={cai}
            className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
            type="text"
            placeholder="Cai putere"
          />
          <input
            value={kw_putere}
            readOnly
            className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
            type="text"
            placeholder="Kw putere"
          />
          <input
            onChange={(e) => setProbleme(e.target.value)}
            value={probleme}
            className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
            type="text"
            placeholder="Probleme"
          />

          {/* Restul câmpurilor de input */}
          <button
            type="submit"
            className="bg-orange-700 font-bold text-white py-3 px-6 rounded-full"
          >
            Adaugă
          </button>
        </form>
      </div>
    </>
  );
}
