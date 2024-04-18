"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({
  id,
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
}) {
  const [newNume, setNewNume] = useState(nume);
  const [newNumar_de_telefon, setNewNumar_de_telefon] =
    useState(numar_de_telefon);
  const [newEmail, setNewEmail] = useState(email);
  const [newMarca, setNewMarca] = useState(marca);
  const [newModel, setNewModel] = useState(model);
  const [newSasiu, setNewSasiu] = useState(sasiu);
  const [newNumar_inmatriculare, setNewNumar_inmatriculare] =
    useState(numar_inmatriculare);
  const [newAnul_fabricatiei, setNewAnul_fabricatiei] =
    useState(anul_fabricatiei);
  const [newMotorizare, setNewMotorizare] = useState(motorizare);
  const [newCai, setNewCai] = useState(cai);
  const [newKw_putere, setNewKw_putere] = useState(kw_putere);
  const [newProbleme, setNewProbleme] = useState(probleme);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newNume,
          newNumar_de_telefon,
          newEmail,
          newMarca,
          newSasiu,
          newProbleme,
          newModel,
          newNumar_inmatriculare,
          newAnul_fabricatiei,
          newMotorizare,
          newCai,
          newKw_putere,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/api/Administrare");
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          onChange={(e) => setNewNume(e.target.value)}
          value={newNume}
          className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
          type="text"
          placeholder="nume"
        />

        <input
          onChange={(e) => setNewNumar_de_telefon(e.target.value)}
          value={newNumar_de_telefon}
          className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
          type="text"
          placeholder="numar de telefon"
        />

        <input
          onChange={(e) => setNewEmail(e.target.value)}
          value={newEmail}
          className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
          type="text"
          placeholder="email"
        />

        <input
          onChange={(e) => setNewMarca(e.target.value)}
          value={newMarca}
          className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
          type="text"
          placeholder="marca"
        />

        <input
          onChange={(e) => setNewModel(e.target.value)}
          value={newModel}
          className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
          type="text"
          placeholder="model"
        />

        <input
          onChange={(e) => setNewSasiu(e.target.value)}
          value={newSasiu}
          className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
          type="text"
          placeholder="sasiu"
        />

        <input
          onChange={(e) => setNewNumar_inmatriculare(e.target.value)}
          value={newNumar_inmatriculare}
          className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
          type="text"
          placeholder="numar_inmatriculare"
        />

        <input
          onChange={(e) => setNewAnul_fabricatiei(e.target.value)}
          value={newAnul_fabricatiei}
          className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
          type="text"
          placeholder="anul_fabricatiei"
        />

        <input
          onChange={(e) => setNewMotorizare(e.target.value)}
          value={newMotorizare}
          className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
          type="text"
          placeholder="motorizare"
        />

        <input
          onChange={(e) => {
            setNewCai(e.target.value);
            setNewKw_putere(Number((e.target.value * 0.745699872).toFixed(3)));
          }}
          value={newCai}
          className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
          type="text"
          placeholder="cai"
        />

        <input
          onChange={(e) => setNewProbleme(e.target.value)}
          value={newProbleme}
          className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
          type="text"
          placeholder="probleme"
        />

        <button className="bg-orange-700 font-bold text-white py-3 px-6 w-fit">
          Actualizati
        </button>
      </form>
    </div>
  );
}
