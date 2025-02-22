"use client";

import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide"; //eslint-disable-line
import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export default function PhotosCarousel({ plan }) {
  // State para la imagen seleccionada, puede ser null o la url de la imagen
  const [selectedImage, setSelectedImage] = useState(null);

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
            <Dialog>
              <DialogTrigger asChild>
                <Image
                  src={item}
                  alt={plan.title}
                  width={1200}
                  height={1200}
                  unoptimized={true}
                  className="w-full object-top md:object-center object-cover h-96 md:h-72 lg:h-96 xl:h-[600px] rounded-xl cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                />
              </DialogTrigger>
              <DialogContent className="max-w-6xl p-2 rounded-md">
                <DialogHeader>
                  <VisuallyHidden.Root asChild>
                    <DialogTitle className="text-3xl text-white font-bold">
                      {plan.title}
                    </DialogTitle>
                  </VisuallyHidden.Root>

                  <VisuallyHidden.Root asChild>
                    <DialogDescription>
                      Visualiza los datos en detalle de la operación
                    </DialogDescription>
                  </VisuallyHidden.Root>
                </DialogHeader>
                {selectedImage && (
                  <Image
                    src={selectedImage}
                    alt="Expanded Image"
                    width={1200}
                    height={1200}
                    unoptimized={true}
                    className="w-full h-auto pt-5"
                  />
                )}
              </DialogContent>
            </Dialog>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
