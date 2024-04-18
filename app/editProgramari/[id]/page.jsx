import EditProgramari from "@/components/EditProgramari";

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
  const { nume, numar_de_telefon, email, programare } = topic;

  return (
    <div
      style={{
        backgroundImage: `url('/background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        overflowY: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // Alte stiluri dorite pot fi adăugate aici
      }}
    >
      <EditProgramari
        id={id}
        nume={nume}
        numar_de_telefon={numar_de_telefon}
        email={email}
        programare={programare}
      />
    </div>
  );
}
