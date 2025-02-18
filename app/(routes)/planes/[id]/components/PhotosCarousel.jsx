"use client";

import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide"; //eslint-disable-line
import Image from "next/image";

export default function PhotosCarousel({ plan }) {
  return (
    <div className="pb-20 w-full mx-auto z-10 text-mainwhite rounded-xl">
      <Splide
        aria-label="My Favorite Images"
        className="z-10"
        key="reviews"
        options={{
          type: "loop",
          autoplay: true,
          interval: 4000,
          speed: 800,
          perPage: 1,
          gap: "4rem",
          arrows: true,
          pagination: true,
        }} // Opciones del carousel
      >
        {plan.photos.map((item, index) => (
          <SplideSlide key={index}>
            <Image
              src={item}
              alt={plan.title}
              width={1200}
              height={1200}
              unoptimized={true}
              className="w-full object-top md:object-center object-cover h-48 md:h-72 lg:h-96 xl:h-[600px] rounded-xl"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
