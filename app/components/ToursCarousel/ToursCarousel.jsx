"use client";

import React, { useRef } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide"; //eslint-disable-line
import Image from "next/image";
import { ChevronLeft, ChevronRight, Leaf, MapPin } from "lucide-react";
import { albert } from "@/app/ui/fonts";
import { CAROUSEL_DATA } from "./ToursCarousel.data";
import { Button } from "@/components/ui/button";
import ReservationModal from "../ReservationModal/ReservationModal";
import MotionWrapper from "@/app/shared/MotionWrapper/MotionWrapper";

export default function ToursCarousel() {
  const toursCarouselRef = useRef(null);

  return (
    <div className="py-20 w-10/12 lg:w-9/12 mx-auto z-10">
      <MotionWrapper direction="up" cascade damping={0.1}>
        <div className="flex justify-between gap-x-2 text-mainwhite">
          <h2 className={`${albert.className} text-3xl lg:text-5xl font-bold`}>
            Planes populares
          </h2>
          <div className="flex gap-3">
            <ChevronLeft
              onClick={() => toursCarouselRef.current?.go("<")}
              className="stroke-mainwhite p-2 bg-[#334136] hover:bg-main w-10 h-10 lg:w-auto lg:h-auto rounded-full cursor-pointer transition-colors duration-300"
            />
            <ChevronRight
              onClick={() => toursCarouselRef.current?.go(">")}
              className="stroke-mainwhite p-2 bg-[#334136] hover:bg-main w-10 h-10 lg:w-auto lg:h-auto rounded-full cursor-pointer transition-colors duration-300"
            />
          </div>
        </div>
        <p className="text-sm md:text-base lg:text-lg mt-6 text-mainwhite">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </MotionWrapper>
      <Splide
        aria-label="Tours"
        className="mt-14 lg:mt-20"
        key="tours"
        options={{
          type: "loop",
          autoplay: true,
          interval: 4000,
          speed: 800,
          perPage: 3,
          gap: "4rem",
          arrows: false,
          pagination: false,
          breakpoints: { 1024: { perPage: 2 }, 640: { perPage: 1 } },
        }} // Opciones del carousel
        ref={toursCarouselRef} // Vincula la referencia del carousel
      >
        {CAROUSEL_DATA.map((item) => (
          <SplideSlide key={item.title}>
            <div>
              <Image
                src={item.image}
                width={400}
                height={400}
                className="w-full rounded-lg lg:rounded-xl h-28 lg:h-48 object-cover object-center"
                alt={item.title}
              />
              <div className="flex justify-between items-center mt-6 text-mainwhite">
                <h3
                  className={`${albert.className} text-lg text-gold lg:text-2xl font-bold`}
                >
                  {item.title}
                </h3>
                <div className="flex items-center gap-1 text-base text-gray-300">
                  <MapPin className="w-4 h-4 lg:w-auto lg:h-auto" />
                  {item.location}
                </div>
              </div>
              <p className="text-sm md:text-base lg:text-lg mt-1 lg:mt-3 text-mainwhite">
                {item.description}
              </p>
              <span className="mt-2 lg:mt-5 block text-sm md:text-base text-gray-300">
                Desde{" "}
                <span className="font-medium text-xl lg:text-3xl ps-2">
                  ${new Intl.NumberFormat("es-ES").format(item.price)}COP
                </span>
              </span>
              <div className="flex gap-2 mt-5 text-mainwhite">
                <ReservationModal tour={item} />
                <Button variant="gold" className="w-min">
                  Ver más
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
