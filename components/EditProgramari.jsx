"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function EditTopicForm({
  id,
  nume,
  numar_de_telefon,
  email,
  programare,
}) {
  const options = [
    { label: "8:00" },
    { label: "8:30" },
    { label: "9:00" },
    { label: "9:30" },
    { label: "10:00" },
    { label: "10:30" },
    { label: "11:00" },
    { label: "11:30" },
    { label: "12:00" },
    { label: "12:30" },
    { label: "13:00" },
    { label: "13:30" },
    { label: "14:00" },
    { label: "14:30" },
    { label: "15:00" },
    { label: "15:30" },
    { label: "16:00" },
    { label: "16:30" },
    { label: "17:00" },
  ];

  const [newNume, setNewNume] = useState(nume);
  const [newNumar_de_telefon, setNewNumar_de_telefon] =
    useState(numar_de_telefon);
  const [newEmail, setNewEmail] = useState(email);
  const [newProgramare, setNewProgramare] = useState(programare);

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
          newProgramare,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/api/Programari");
    } catch (error) {
      console.log(error);
    }
  };

  return (
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

      {/* Utilizăm elementul `select` pentru a permite utilizatorului să selecteze o programare */}
      <select
        onChange={(e) => setNewProgramare(e.target.value)}
        value={newProgramare}
        className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
      >
        {options.map((option) => (
          <option key={option.label} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>

      <button className="bg-orange-700 font-bold text-white py-3 px-6 w-fit">
        Actualizati
      </button>
    </form>
  );
}
