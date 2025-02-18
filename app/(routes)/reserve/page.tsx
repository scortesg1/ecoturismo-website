"use client";

import { CAROUSEL_DATA } from "@/app/sections/Tours/components/ToursCarousel/ToursCarousel.data";
import ReservationModal from "@/app/shared/Payment/ReservationModal/ReservationModal";
import { albert } from "@/app/ui/fonts";
import { redirect, useSearchParams } from "next/navigation";

export default function Book() {
  const searchParams = useSearchParams();
  const selectedTour = searchParams.get("tour");

  if (
    !selectedTour ||
    !CAROUSEL_DATA.find((tour) => tour.id === Number(selectedTour))
  ) {
    redirect("/planes");
  }

  return (
    <section className="flex flex-col items-center justify-center h-full">
      <h1
        className={`${albert.className} text-4xl md:text-5xl lg:text-6xl font-bold mt-20`}
      >
        Reserva
      </h1>
      <ReservationModal tour={CAROUSEL_DATA[Number(selectedTour)]} />
    </section>
  );
}
