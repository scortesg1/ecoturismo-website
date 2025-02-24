import MotionWrapper from "@/app/shared/MotionWrapper/MotionWrapper";
import { albert } from "@/app/ui/fonts";
import Image from "next/image";
import FeatureList from "./components/FeatureList";
import ActionsList from "./components/ActionsList";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Nosotros() {
  return (
    <main>
      <section className="relative lg:px-12 w-11/12 2xl:gap-x-6 mt-10 lg:mt-16 xl:mt-20 flex flex-col lg:flex-row justify-center mx-auto items-center">
        <div className="flex flex-col items-center text-center gap-3 z-10 text-main px-5 py-16 md:px-10 lg:px-0 xl:px-14">
          <MotionWrapper direction="up">
            <h1
              className={`${albert.className} text-4xl md:text-5xl lg:text-6xl font-bold text-main`}
            >
              Conoce más sobre nosotros
            </h1>
            <p className="text-sm md:text-base sm:w-3/4 sm:mx-auto md:w-full lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Image
              src="/logo.png"
              width={350}
              height={350}
              unoptimized
              alt="logo"
            />
          </MotionWrapper>
        </div>
      </section>
      <section className="w-full mt-16 lg:mt-20 mb-20 lg:mb-32 bg-main">
        <div className="flex flex-col-reverse lg:grid grid-cols-[3fr,2fr] items-center gap-10 w-10/12 mx-auto py-20 lg:py-36">
          <div className="flex flex-col gap-5">
            <h2
              className={`${albert.className} text-3xl md:text-4xl xl:text-5xl font-bold text-mainwhite`}
            >
              Todo empezó con...
            </h2>
            <p className="text-base lg:text-lg text-mainwhite">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. aorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <Image
            src="/nosotros.png"
            width={500}
            height={500}
            unoptimized
            alt="logo"
            className="w-full md:w-3/4 lg:w-full rounded-lg lg:rounded-xl"
          />
        </div>
      </section>
      <section className="w-10/12 mx-auto flex flex-col md:flex-row gap-10 lg:gap-0 my-32 xl:my-48 justify-center items-center">
        <div className="flex flex-col gap-5 text-center">
          <h2
            className={`${albert.className} text-3xl md:text-4xl xl:text-5xl font-bold text-main`}
          >
            Misión
          </h2>
          <p className="text-base lg:text-lg  w-full lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. aorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-col gap-5 text-center">
          <h2
            className={`${albert.className} text-3xl md:text-4xl xl:text-5xl font-bold text-main`}
          >
            Visión
          </h2>
          <p className="text-base lg:text-lg  w-full lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. aorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
      <section className="w-10/12 mx-auto mb-20 lg:mb-32 text-center flex flex-col gap-5 lg:gap-7 items-center">
        <h2
          className={`${albert.className} text-3xl md:text-4xl xl:text-5xl font-bold text-main`}
        >
          Una visión nueva hacia el turismo
        </h2>
        <p className="text-base lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <FeatureList />
      </section>
      <section className="w-full relative py-20 lg:py-32">
        <div className="w-10/12 mx-auto z-10">
          <h2
            className={`${albert.className} text-3xl md:text-4xl xl:text-5xl font-bold text-mainwhite`}
          >
            Nuestro Compromiso con la Sostenibilidad
          </h2>
          <ActionsList />
        </div>
        <Image
          src="/nosotrosBg.png"
          fill
          unoptimized
          alt="Bg"
          className="object-cover object-center -z-10 brightness-[.25]"
        />
      </section>
      <section className="flex flex-col gap-3 text-center w-11/12 md:w-3/4 xl:w-1/2 mx-auto my-24 md:my-48">
        <h2
          className={`${albert.className} text-3xl md:text-4xl xl:text-5xl font-bold text-main`}
        >
          Conoce más de nosotros en nuestro blog
        </h2>
        <p className="text-base lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button
          variant="default"
          asChild
          className="w-1/2 xl:w-1/3 mx-auto group mt-5"
        >
          <Link href={`/blog`}>
            Ir al blog
            <Leaf className="ml-1 group-hover:fill-mainwhite group-hover:stroke-mainblack" />
          </Link>
        </Button>
      </section>
    </main>
  );
}
