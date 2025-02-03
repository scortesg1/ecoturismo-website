import Image from "next/image";
import React from "react";
import ToursCarousel from "./components/ToursCarousel/ToursCarousel";

export default function Tours() {
  return (
    <section className="w-full mt-5 lg:mt-28 flex flex-col items-center justify-center relative lg:h-[850px]">
      <Image
        src="/toursBg.png"
        alt="bg"
        className="-z-10 object-cover brightness-[.25]"
        fill
        unoptimized
      />
      <ToursCarousel />
    </section>
  );
}
