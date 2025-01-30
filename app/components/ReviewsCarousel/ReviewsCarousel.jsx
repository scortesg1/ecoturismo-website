"use client";

import React, { useRef } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide"; //eslint-disable-line
import Image from "next/image";
import { ChevronLeft, ChevronRight, Leaf, MapPin } from "lucide-react";
import { albert } from "@/app/ui/fonts";
import { REVIEWS } from "./ReviewsCarousel.data";
import MotionWrapper from "@/app/shared/MotionWrapper/MotionWrapper";

export default function ReviewsCarousel() {
  const reviewsCarouselRef = useRef(null);

  return (
    <div className="pb-20 w-9/12 mx-auto z-10 text-mainwhite">
      <Splide
        aria-label="My Favorite Images"
        className="mt-10 lg:mt-20 z-10"
        key="reviews"
        options={{
          type: "loop",
          autoplay: true,
          interval: 4000,
          speed: 800,
          perPage: 1,
          gap: "4rem",
          arrows: false,
          pagination: false,
        }} // Opciones del carousel
        ref={reviewsCarouselRef} // Vincula la referencia del carousel
      >
        {REVIEWS.map((item) => (
          <SplideSlide key={item.name}>
            <div className="flex flex-col-reverse gap-1 lg:gap-3 lg:flex-row items-center justify-between lg:ps-10 bg-white text-mainblack rounded-xl overflow-hidden lg:h-[500px]">
              <div className="w-full lg:w-1/2 p-6">
                <MotionWrapper direction="right" cascade damping={0.1}>
                  <h3 className={`${albert.className} text-2xl lg:text-4xl font-bold `}>
                    {item.name} <br className="hidden lg:block" /> {item.lastname}
                  </h3>
                  <span className="flex items-center gap-1 mt-1 lg:mt-2 text-base lg:text-lg text-gray-400">
                    <MapPin className="w-4 h-4 lg:w-auto lg:h-auto" />
                    {item.experience}
                  </span>
                  <p className="text-sm md:text-base lg:text-lg mt-2 lg:mt-4">{item.review}</p>
                </MotionWrapper>
              </div>
              <Image
                src={item.image}
                alt={item.name}
                width={800}
                height={800}
                className="w-full lg:w-1/3 object-top lg:object-center object-cover h-48 lg:h-full"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <div className="flex gap-3 items-center justify-center mt-10 lg:mt-20">
        <MotionWrapper direction="down" cascade damping={0.1}>
          <ChevronLeft
            onClick={() => reviewsCarouselRef.current?.go("<")}
            className="stroke-mainblack p-2 bg-mainwhite hover:bg-zinc-300 rounded-full cursor-pointer transition-colors duration-300 w-10 h-10 lg:w-auto lg:h-auto"
            size={50}
          />
          <ChevronRight
            onClick={() => reviewsCarouselRef.current?.go(">")}
            className="stroke-mainblack p-2 bg-mainwhite hover:bg-zinc-300 rounded-full cursor-pointer transition-colors duration-300 w-10 h-10 lg:w-auto lg:h-auto"
            size={50}
          />
        </MotionWrapper>
      </div>
    </div>
  );
}
