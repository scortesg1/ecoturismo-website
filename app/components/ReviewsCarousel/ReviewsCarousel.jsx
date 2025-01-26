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
        className="mt-20 z-10"
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
            <div className="flex items-center justify-between ps-10 bg-white text-mainblack rounded-xl overflow-hidden h-[500px]">
              <div className="w-1/2">
                <MotionWrapper direction="right" cascade damping={0.1}>
                  <h3 className={`${albert.className} text-4xl font-bold `}>
                    {item.name} <br /> {item.lastname}
                  </h3>
                  <span className="flex items-center gap-1 mt-2 text-lg text-gray-400">
                    <MapPin size={16} />
                    {item.experience}
                  </span>
                  <p className="text-lg mt-4">{item.review}</p>
                </MotionWrapper>
              </div>
              <Image
                src={item.image}
                alt={item.name}
                width={800}
                height={800}
                className="w-1/3 object-center object-cover h-full"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <div className="flex gap-3 items-center justify-center mt-20">
        <MotionWrapper direction="down" cascade damping={0.1}>
          <ChevronLeft
            onClick={() => reviewsCarouselRef.current?.go("<")}
            className="stroke-mainblack p-2 bg-mainwhite hover:bg-mainblack rounded-full cursor-pointer transition-colors duration-300"
            size={50}
          />
          <ChevronRight
            onClick={() => reviewsCarouselRef.current?.go(">")}
            className="stroke-mainblack p-2 bg-mainwhite hover:bg-mainblack rounded-full cursor-pointer transition-colors duration-300"
            size={50}
          />
        </MotionWrapper>
      </div>
    </div>
  );
}
