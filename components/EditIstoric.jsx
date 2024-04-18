"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function EditTopicForm({ id, primire, procesare, durata }) {
  const options = [
    { label: "10 minute" },
    { label: "20 minute" },
    { label: "30 minute" },
    { label: "40 minute" },
    { label: "50 minute" },
    { label: "60 minute" },
    { label: "70 minute" },
    { label: "80 minute" },
    { label: "90 minute" },
    { label: "100 minute" },
    { label: "110 minute" },
    { label: "120 minute" },
    { label: "130 minute" },
    { label: "140 minute" },
    { label: "150 minute" },
    { label: "160 minute" },
    { label: "170 minute" },
    { label: "180 minute" },
    { label: "190 minute" },
    { label: "200 minute" },
    { label: "210 minute" },
    { label: "220 minute" },
    { label: "230 minute" },
    { label: "240 minute" },
  ];

  const [newPrimire, setNewPrimire] = useState(primire);
  const [newProcesare, setNewProcesare] = useState(procesare);
  const [newDurata, setNewDurata] = useState(durata);

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
          newPrimire,
          newProcesare,
          newDurata,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/api/Istoric");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewPrimire(e.target.value)}
        value={newPrimire}
        className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
        type="text"
        placeholder="primire"
      />

      <input
        onChange={(e) => setNewProcesare(e.target.value)}
        value={newProcesare}
        className="rounded-full border border-black bg-black bg-opacity-20 px-8 py-2 text-white"
        type="text"
        placeholder="procesare"
      />

      <select
        onChange={(e) => setNewDurata(e.target.value)}
        value={newDurata}
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
