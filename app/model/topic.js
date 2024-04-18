import mongoose, { Schema } from "mongoose";
import { Inter } from "next/font/google";

const topicSchema = new Schema(
  {
    nume: String,
    numar_de_telefon: String,
    email: String,
    marca: String,
    model: String,
    sasiu: String,
    numar_inmatriculare: String,
    anul_fabricatiei: String,
    motorizare: String,
    cai: String,
    kw_putere: String,
    probleme: String,
    programare: String,
    primire: String,
    procesare: String,
    durata: String,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
