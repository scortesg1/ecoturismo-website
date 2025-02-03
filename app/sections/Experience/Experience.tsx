import { albert } from "@/app/ui/fonts";
import Image from "next/image";
import React from "react";

export default function Experience() {
  return (
    <section className="w-10/12 xl:w-9/12 my-20 lg:my-24 xl:my-28">
      <h2
        className={`${albert.className} text-3xl md:text-4xl xl:text-5xl font-bold text-mainblack`}
      >
        Experimenta el turismo <br /> como nunca antes
      </h2>
      <p className="text-sm md:text-base xl:text-lg mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. onsectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. onsectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <div className="flex flex-col md:grid grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 gap-4 xl:gap-12 relative mt-10 lg:mt-20 lg:h-[550px] xl:h-[700px]">
        <div className="relative flex rounded-lg xl:rounded-2xl h-24 md:h-full overflow-hidden row-span-2 lg:row-span-full">
          <Image
            src="/experiencesWalk.jpg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-auto object-cover object-center brightness-50"
            alt="Persona caminando en un bosque"
          />
          {/* Gradiente */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          {/* Texto */}
          <h3
            className={`${albert.className} z-10 font-semibold lg:font-bold text-mainwhite self-end pb-2 ps-2 md:pb-5 md:ps-5 lg:pb-8 lg:ps-8 xl:pb-10 xl:ps-10 text-base  lg:text-xl xl:text-2xl`}
          >
            Caminatas
          </h3>
        </div>
        <div className="relative flex rounded-lg xl:rounded-2xl h-24 md:h-48 lg:h-full overflow-hidden row-span-1">
          <Image
            src="/experiencesForest.jpg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="h-auto object-cover object-center brightness-50"
            alt="Persona caminando en un bosque"
          />
          {/* Gradiente */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          {/* Texto */}
          <h3
            className={`${albert.className} z-10 font-semibold lg:font-bold text-mainwhite self-end pb-2 ps-2 md:pb-5 md:ps-5 lg:pb-8 lg:ps-8 xl:pb-10 xl:ps-10 text-base  lg:text-xl xl:text-2xl`}
          >
            Tours
          </h3>
        </div>
        <div className="relative flex rounded-lg xl:rounded-2xl h-24 md:h-48 lg:h-full overflow-hidden row-span-1">
          <Image
            src="/experiencesCalm.avif"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="h-auto object-cover object-center brightness-50"
            alt="Persona caminando en un bosque"
          />
          {/* Gradiente */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          {/* Texto */}
          <h3
            className={`${albert.className} z-10 font-semibold lg:font-bold text-mainwhite self-end pb-2 ps-2 md:pb-5 md:ps-5 lg:pb-8 lg:ps-8 xl:pb-10 xl:ps-10 text-base  lg:text-xl xl:text-2xl`}
          >
            Cabañas
          </h3>
        </div>
        <div className="relative flex rounded-lg xl:rounded-2xl h-24 md:h-48 lg:h-full overflow-hidden row-span-1 col-span-2">
          <Image
            src="/experiencesBird.avif"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="h-auto object-cover object-center brightness-50"
            alt="Persona caminando en un bosque"
          />
          {/* Gradiente */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          {/* Texto */}
          <h3
            className={`${albert.className} z-10 font-semibold lg:font-bold text-mainwhite self-end pb-2 ps-2 md:pb-5 md:ps-5 lg:pb-8 lg:ps-8 xl:pb-10 xl:ps-10 text-base  lg:text-xl xl:text-2xl`}
          >
            Avistamiento
          </h3>
        </div>
      </div>
    </section>
  );
}
