import { albert } from "@/app/ui/fonts";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_DATA } from "./data/blog.data";
import HighlightedPost from "./components/HighlightedPost/HighlightedPost";
import RegularPost from "./components/RegularPost/RegularPost";

export default function Blog() {
  const posts = BLOG_DATA;

  return (
    <main>
      <section className="relative lg:px-12 w-11/12 mx-auto 2xl:gap-x-6 mt-10 lg:mt-16 xl:mt-32 mb-44 flex flex-col gap-10">
        <h1
          className={`${albert.className} text-4xl md:text-5xl lg:text-6xl font-bold text-main`}
        >
          Blog
        </h1>
        <div className="grid grid-cols-[2fr,1fr] grid-rows-2 gap-8 mt-5 h-[650px]">
          <HighlightedPost post={posts[0]} />
          <RegularPost post={posts[1]} listed={false} />
          <RegularPost post={posts[2]} listed={false} />
        </div>
        <div className="grid grid-cols-3 gap-8 mt-10">
          <h2
            className={`${albert.className} text-3xl md:text-4xl xl:text-5xl font-bold text-main col-span-full`}
          >
            Más artículos
          </h2>
          {posts.slice(3).map((post, index) => (
            <RegularPost key={index} post={post} listed />
          ))}
        </div>
      </section>
    </main>
  );
}
