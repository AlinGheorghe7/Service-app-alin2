import connectMongoDB from "@/app/libs/mongodb";
import Topic from "@/app/model/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    nume,
    numar_de_telefon,
    email,
    marca,
    model,
    numar_inmatriculare,
    anul_fabricatiei,
    motorizare,
    cai,
    kw_putere,
    sasiu,
    probleme,
    programare,
    primire,
    procesare,
    durata,
  } = await request.json();
  await connectMongoDB();
  await Topic.create({
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
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
