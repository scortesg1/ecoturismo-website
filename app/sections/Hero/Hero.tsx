import MotionWrapper from "@/app/shared/MotionWrapper/MotionWrapper";
import { albert } from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="relative lg:px-12 w-11/12 h-[600px] sm:h-full lg:h-[600px] xl:h-[760px] 2xl:gap-x-6 mt-10 xl:mt-20 flex flex-col lg:flex-row justify-between items-center">
      <div className="flex flex-col gap-3 z-10 text-mainwhite px-5 py-16 md:px-10 lg:px-0 xl:px-14">
        <MotionWrapper>
          <h1
            className={`${albert.className} text-4xl md:text-5xl lg:text-6xl font-bold `}
          >
            Experiencias auténticas en <br /> el corazón del{" "}
            <b className="font-bold text-gold">Bosque de Niebla</b>
          </h1>
          <p className="text-sm md:text-base sm:w-3/4 md:w-full lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 lg:gap-4 mt-4">
            <Button variant="outline" className="w-min group">
              Conoce nuestros planes
              <Leaf className="ml-1 group-hover:fill-mainwhite group-hover:stroke-mainblack " />
            </Button>
            <Button variant="gold" className="w-min">
              Habla con nosotros
            </Button>
          </div>
        </MotionWrapper>
      </div>
      <MotionWrapper className="w-auto h-full flex self-end">
        <Image
          src="/heroPerson.png"
          width={900}
          priority
          height={900}
          alt="bg"
          className="self-end hidden sm:block sm:w-80 md:w-[22rem] lg:w-[45rem] 2xl:w-[650px] 2xl:h-auto brightness-75"
        />
      </MotionWrapper>
      <video
        className="absolute -z-10 inset-0 w-full h-full object-cover object-center rounded-lg lg:rounded-2xl brightness-[.30]"
        autoPlay
        loop
        muted
        preload="auto"
      >
        <source src="/bosque.mp4" type="video/mp4" />
      </video>
      <div className="absolute w-64 sm:w-80 md:w-[380px] 2xl:w-[600px] h-auto -right-1 -bottom-[1px] lg:right-0 lg:-bottom-[1px]">
        <Image
          src="/heroShape.svg"
          width={200}
          priority
          height={200}
          alt="bg"
          className="w-full relative"
        />
        <MotionWrapper direction="up">
          <Image
            src="/next.svg"
            width={300}
            priority
            height={300}
            alt="logo"
            className="w-28 sm:w-40 xl:w-56 absolute bottom-4 right-5 xl:bottom-8 xl:left-1/3 opacity-40"
          />
        </MotionWrapper>
      </div>
    </section>
  );
}
