import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const {
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
  } = topic;

  return (
    <EditTopicForm
      id={id}
      nume={nume}
      numar_de_telefon={numar_de_telefon}
      email={email}
      marca={marca}
      model={model}
      sasiu={sasiu}
      numar_inmatriculare={numar_inmatriculare}
      anul_fabricatiei={anul_fabricatiei}
      motorizare={motorizare}
      cai={cai}
      kw_putere={kw_putere}
      probleme={probleme}
      programare={programare}
      primire={primire}
      procesare={procesare}
      durata={durata}
    />
  );
}
