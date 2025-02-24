"use client";

import { adaptCarouselData } from "@/app/sections/Tours/components/ToursCarousel/ToursCarousel.data";
import ReservationModal from "@/app/shared/Payment/ReservationModal/ReservationModal";
import { albert } from "@/app/ui/fonts";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function Book() {
  const searchParams = useSearchParams();
  const selectedTour = searchParams.get("tour");
  const [tour, setTour] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/plans/${selectedTour}?populate=*`);
        const tour = await response.json();
        const adaptedData = adaptCarouselData(tour.data);
        setTour(adaptedData);
      } catch (error) {
        console.error('Error fetching tour data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTourData();
  }, [selectedTour]);

  //Metele un loading exótico peh
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!selectedTour || !tour) {
    redirect("/planes");
  }

  return (
    <section className="flex flex-col items-center justify-center h-full">
      <h1
        className={`${albert.className} text-4xl md:text-5xl lg:text-6xl font-bold mt-20`}
      >
        Reserva
      </h1>
      <ReservationModal tour={tour} />
    </section>
  );
}