import { CAROUSEL_DATA } from "@/app/sections/Tours/components/ToursCarousel/ToursCarousel.data";
import { notFound } from "next/navigation";
import VideoPlayer from "./components/VideoPlayer";
import { albert } from "@/app/ui/fonts";
import LocationMap from "@/app/sections/Locations/components/Map/Map";
import PhotosCarousel from "./components/PhotosCarousel";
import { Leaf } from "lucide-react";
import Feature from "./components/Feature";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function fetchPlans() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(CAROUSEL_DATA);
    }, 1000);
  });
}

export default async function PlanDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const plans: any = await fetchPlans();
  const { id } = await params;

  const plan: any = plans.find((plan: any) => plan.id === Number(id)) || null;

  if (!plan) {
    return notFound();
  }

  return (
    <section className="xl:w-10/12 mx-auto p-6 flex flex-col gap-y-10 xl:gap-y-20 mt-20">
      <div className={`${albert.className} flex flex-col items-center gap-y-1`}>
        <span className="font-bold lg:text-2xl">Conoce</span>
        <h1
          className={` text-4xl md:text-5xl lg:text-6xl font-bold text-main `}
        >
          {plan.title}
        </h1>
      </div>
      <div className="lg:mt-4 w-full">
        <VideoPlayer />
      </div>
      <div className="flex flex-col-reverse gap-y-10 lg:grid grid-cols-2 gap-x-10 items-center">
        <LocationMap locationsData={plan} />
        <div className="flex flex-col gap-y-4">
          <h2
            className={`${albert.className} text-3xl md:text-4xl xl:text-5xl font-bold text-gold`}
          >
            {plan.heading}
          </h2>
          <p className="text-sm md:text-base xl:text-lg">
            {plan.description}
            Rrem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            Rrem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br /> Rrem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div>
        <PhotosCarousel plan={plan} />
      </div>
      <ul className="flex flex-wrap gap-8 lg:w-3/4 mx-auto lg:gap-x-20 justify-center">
        {plan.includes.map((include: any) => (
          <Feature
            key={include.id}
            id={include.id}
            name={include.name}
          ></Feature>
        ))}
      </ul>
      <div className="flex flex-col gap-4 text-center w-11/12 md:w-3/4 xl:w-1/2 mx-auto mb-24 mt-10 md:mt-20">
        <h2
          className={`${albert.className} text-3xl md:text-4xl xl:text-5xl font-bold text-main`}
        >
          Reserva <span className="text-gold">{plan.title}</span> hoy mismo
        </h2>
        <p className="text-sm md:text-base xl:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button
          variant="default"
          asChild
          className="w-1/2 xl:w-1/3 mx-auto group mt-5"
        >
          <Link href={`/reserve?tour=${plan.id}`}>
            Reserva {plan.title}
            <Leaf className="ml-1 group-hover:fill-mainwhite group-hover:stroke-mainblack" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
