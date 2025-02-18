import { CAROUSEL_DATA } from "@/app/sections/Tours/components/ToursCarousel/ToursCarousel.data";
import MotionWrapper from "@/app/shared/MotionWrapper/MotionWrapper";
import { albert } from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";
import { ChevronRight, Leaf, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Simulación de fetch desde una API
const fetchPlans = async () => {
  return CAROUSEL_DATA;
};

export default async function Planes() {
  const plans = await fetchPlans();

  return (
    <>
      <section className="relative lg:px-12 w-11/12 h-[300px] sm:h-full lg:h-[350px]  2xl:gap-x-6 mt-10 lg:mt-16 xl:mt-20 flex flex-col lg:flex-row justify-center mx-auto items-center">
        <div className="flex flex-col items-center text-center gap-3 z-10 text-mainwhite px-5 py-16 md:px-10 lg:px-0 xl:px-14">
          <MotionWrapper>
            <h1
              className={`${albert.className} text-4xl md:text-5xl lg:text-6xl font-bold `}
            >
              Conoce nuestros planes
            </h1>
            <p className="text-sm md:text-base sm:w-3/4 sm:mx-auto md:w-full lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </MotionWrapper>
        </div>
        <video
          className="absolute -z-10 inset-0 w-full h-full object-cover object-center rounded-lg lg:rounded-2xl brightness-[.30]"
          autoPlay
          loop
          muted
          preload="auto"
        >
          <source src="/bosque.mp4" type="video/mp4" />
        </video>
      </section>
      <section className="w-11/12 mx-auto mt-16 lg:mt-20 mb-20 lg:mb-32">
        <div className="flex flex-col items-center md:items-start gap-10 xl:gap-16">
          <h2
            className={`${albert.className} text-3xl md:text-4xl xl:text-5xl font-bold text-main`}
          >
            Experiencias
          </h2>
          <div className="flex flex-col sm:grid grid-cols-2 gap-10 lg:grid-cols-3 2xl:grid-cols-4 lg:justify-center lg:items-center lg:gap-10 xl:gap-14">
            <MotionWrapper direction="up" cascade>
              {plans.map((item) => (
                <div key={item.id}>
                  <Image
                    src={item.image}
                    width={400}
                    height={400}
                    className="w-full rounded-lg lg:rounded-xl h-28 lg:h-48 object-cover object-center"
                    alt={item.title}
                  />
                  <div className="flex justify-between items-center mt-6 text-mainwhite">
                    <h3
                      className={`${albert.className} text-lg md:text-xl text-main lg:text-2xl font-bold`}
                    >
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 text-base text-gray-500">
                      <MapPin className="w-4 h-4 lg:w-auto lg:h-auto" />
                      {item.location}
                    </div>
                  </div>
                  <p className="text-sm md:text-sm lg:text-lg mt-1 md:mt-3 text-mainblack">
                    {item.description}
                  </p>
                  <span className="mt-2 md:mt-5 block text-sm md:text-base text-gray-600">
                    Desde{" "}
                    <span className="font-semibold text-xl lg:text-3xl ps-2">
                      ${new Intl.NumberFormat("es-ES").format(item.price)}COP
                    </span>
                  </span>
                  <div className="flex gap-2 md:gap-3 mt-5 text-mainwhite">
                    <Button variant="default" asChild className="w-full group">
                      <Link href={`/reserve?tour=${item.id}`}>
                        Reservar
                        <Leaf className="ml-1 group-hover:fill-mainwhite group-hover:stroke-mainblack" />
                      </Link>
                    </Button>
                    <Button variant="gold" asChild className="w-min">
                      <Link href={`/planes/${item.id}`}>
                        Ver más
                        <ChevronRight />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </MotionWrapper>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-10 xl:gap-16 mt-20 xl:mt-36">
          <h2
            className={`${albert.className} text-3xl md:text-4xl xl:text-5xl font-bold text-main`}
          >
            Destinos
          </h2>
          <div className="flex flex-col sm:grid grid-cols-2 gap-10 lg:grid-cols-3 2xl:grid-cols-4 lg:justify-center lg:items-center lg:gap-10 xl:gap-14">
            <MotionWrapper direction="up" cascade>
              {plans.map((item) => (
                <div key={item.id}>
                  <Image
                    src={item.image}
                    width={400}
                    height={400}
                    className="w-full rounded-lg lg:rounded-xl h-28 lg:h-48 object-cover object-center"
                    alt={item.title}
                  />
                  <div className="flex justify-between items-center mt-6 text-mainwhite">
                    <h3
                      className={`${albert.className} text-lg md:text-xl text-main lg:text-2xl font-bold`}
                    >
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 text-base text-gray-500">
                      <MapPin className="w-4 h-4 lg:w-auto lg:h-auto" />
                      {item.location}
                    </div>
                  </div>
                  <p className="text-sm md:text-sm lg:text-lg mt-1 md:mt-3 text-mainblack">
                    {item.description}
                  </p>
                  <span className="mt-2 md:mt-5 block text-sm md:text-base text-gray-600">
                    Desde{" "}
                    <span className="font-semibold text-xl lg:text-3xl ps-2">
                      ${new Intl.NumberFormat("es-ES").format(item.price)}COP
                    </span>
                  </span>
                  <div className="flex gap-2 md:gap-3 mt-5 text-mainwhite">
                    <Button variant="default" asChild className="w-full group">
                      <Link href={`/reserve?tour=${item.id}`}>
                        Reservar
                        <Leaf className="ml-1 group-hover:fill-mainwhite group-hover:stroke-mainblack" />
                      </Link>
                    </Button>
                    <Button variant="gold" asChild className="w-min">
                      <Link href={`/planes/${item.id}`}>
                        Ver más
                        <ChevronRight />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </MotionWrapper>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-2 text-center w-11/12 md:w-3/4 xl:w-1/2 mx-auto mb-24 md:mt-36">
        <h2
          className={`${albert.className} text-3xl md:text-4xl xl:text-5xl font-bold text-main`}
        >
          ¿Tienes dudas sobre alguno de nuestros planes?
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button
          variant="default"
          asChild
          className="w-1/2 xl:w-1/3 mx-auto group mt-5"
        >
          <Link href={`/`}>
            Contáctanos
            <Leaf className="ml-1 group-hover:fill-mainwhite group-hover:stroke-mainblack" />
          </Link>
        </Button>
      </section>
    </>
  );
}
