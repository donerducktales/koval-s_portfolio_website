import WorksWrapper from "@/components/WorksList";
import { client } from "@/lib/db";
import { Translations } from "@/types/types";
import { ObjectId, WithId } from "mongodb";

export interface Works {
  _id: ObjectId;
  name: string;
  imgHref: string;
  description: Translations;
  projectLink: string;
}

export default async function Works() {
  async function getData() {
    try {
      const mongoClient = await client.connect();
      const db = mongoClient.db("portfolio");
      const coll = db.collection("works");
      const data = await coll.find().toArray();

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  const data = await getData() as WithId<Works>[];
  const parsedData: WithId<Works>[] = JSON.parse(JSON.stringify(data));

  return (
    <section className={`works w-full mt-8 py-12 flex flex-col items-center`} id={`works`}>
      <WorksWrapper parsedData={parsedData} />
    </section>
  );
}
