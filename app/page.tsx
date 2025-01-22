import { Button } from "@/components/ui/button";
import { albert } from "./ui/fonts";
import Image from "next/image";
import { ArrowLeft, ChevronLeft, ChevronRight, Leaf } from "lucide-react";
import ToursCarousel from "./components/ToursCarousel/ToursCarousel";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <section className="relative px-12 w-11/12 h-[760px] mt-20 flex justify-between items-center">
        <div className="flex flex-col gap-3 z-10 text-mainwhite px-14">
          <h1 className={`${albert.className} text-6xl font-bold `}>
            Explora la magia del <br /> ecoturismo en Cali
          </h1>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-4 mt-4">
            <Button variant="outline" className="w-min group">
              Conoce nuestros planes
              <Leaf className="ml-1 group-hover:fill-mainblack" />
            </Button>
            <Button variant="gold" className="w-min">
              Habla con nosotros
            </Button>
          </div>
        </div>
        <Image
          src="/heroPerson.png"
          width={900}
          height={900}
          alt="bg"
          className="self-end h-full w-auto brightness-75"
        />
        <Image
          src="/heroBg.png"
          alt="bg"
          className="-z-10 object-cover rounded-2xl"
          fill
        />
        <Image
          src="/heroShape.svg"
          width={200}
          height={200}
          alt="bg"
          className="absolute w-[600px] h-auto right-0 -bottom-[1px]"
        />
      </section>
      <section className="w-9/12 my-28">
        <h2 className={`${albert.className} text-5xl font-bold text-mainblack`}>
          Experimenta el turismo <br /> como nunca antes
        </h2>
        <p className="text-lg mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. onsectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. onsectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <div className="grid grid-cols-3 grid-rows-2 gap-12 relative mt-20 h-[700px]">
          <div className="relative flex rounded-2xl h-full overflow-hidden row-span-full">
            <Image
              src="/experiencesWalk.jpg"
              fill
              className="h-auto object-cover object-center brightness-50"
              alt="Persona caminando en un bosque"
            />
            {/* Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            {/* Texto */}
            <h3
              className={`${albert.className} z-10 font-bold text-mainwhite self-end pb-10 ps-10 text-2xl`}
            >
              Caminatas
            </h3>
          </div>
          <div className="relative flex rounded-2xl h-full overflow-hidden row-span-1">
            <Image
              src="/experiencesForest.jpg"
              fill
              className="h-auto object-cover object-center brightness-50"
              alt="Persona caminando en un bosque"
            />
            {/* Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            {/* Texto */}
            <h3
              className={`${albert.className} z-10 font-bold text-mainwhite self-end pb-10 ps-10 text-2xl`}
            >
              Tours
            </h3>
          </div>
          <div className="relative flex rounded-2xl h-full overflow-hidden row-span-1">
            <Image
              src="/experiencesCalm.avif"
              fill
              className="h-auto object-cover object-center brightness-50"
              alt="Persona caminando en un bosque"
            />
            {/* Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            {/* Texto */}
            <h3
              className={`${albert.className} z-10 font-bold text-mainwhite self-end pb-10 ps-10 text-2xl`}
            >
              Cabañas
            </h3>
          </div>
          <div className="relative flex rounded-2xl h-full overflow-hidden row-span-1 col-span-2">
            <Image
              src="/experiencesBird.avif"
              fill
              className="h-auto object-cover object-center brightness-50"
              alt="Persona caminando en un bosque"
            />
            {/* Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            {/* Texto */}
            <h3
              className={`${albert.className} z-10 font-bold text-mainwhite self-end pb-10 ps-10 text-2xl`}
            >
              Avistamiento
            </h3>
          </div>
        </div>
      </section>
      <section className="w-full mt-28 flex flex-col items-center justify-center relative h-[850px]">
        <Image
          src="/toursBg.png"
          alt="bg"
          className="-z-10 object-cover brightness-[.25]"
          fill
        />
        <ToursCarousel />
      </section>
    </main>
  );
}
