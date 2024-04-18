import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { IoAdd } from "react-icons/io5";

import RemoveBtn from "./removebtn";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();

  // Split topics array into chunks of 3
  const chunkedTopics = [];
  for (let i = 0; i < topics.length; i += 3) {
    chunkedTopics.push(topics.slice(i, i + 3));
  }

  return (
    <>
      {chunkedTopics.map((chunk, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {chunk.map((t) => (
            <div
              key={t._id}
              className="rounded-3xl p-7 border bg-black bg-opacity-60 border-slate-300 my-8 flex justify-between gap-2 items-start"
            >
              <div>
                <h2 className="font-bold text-2xl">
                  <span className="text-orange-600">Nume complet:</span>{" "}
                  <span className="text-white">{t.nume}</span>
                </h2>
                <div>Numar de telefon: {t.numar_de_telefon}</div>
                <div>Email: {t.email}</div>
                <div>Marca: {t.marca}</div>
                <div>Model: {t.model}</div>
                <div>Sasiu: {t.sasiu}</div>
                <div>Numar inmatriculare: {t.numar_inmatriculare}</div>
                <div>Anul fabricatiei: {t.anul_fabricatiei}</div>
                <div>Motorizare: {t.motorizare}</div>
                <div>Cai putere: {t.cai}</div>
                <div>Kw putere: {t.kw_putere}</div>
                <div>Problemele masinii: {t.probleme}</div>
              </div>

              <div className="flex gap-3">
                <Link href={`/addCar/${t._id}`}>
                  <IoAdd size={24} />
                </Link>
                <span>Masina | </span>
                <RemoveBtn id={t._id} />
                <Link href={`/editTopic/${t._id}`}>
                  <HiPencilAlt size={24} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ))}
      {/* Separator între grupurile de liste */}
      {chunkedTopics.length > 0 && (
        <div className="my-8 border-t border-gray-300"></div>
      )}
    </>
  );
}
