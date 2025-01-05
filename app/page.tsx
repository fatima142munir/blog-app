import { client } from "@/sanity/lib/client";
import Link from "next/link";
interface Iblog {
  name: string,
  catName: string,
  content: string,
  _id: string,
  summrey: string
}


const Home = async () => {
  let res: Iblog[] = await client.fetch(`*[_type == 'blogPost'] | order(_updatedAt asc)`);
  return (
    <>
      <section className="text-pink body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap m-4">
            {
              res.map((item, index) => {
                return (
                  <div key={index} className="md:w-1/3 mx-auto h-full border-2 border-pink bg-yellow bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h2 className="tracking-widest text-xs title-font font-medium text-orange mb-1">{item.catName}</h2>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-purple mb-3">{item.name}</h1>
                    <p className="leading-relaxed text-pink mb-3">{item.summrey}</p>
                    <Link href={`/post/${item._id}`} className="text-purple items-center">Read More...</Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
