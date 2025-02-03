import { albert } from "@/app/ui/fonts";
import React from "react";
import ReviewsCarousel from "./components/ReviewsCarousel/ReviewsCarousel";
import Image from "next/image";

export default function Reviews() {
  return (
    <section className="w-full bg-main mt-10 lg:mt-28 pt-20 lg:pt-28 flex flex-col items-center justify-center relative h-full">
      <h2
        className={`${albert.className} text-3xl md:text-4xl xl:text-5xl font-bold text-mainwhite`}
      >
        Opiniones
      </h2>
      <ReviewsCarousel />
      <Image
        src="/reviewsBg.png"
        className="absolute bottom-10 w-40 lg:w-auto left-0"
        width={400}
        height={400}
        alt=""
      ></Image>
    </section>
  );
}
