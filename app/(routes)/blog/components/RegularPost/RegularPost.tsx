import React from "react";
import { albert } from "@/app/ui/fonts";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "../../types/post.type";

export default function RegularPost({
  post,
  listed,
}: {
  post: Post;
  listed: boolean;
}) {
  return (
    <div className={`${listed ? "h-72" : null} flex flex-col justify-between gap-0 relative p-8 rounded-xl group overflow-hidden`}>
      <Link
        href={`/blog/${post.slug}`}
        className="self-end z-10 w-14 h-14 rounded-full bg-mainwhite flex items-center justify-center"
      >
        <ArrowUpRight className="text-mainblack" />
      </Link>
      <div className="flex flex-col gap-2 text-mainwhite">
        <span className="text-gold">{post.date}</span>
        <h2
          className={`${albert.className} text-xl md:text-2xl xl:text-2xl font-bold text-mainwhite xl:w-3/4`}
        >
          {post.title}
        </h2>
        <p className="truncate">{post.description}</p>
      </div>
      <Image
        src={post.image}
        fill
        unoptimized
        alt={post.title}
        className="object-cover object-center -z-10 brightness-[.20] rounded-xl group-hover:brightness-[.25] group-hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}
