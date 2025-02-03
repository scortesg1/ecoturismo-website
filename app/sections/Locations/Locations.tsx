import { LOCATIONS_DATA } from "@/app/data/siteData";
import MotionWrapper from "@/app/shared/MotionWrapper/MotionWrapper";
import { albert } from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LocationMap from "./components/Map/Map";

export default function Locations() {
  return (
    <section className="bg-mainwhite w-10/12 xl:w-9/12 my-14 lg:my-20 xl:my-28 flex flex-col items-center justify-center relative h-full">
      <h2
        className={`${albert.className} text-3xl md:text-4xl xl:text-5xl font-bold text-mainblack`}
      >
        Nuestras ubicaciones
      </h2>
      <p className="text-sm text-center md:text-base xl:text-lg mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <div className="grid lg:grid-cols-2 mt-14 lg:mt-20 2xl:mt-28 lg:gap-6 w-full">
        <LocationMap />
        <div className="flex flex-col gap-2 mt-5 lg:mt-0 lg:gap-4 2xl:px-10">
          <MotionWrapper direction="up" cascade>
            {LOCATIONS_DATA.map((location) => (
              <div
                className="flex flex-col p-3 md:p-4 xl:p-6 relative z-10 text-mainwhite group overflow-hidden rounded-xl w-full"
                key={location.id}
              >
                <span
                  className={`${albert.className} text-right font-bold text-lg lg:text-2xl xl:text-4xl`}
                >
                  {location.id}
                </span>
                <h3
                  className={`${albert.className} font-bold text-base lg:text-xl xl:text-2xl mt-4`}
                >
                  {location.name}
                </h3>
                <p className="text-sm md:text-base pt-1">
                  {location.description}
                </p>
                <Image
                  src={location.image}
                  alt={location.name}
                  className="-z-10 object-cover brightness-[.25] group-hover:brightness-[.35] group-hover:scale-105 transition-all duration-300 rounded-xl"
                  fill
                />
              </div>
            ))}
            <Button asChild className="group mt-4 w-full">
              <Link href="/">
                Ver todas
                <Leaf className="ml-1 group-hover:fill-white group-hover:stroke-mainblack transition-colors duration-300" />
              </Link>
            </Button>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
