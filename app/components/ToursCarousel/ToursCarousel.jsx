"use client";

import React, { useRef } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide"; //eslint-disable-line
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { albert } from "@/app/ui/fonts";
import { CAROUSEL_DATA } from "./ToursCarousel.data";

export default function ToursCarousel() {
  const carouselRef = useRef(null);

  return (
    <div className="py-20 w-9/12 mx-auto z-10">
      <div className="flex justify-between text-mainwhite">
        <h2 className={`${albert.className} text-5xl font-bold`}>
          Planes populares
        </h2>
        <div className="flex gap-3">
          <ChevronLeft
            onClick={() => carouselRef.current?.go("<")}
            className="stroke-mainwhite p-2 bg-main hover:bg-[#334136] rounded-full cursor-pointer transition-colors duration-300"
            size={50}
          />
          <ChevronRight
            onClick={() => carouselRef.current?.go(">")}
            className="stroke-mainwhite p-2 bg-main hover:bg-[#334136] rounded-full cursor-pointer transition-colors duration-300"
            size={50}
          />
        </div>
      </div>
      <p className="text-base lg:text-lg mt-6 text-mainwhite">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <Splide
        aria-label="My Favorite Images"
        className="mt-20"
        options={{
          type: "loop",
          perPage: 3,
          gap: "4rem",
          arrows: false,
          pagination: false,
          breakpoints: { 1024: { perPage: 2 }, 640: { perPage: 1 } },
        }} // Opciones del carousel
        ref={carouselRef} // Vincula la referencia del carousel
      >
        {CAROUSEL_DATA.map((item) => (
          <SplideSlide key={item.id}>
            <Image
              src={item.image}
              width={400}
              height={400}
              className="w-full rounded-xl h-48 object-cover object-center"
              alt={item.title}
            />
            <div className="flex justify-between items-center mt-6 text-mainwhite">
              <h3 className={`${albert.className} text-2xl font-bold`}>
                {item.title}
              </h3>
              <div className="flex items-center gap-1 text-gray-300">
                <MapPin />
                {item.location}
              </div>
            </div>
            <p className="text-base lg:text-lg mt-3 text-mainwhite">
              {item.description}
            </p>
            <span className="mt-5 block text-gray-300">
              Desde{" "}
              <span className="font-medium text-3xl ps-2">
                ${item.price.toLocaleString()}COP
              </span>
            </span>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
