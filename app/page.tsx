
import { client } from "@/sanity/lib/client";
import { Hero } from "./components/hero";
import { Iblog } from "@/sanity/schemaTypes/typeBlog";



const Home = async () => {
  const res: Iblog[] = await client.fetch(`
    *[_type == "blogPost"] | order(_updatedAt asc)`);

  return (
    <div>
      {res.map((data) => (
        <Hero heroData={data} key={data._id} />
      ))}
    </div>
  );
}

export default Home;
