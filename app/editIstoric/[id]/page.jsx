import EditIstoric from "@/components/EditIstoric";
import Head from "next/head";

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
  const { primire, procesare, durata } = topic;

  return (
    <>
      <Head>
        <title>Editare Istoric</title>
      </Head>
      <div
        style={{
          backgroundImage: `url('/background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <EditIstoric
          id={id}
          primire={primire}
          procesare={procesare}
          durata={durata}
        />
      </div>
    </>
  );
}
