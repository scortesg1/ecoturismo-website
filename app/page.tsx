import { Button } from "@/components/ui/button";
import { albert } from "./ui/fonts";
import Image from "next/image";
import { Facebook, Instagram, Leaf } from "lucide-react";
import ToursCarousel from "./components/ToursCarousel/ToursCarousel";
import ReviewsCarousel from "./components/ReviewsCarousel/ReviewsCarousel";
import Link from "next/link";
import Map from "./components/Map/Map";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaWhatsapp } from "react-icons/fa";
import MotionWrapper from "./shared/MotionWrapper/MotionWrapper";
import { FOOTER_LINKS, LOCATIONS_DATA } from "./data/siteData";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <section className="relative lg:px-12 w-11/12 h-[600px] sm:h-full lg:h-[600px] xl:h-[760px] 2xl:gap-x-6 mt-10 xl:mt-20 flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col gap-3 z-10 text-mainwhite px-5 py-16 md:px-10 lg:px-0 xl:px-14">
          <MotionWrapper>
            <h1
              className={`${albert.className} text-4xl md:text-5xl lg:text-6xl font-bold `}
            >
              Experiencias auténticas en <br /> el corazón del{" "}
              <b className="font-bold text-gold">Bosque de Niebla</b>
            </h1>
            <p className="text-sm md:text-base sm:w-3/4 md:w-full lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 lg:gap-4 mt-4">
              <Button variant="outline" className="w-min group">
                Conoce nuestros planes
                <Leaf className="ml-1 group-hover:fill-mainwhite group-hover:stroke-mainblack " />
              </Button>
              <Button variant="gold" className="w-min">
                Habla con nosotros
              </Button>
            </div>
          </MotionWrapper>
        </div>
        <MotionWrapper className="w-auto h-full flex self-end">
          <Image
            src="/heroPerson.png"
            width={900}
            priority
            height={900}
            alt="bg"
            className="self-end hidden sm:block sm:w-80 md:w-[22rem] lg:w-[45rem] 2xl:w-[650px] 2xl:h-auto brightness-75"
          />
        </MotionWrapper>
        <video
          className="absolute -z-10 inset-0 w-full h-full object-cover object-center rounded-lg lg:rounded-2xl brightness-[.30]"
          autoPlay
          loop
          muted
          preload="auto"
        >
          <source src="/bosque.mp4" type="video/mp4" />
        </video>
        <div className="absolute w-64 sm:w-80 md:w-[380px] 2xl:w-[600px] h-auto -right-1 -bottom-[1px] lg:right-0 lg:-bottom-[1px]">
          <Image
            src="/heroShape.svg"
            width={200}
            priority
            height={200}
            alt="bg"
            className="w-full relative"
          />
          <MotionWrapper direction="up">
            <Image
              src="/next.svg"
              width={300}
              priority
              height={300}
              alt="logo"
              className="w-28 sm:w-40 xl:w-56 absolute bottom-4 right-5 xl:bottom-8 xl:left-1/3 opacity-40"
            />
          </MotionWrapper>
        </div>
      </section>
      <section className="w-10/12 xl:w-9/12 my-20 lg:my-24 xl:my-28">
        <h2
          className={`${albert.className} text-3xl md:text-4xl xl:text-5xl font-bold text-mainblack`}
        >
          Experimenta el turismo <br /> como nunca antes
        </h2>
        <p className="text-sm md:text-base xl:text-lg mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. onsectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. onsectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <div className="flex flex-col md:grid grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 gap-4 xl:gap-12 relative mt-10 lg:mt-20 lg:h-[550px] xl:h-[700px]">
          <div className="relative flex rounded-lg xl:rounded-2xl h-24 md:h-full overflow-hidden row-span-2 lg:row-span-full">
            <Image
              src="/experiencesWalk.jpg"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-auto object-cover object-center brightness-50"
              alt="Persona caminando en un bosque"
            />
            {/* Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            {/* Texto */}
            <h3
              className={`${albert.className} z-10 font-semibold lg:font-bold text-mainwhite self-end pb-2 ps-2 md:pb-5 md:ps-5 lg:pb-8 lg:ps-8 xl:pb-10 xl:ps-10 text-base  lg:text-xl xl:text-2xl`}
            >
              Caminatas
            </h3>
          </div>
          <div className="relative flex rounded-lg xl:rounded-2xl h-24 md:h-48 lg:h-full overflow-hidden row-span-1">
            <Image
              src="/experiencesForest.jpg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="h-auto object-cover object-center brightness-50"
              alt="Persona caminando en un bosque"
            />
            {/* Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            {/* Texto */}
            <h3
              className={`${albert.className} z-10 font-semibold lg:font-bold text-mainwhite self-end pb-2 ps-2 md:pb-5 md:ps-5 lg:pb-8 lg:ps-8 xl:pb-10 xl:ps-10 text-base  lg:text-xl xl:text-2xl`}
            >
              Tours
            </h3>
          </div>
          <div className="relative flex rounded-lg xl:rounded-2xl h-24 md:h-48 lg:h-full overflow-hidden row-span-1">
            <Image
              src="/experiencesCalm.avif"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="h-auto object-cover object-center brightness-50"
              alt="Persona caminando en un bosque"
            />
            {/* Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            {/* Texto */}
            <h3
              className={`${albert.className} z-10 font-semibold lg:font-bold text-mainwhite self-end pb-2 ps-2 md:pb-5 md:ps-5 lg:pb-8 lg:ps-8 xl:pb-10 xl:ps-10 text-base  lg:text-xl xl:text-2xl`}
            >
              Cabañas
            </h3>
          </div>
          <div className="relative flex rounded-lg xl:rounded-2xl h-24 md:h-48 lg:h-full overflow-hidden row-span-1 col-span-2">
            <Image
              src="/experiencesBird.avif"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="h-auto object-cover object-center brightness-50"
              alt="Persona caminando en un bosque"
            />
            {/* Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            {/* Texto */}
            <h3
              className={`${albert.className} z-10 font-semibold lg:font-bold text-mainwhite self-end pb-2 ps-2 md:pb-5 md:ps-5 lg:pb-8 lg:ps-8 xl:pb-10 xl:ps-10 text-base  lg:text-xl xl:text-2xl`}
            >
              Avistamiento
            </h3>
          </div>
        </div>
      </section>
      <section className="w-full mt-5 lg:mt-28 flex flex-col items-center justify-center relative lg:h-[850px]">
        <Image
          src="/toursBg.png"
          alt="bg"
          className="-z-10 object-cover brightness-[.25]"
          fill
          unoptimized
        />
        <ToursCarousel />
      </section>
      <section className="bg-mainwhite w-10/12 xl:w-9/12 my-14 lg:my-20 xl:my-28 flex flex-col items-center justify-center relative h-full">
        <h2
          className={`${albert.className} text-3xl md:text-4xl xl:text-5xl font-bold text-mainblack`}
        >
          Nuestras ubicaciones
        </h2>
        <p className="text-sm text-center md:text-base xl:text-lg mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <div className="grid lg:grid-cols-2 mt-14 lg:mt-20 2xl:mt-28 lg:gap-6 w-full">
          <Map />
          <div className="flex flex-col gap-2 mt-5 lg:mt-0 lg:gap-4 2xl:px-10">
            <MotionWrapper direction="up" cascade>
              {LOCATIONS_DATA.map((location) => (
                <div
                  className="flex flex-col p-3 md:p-4 xl:p-6 relative z-10 text-mainwhite group overflow-hidden rounded-xl w-full"
                  key={location.id}
                >
                  <span
                    className={`${albert.className} text-right font-bold text-lg lg:text-2xl xl:text-4xl`}
                  >
                    {location.id}
                  </span>
                  <h3
                    className={`${albert.className} font-bold text-base lg:text-xl xl:text-2xl mt-4`}
                  >
                    {location.name}
                  </h3>
                  <p className="text-sm md:text-base pt-1">
                    {location.description}
                  </p>
                  <Image
                    src={location.image}
                    alt={location.name}
                    className="-z-10 object-cover brightness-[.25] group-hover:brightness-[.35] group-hover:scale-105 transition-all duration-300 rounded-xl"
                    fill
                  />
                </div>
              ))}
              <Button asChild className="group mt-4 w-full">
                <Link href="/">
                  Ver todas
                  <Leaf className="ml-1 group-hover:fill-white group-hover:stroke-mainblack transition-colors duration-300" />
                </Link>
              </Button>
            </MotionWrapper>
          </div>
        </div>
      </section>
      <section className="w-full bg-main mt-10 lg:mt-28 pt-20 lg:pt-28 flex flex-col items-center justify-center relative h-full">
        <h2
          className={`${albert.className} text-3xl md:text-4xl xl:text-5xl font-bold text-mainwhite`}
        >
          Opiniones
        </h2>
        <ReviewsCarousel />
        <Image
          src="/reviewsBg.png"
          className="absolute bottom-10 w-40 lg:w-auto left-0"
          width={400}
          height={400}
          alt=""
        ></Image>
      </section>
      {/* FAQ */}
      <section className="w-10/12 xl:w-9/12 mb-16 xl:mb-28 mt-28 xl:mt-56 flex flex-col items-center justify-center relative h-full">
        <MotionWrapper direction="up" cascade>
          <h2
            className={`${albert.className} text-3xl md:text-4xl xl:text-5xl font-bold text-mainblack`}
          >
            Preguntas frecuentes
          </h2>
        </MotionWrapper>
        <Accordion
          type="single"
          collapsible
          className="lg:w-3/4 xl:w-2/3 mt-10 lg:mt-16 xl:mt-20 w-full"
        >
          <MotionWrapper direction="left" cascade damping={0.05} className="">
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Qué tipos de tours ofrecen?</AccordionTrigger>
              <AccordionContent>
                Ofrecemos tours ecológicos a parques naturales, caminatas
                guiadas, recorridos culturales, actividades de avistamiento de
                aves y experiencias de turismo sostenible adaptadas a tus
                preferencias.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                ¿Los tours son aptos para todas las edades?
              </AccordionTrigger>
              <AccordionContent>
                Sí, contamos con tours diseñados para diferentes edades y
                niveles de condición física. Desde caminatas ligeras para
                familias con niños hasta actividades más desafiantes para
                aventureros.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                ¿Qué incluye el precio del tour?
              </AccordionTrigger>
              <AccordionContent>
                El precio incluye transporte, guía profesional, entradas a los
                destinos turísticos, seguro de viaje y, en algunos casos,
                alimentos o refrigerios. Cada tour tiene detalles específicos
                que te compartiremos al reservar.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>¿Qué debo llevar a los tours?</AccordionTrigger>
              <AccordionContent>
                Te recomendamos llevar ropa cómoda, zapatos adecuados para
                caminatas, protector solar, repelente de insectos, una botella
                de agua y, dependiendo del tour, equipo adicional como
                impermeables o binoculares.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                ¿Qué medidas de sostenibilidad aplican en sus tours?
              </AccordionTrigger>
              <AccordionContent>
                Nuestros tours promueven el turismo responsable, minimizando el
                impacto ambiental, apoyando a comunidades locales y cumpliendo
                con estrictas normas de conservación de la naturaleza.
              </AccordionContent>
            </AccordionItem>
          </MotionWrapper>
        </Accordion>
      </section>
      <section className="w-10/12 xl:w-9/12 flex flex-col-reverse gap-y-8 md:flex-row gap-x-10 items-center my-16 md:my-20 lg:my-28">
        <div className="flex flex-col gap-4 text-center sm:items-center md:items-start md:text-left">
          <MotionWrapper direction="up" cascade damping={0.1}>
            <h2
              className={`${albert.className} text-3xl md:text-4xl xl:text-5xl font-bold text-mainblack`}
            >
              Reserva ahora tu próxima{" "}
              <br className="block md:hidden xl:block" /> experiencia única
            </h2>
            <p className="lg:w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-col sm:flex-row mx-auto gap-3 mt-4 items-center">
              <Button className="w-min group">
                Reservar ahora
                <Leaf className="ml-1 group-hover:fill-mainwhite group-hover:stroke-mainblack" />
              </Button>
              <Button variant="gold" className="w-min">
                Habla con nosotros
              </Button>
            </div>
          </MotionWrapper>
        </div>
        <MotionWrapper direction="right">
          <Image
            src="https://images.unsplash.com/photo-1484910292437-025e5d13ce87?q=80&w=2114&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={800}
            height={800}
            className="rounded-lg lg:rounded-2xl sm:w-96 mx-auto md:w-full lg:mx-0 xl:max-w-xl"
            alt="Reserva"
          />
        </MotionWrapper>
      </section>
      <footer className="w-full bg-main md:mt-10">
        <div className="w-11/12 mx-auto text-mainwhite grid grid-cols-[1fr,2fr] gap-4 px-6 lg:px-10 pt-20 lg:pt-32 pb-20 lg:pb-20">
          <div className="w-full col-span-full md:col-span-1 flex flex-col gap-5 lg:gap-10">
            <Image
              src="/nextWhite.svg"
              width={300}
              height={300}
              alt="logo"
              className="w-36 lg:w-56 mx-auto md:mx-0"
            />
            <div className="flex flex-col items-center md:items-start gap-3 text-sm lg:text-base mt-2">
              <MotionWrapper direction="up" cascade>
                <Link href="/" className="flex items-center gap-2 group">
                  <Instagram className="group-hover:stroke-gold w-4 h-4 lg:w-6 lg:h-6" />
                  <span className="group-hover:text-gold">Instagram</span>
                </Link>
                <Link href="/" className="flex items-center gap-2 group">
                  <Facebook className="group-hover:stroke-gold w-4 h-4 lg:w-6 lg:h-6" />
                  <span className="group-hover:text-gold">Facebook</span>
                </Link>
                <Link href="/" className="flex items-center gap-2 group">
                  <FaWhatsapp
                    className="group-hover:fill-gold w-4 h-4 lg:w-6 lg:h-6"
                    size={25}
                  />
                  <span className="group-hover:text-gold">WhatsApp</span>
                </Link>
              </MotionWrapper>
            </div>
          </div>
          <nav className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 col-span-full md:col-span-1 w-full 2xl:flex 2xl:flex-row gap-8 lg:gap-x-20 mt-10 md:mt-0">
            <MotionWrapper
              direction="right"
              cascade
              damping={0.05}
              className="w-full"
            >
              {FOOTER_LINKS.map((section) => (
                <div
                  key={section.heading}
                  className="flex flex-col gap-1 lg:gap-4 w-full"
                >
                  <h4
                    className={`${albert.className} text-base md:text-lg lg:text-xl font-semibold text-gold pb-2`}
                  >
                    {section.heading}
                  </h4>
                  {section.links.map((link) => (
                    <Link
                      href={link.href}
                      className={`${albert.className} relative hover:text-gold inline-block text-sm lg:text-base`}
                      key={link.title}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              ))}
            </MotionWrapper>
          </nav>
          <div className="col-span-full flex flex-col-reverse md:flex-row justify-between items-center text-center lg:text-left mt-10 lg:mt-20 text-sm lg:text-base">
            <MotionWrapper direction="up" cascade>
              <span className="block mt-5 md:mt-0">
                © {new Date().getFullYear()} Ecoturismo. Todos los derechos
                reservados
              </span>
              <div className="flex flex-col gap-3 md:flex-row lg:gap-10">
                <Link href="/" className="text-mainwhite hover:text-gold">
                  PQRS
                </Link>
                <Link href="/" className="text-mainwhite hover:text-gold">
                  Política de privacidad
                </Link>
                <Link href="/" className="text-mainwhite hover:text-gold">
                  Términos y condiciones
                </Link>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </footer>
    </main>
  );
}
