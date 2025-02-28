import Image from "next/image";
import { BLOG_DATA } from "../data/blog.data";
import { albert } from "@/app/ui/fonts";
import PostContent from "./components/PostContent/PostContent";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Leaf } from "lucide-react";
import Shape1 from "./components/Shapes/Shape1";
import Shape2 from "./components/Shapes/Shape2";

export async function generateStaticParams() {
  const postsData = await BLOG_DATA;

  return postsData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_DATA.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="relative overflow-x-hidden">
      <article className="w-11/12 2xl:w-8/12 mx-auto mt-20 xl:mt-36 flex flex-col gap-12 lg:gap-20">
        <div className="flex flex-col lg:grid grid-cols-2 gap-10 items-center">
          <Image
            src={post?.image}
            alt={post.title}
            width={700}
            height={700}
            className="rounded-xl h-40 md:h-72 lg:h-[400px] object-cover object-center"
          />
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <span className="text-gold">{post.date}</span>
            <h1
              className={`${albert.className} text-4xl md:text-5xl lg:text-6xl font-bold text-main`}
            >
              {post.title}
            </h1>
            <p className="text-base lg:text-lg">{post.description}</p>
          </div>
        </div>
        <PostContent content={post.content}></PostContent>
        <section className="flex flex-col gap-3 text-center w-11/12 md:w-3/4 2xl:w-1/2 mx-auto my-16 mt-10 2xl:my-24">
          <h2
            className={`${albert.className} text-3xl md:text-4xl xl:text-5xl font-bold text-main`}
          >
            Conoce el Ecoturismo a 15 minutos de Cali
          </h2>
          <p className="text-base lg:text-lg">
            ¿Listo para vivir una experiencia inolvidable mientras cuidas el
            planeta? Descubre nuestros planes de ecoturismo en Cali y conecta
            con la naturaleza de manera responsable. ¡Reserva tu aventura
            sostenible hoy mismo!
          </p>
          <Button
            variant="default"
            asChild
            className="w-1/2 xl:w-1/3 mx-auto group mt-5"
          >
            <Link href={`/planes`}>
              Ver planes
              <Leaf className="ml-1 group-hover:fill-mainwhite group-hover:stroke-mainblack" />
            </Link>
          </Button>
        </section>
      </article>
      <Shape1 />
      <Shape2 />
    </main>
  );
}
