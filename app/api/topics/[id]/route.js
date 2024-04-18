import connectMongoDB from "@/app/libs/mongodb";
import Topic from "@/app/model/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newNume: nume,
    newNumar_de_telefon: numar_de_telefon,
    newEmail: email,
    newMarca: marca,
    newModel: model,
    newSasiu: sasiu,
    newNumar_inmatriculare: numar_inmatriculare,
    newAnul_fabricatiei: anul_fabricatiei,
    newMotorizare: motorizare,
    newCai: cai,
    newKw_putere: kw_putere,
    newProbleme: probleme,
    newProgramare: programare,
    newPrimire: primire,
    newProcesare: procesare,
    newDurata: durata,
  } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, {
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
    programare,
    primire,
    procesare,
    durata,
  });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
