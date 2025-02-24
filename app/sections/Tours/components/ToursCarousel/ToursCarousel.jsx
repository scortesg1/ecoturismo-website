"use client";

import React, { useRef } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide"; //eslint-disable-line
import Image from "next/image";
import { ChevronLeft, ChevronRight, Leaf, MapPin } from "lucide-react";
import { albert } from "@/app/ui/fonts";
import { adaptCarouselData } from "./ToursCarousel.data";
import { Button } from "@/components/ui/button";
import MotionWrapper from "@/app/shared/MotionWrapper/MotionWrapper";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ToursCarousel() {
  const toursCarouselRef = useRef(null);
  const [CAROUSEL_DATA, setCAROUSEL_DATA] = useState([]);

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/plans?populate=*');
        const plans = await response.json();
        const adaptedData = adaptCarouselData(plans.data);
        setCAROUSEL_DATA(adaptedData);
      } catch (error) {
        console.error('Error fetching carousel data:', error);
      }
    };

    fetchCarouselData();
  }, []);

  return (
    <div className="py-20 w-10/12 xl:w-9/12 mx-auto z-10">
      <MotionWrapper direction="up" cascade damping={0.1}>
        <div className="flex justify-between gap-x-2 text-mainwhite">
          <h2
            className={`${albert.className} text-3xl md:text-4xl xl:text-5xl font-bold`}
          >
            Planes populares
          </h2>
          <div className="flex gap-3">
            <ChevronLeft
              onClick={() => toursCarouselRef.current?.go("<")}
              className="stroke-mainwhite p-2 bg-[#334136] hover:bg-main w-10 h-10 lg:w-12 lg:h-12 rounded-full cursor-pointer transition-colors duration-300"
            />
            <ChevronRight
              onClick={() => toursCarouselRef.current?.go(">")}
              className="stroke-mainwhite p-2 bg-[#334136] hover:bg-main w-10 h-10 lg:w-12 lg:h-12 rounded-full cursor-pointer transition-colors duration-300"
            />
          </div>
        </div>
        <p className="text-sm md:text-base xl:text-lg mt-6 xl:mt-8 text-mainwhite">
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
          breakpoints: {
            1300: { perPage: 2 },
            1024: { perPage: 2 },
            640: { perPage: 1 },
          },
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
                  className={`${albert.className} text-lg md:text-xl text-gold lg:text-2xl font-bold`}
                >
                  {item.title}
                </h3>
                <div className="flex items-center gap-1 text-base text-gray-300">
                  <MapPin className="w-4 h-4 lg:w-auto lg:h-auto" />
                  {item.location}
                </div>
              </div>
              <p className="text-sm md:text-sm lg:text-lg mt-1 md:mt-3 text-mainwhite">
                {item.description}
              </p>
              <span className="mt-2 md:mt-5 block text-sm md:text-base text-gray-300">
                Desde{" "}
                <span className="font-medium text-xl lg:text-3xl ps-2">
                  ${new Intl.NumberFormat("es-ES").format(item.price)}COP
                </span>
              </span>
              <div className="flex gap-2 md:gap-3 mt-5 text-mainwhite">
                <Button variant="outline" asChild className="w-full group">
                  <Link href={`/reserve?tour=${item.id}`}>
                    Reservar
                    <Leaf className="ml-1 group-hover:fill-mainwhite group-hover:stroke-mainblack" />
                  </Link>
                </Button>
                <Button variant="gold" asChild className="w-min">
                  <Link href="/a">
                    Ver más
                    <ChevronRight />
                  </Link>
                </Button>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
