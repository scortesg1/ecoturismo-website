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

type Location = {
  id: number;
  name: string;
  description: string;
  coordinates: [number, number];
  image: string;
};

export const LOCATIONS_DATA: Location[] = [
  {
    id: 1,
    name: "Bello horizonte",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    coordinates: [3.4899235, -76.6158009],
    image: "/mapBello.png",
  },
  {
    id: 2,
    name: "Cerro de las Tres Cruces",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    coordinates: [3.4674048, -76.5450713],
    image:
      "https://idiomasblendex.com/wp-content/uploads/2018/11/Cero-las-tres-cruces-ingles-en-medellin.jpg",
  },
  {
    id: 3,
    name: "Pico de Aguila",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    coordinates: [3.3123883, -76.6028285],
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/1f/4c/a9/caption.jpg?w=900&h=500&s=1",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <section className="relative px-12 w-11/12 h-[760px] mt-20 flex justify-between items-center">
        <div className="flex flex-col gap-3 z-10 text-mainwhite px-14">
          <h1 className={`${albert.className} text-6xl font-bold `}>
            Experiencias auténticas en <br /> el corazón del Bosque de Niebla
          </h1>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-4 mt-4">
            <Button variant="outline" className="w-min group">
              Conoce nuestros planes
              <Leaf className="ml-1 group-hover:fill-mainwhite group-hover:stroke-mainblack " />
            </Button>
            <Button variant="gold" className="w-min">
              Habla con nosotros
            </Button>
          </div>
        </div>
        <Image
          src="/heroPerson.png"
          width={900}
          priority
          height={900}
          alt="bg"
          className="self-end h-full w-auto brightness-75"
        />
        <video
          className="absolute -z-10 inset-0 w-full h-full object-cover object-center rounded-2xl brightness-[.30]"
          autoPlay
          loop
          muted
        >
          <source src="/bosque.mp4" type="video/mp4" />
        </video>
        <div className="absolute w-[600px] h-auto right-0 -bottom-[1px]">
          <Image
            src="/heroShape.svg"
            width={200}
            priority
            height={200}
            alt="bg"
            className="w-full relative"
          />
          <Image
            src="/next.svg"
            width={300}
            priority
            height={300}
            alt="logo"
            className="w-56 absolute bottom-8 left-1/3 opacity-40"
          />
        </div>
      </section>
      <section className="w-9/12 my-28">
        <h2 className={`${albert.className} text-5xl font-bold text-mainblack`}>
          Experimenta el turismo <br /> como nunca antes
        </h2>
        <p className="text-lg mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. onsectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. onsectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <div className="grid grid-cols-3 grid-rows-2 gap-12 relative mt-20 h-[700px]">
          <div className="relative flex rounded-2xl h-full overflow-hidden row-span-full">
            <Image
              src="/experiencesWalk.jpg"
              fill
              className="h-auto object-cover object-center brightness-50"
              alt="Persona caminando en un bosque"
            />
            {/* Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            {/* Texto */}
            <h3
              className={`${albert.className} z-10 font-bold text-mainwhite self-end pb-10 ps-10 text-2xl`}
            >
              Caminatas
            </h3>
          </div>
          <div className="relative flex rounded-2xl h-full overflow-hidden row-span-1">
            <Image
              src="/experiencesForest.jpg"
              fill
              className="h-auto object-cover object-center brightness-50"
              alt="Persona caminando en un bosque"
            />
            {/* Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            {/* Texto */}
            <h3
              className={`${albert.className} z-10 font-bold text-mainwhite self-end pb-10 ps-10 text-2xl`}
            >
              Tours
            </h3>
          </div>
          <div className="relative flex rounded-2xl h-full overflow-hidden row-span-1">
            <Image
              src="/experiencesCalm.avif"
              fill
              className="h-auto object-cover object-center brightness-50"
              alt="Persona caminando en un bosque"
            />
            {/* Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            {/* Texto */}
            <h3
              className={`${albert.className} z-10 font-bold text-mainwhite self-end pb-10 ps-10 text-2xl`}
            >
              Cabañas
            </h3>
          </div>
          <div className="relative flex rounded-2xl h-full overflow-hidden row-span-1 col-span-2">
            <Image
              src="/experiencesBird.avif"
              fill
              className="h-auto object-cover object-center brightness-50"
              alt="Persona caminando en un bosque"
            />
            {/* Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            {/* Texto */}
            <h3
              className={`${albert.className} z-10 font-bold text-mainwhite self-end pb-10 ps-10 text-2xl`}
            >
              Avistamiento
            </h3>
          </div>
        </div>
      </section>
      <section className="w-full mt-28 flex flex-col items-center justify-center relative h-[850px]">
        <Image
          src="/toursBg.png"
          alt="bg"
          className="-z-10 object-cover brightness-[.25]"
          fill
        />
        <ToursCarousel />
      </section>
      <section className="bg-mainwhite w-9/12 my-28 flex flex-col items-center justify-center relative h-full">
        <h2 className={`${albert.className} text-5xl font-bold text-mainblack`}>
          Nuestras ubicaciones
        </h2>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <div className="grid grid-cols-2 mt-28">
          <Map />
          <div className="flex flex-col gap-4 px-10">
            {LOCATIONS_DATA.map((location) => (
              <div
                className="flex flex-col p-6 relative z-10 text-mainwhite group overflow-hidden rounded-xl"
                key={location.id}
              >
                <span
                  className={`${albert.className} text-right font-bold text-4xl`}
                >
                  {location.id}
                </span>
                <h3 className={`${albert.className} font-bold text-2xl mt-4`}>
                  {location.name}
                </h3>
                <p className="text-base pt-1">{location.description}</p>
                <Image
                  src={location.image}
                  alt={location.name}
                  className="-z-10 object-cover brightness-[.25] group-hover:brightness-[.35] group-hover:scale-105 transition-all duration-300 rounded-xl"
                  fill
                />
              </div>
            ))}
            <Button asChild className="group mt-4">
              <Link href="/">
                Ver todas
                <Leaf className="ml-1 group-hover:fill-white group-hover:stroke-mainblack transition-colors duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="w-full bg-main mt-28 pt-28 flex flex-col items-center justify-center relative h-full">
        <h2 className={`${albert.className} text-5xl font-bold text-mainwhite`}>
          Opiniones
        </h2>
        <ReviewsCarousel />
        <Image
          src="/reviewsBg.png"
          className="absolute bottom-10 left-0"
          width={400}
          height={400}
          alt=""
        ></Image>
      </section>
      {/* FAQ */}
      <section className="w-9/12 mb-28 mt-56 flex flex-col items-center justify-center relative h-full">
        <h2 className={`${albert.className} text-5xl font-bold text-mainblack`}>
          Preguntas frecuentes
        </h2>
        <Accordion type="single" collapsible className="w-2/3 mt-20">
          <AccordionItem value="item-1">
            <AccordionTrigger>¿Qué tipos de tours ofrecen?</AccordionTrigger>
            <AccordionContent>
              Ofrecemos tours ecológicos a parques naturales, caminatas guiadas,
              recorridos culturales, actividades de avistamiento de aves y
              experiencias de turismo sostenible adaptadas a tus preferencias.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              ¿Los tours son aptos para todas las edades?
            </AccordionTrigger>
            <AccordionContent>
              Sí, contamos con tours diseñados para diferentes edades y niveles
              de condición física. Desde caminatas ligeras para familias con
              niños hasta actividades más desafiantes para aventureros.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              ¿Qué incluye el precio del tour?
            </AccordionTrigger>
            <AccordionContent>
              El precio incluye transporte, guía profesional, entradas a los
              destinos turísticos, seguro de viaje y, en algunos casos,
              alimentos o refrigerios. Cada tour tiene detalles específicos que
              te compartiremos al reservar.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>¿Qué debo llevar a los tours?</AccordionTrigger>
            <AccordionContent>
              Te recomendamos llevar ropa cómoda, zapatos adecuados para
              caminatas, protector solar, repelente de insectos, una botella de
              agua y, dependiendo del tour, equipo adicional como impermeables o
              binoculares.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              ¿Qué medidas de sostenibilidad aplican en sus tours?
            </AccordionTrigger>
            <AccordionContent>
              Nuestros tours promueven el turismo responsable, minimizando el
              impacto ambiental, apoyando a comunidades locales y cumpliendo con
              estrictas normas de conservación de la naturaleza.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <section className="w-9/12 flex gap-x-10 my-28">
        <div className="flex flex-col gap-4">
          <h2
            className={`${albert.className} text-5xl font-bold text-mainblack`}
          >
            Reserva ahora tu próxima <br /> experiencia única
          </h2>
          <p className="lg:w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-3 mt-4">
            <Button className="w-min group">
              Reservar ahora
              <Leaf className="ml-1 group-hover:fill-mainwhite group-hover:stroke-mainblack" />
            </Button>
            <Button variant="gold" className="w-min">
              Habla con nosotros
            </Button>
          </div>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1484910292437-025e5d13ce87?q=80&w=2114&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={800}
          height={800}
          className="rounded-2xl max-w-xl"
          alt="Reserva"
        />
      </section>
      <footer className="w-full bg-main">
        <div className="w-11/12 mx-auto text-mainwhite grid grid-cols-[1fr,2fr] gap-4 px-10 pt-32 pb-20">
          <div className="w-full flex flex-col gap-10">
            <Image
              src="/nextWhite.svg"
              width={300}
              height={300}
              alt="logo"
              className="w-56"
            />
            <div className="flex flex-col gap-3">
              <Link href="/" className="flex items-center gap-2 group">
                <Instagram className="group-hover:stroke-gold" />
                <span className="group-hover:text-gold">Instagram</span>
              </Link>
              <Link href="/" className="flex items-center gap-2 group">
                <Facebook className="group-hover:stroke-gold" />
                <span className="group-hover:text-gold">Facebook</span>
              </Link>
              <Link href="/" className="flex items-center gap-2 group">
                <FaWhatsapp className="group-hover:fill-gold" size={25} />
                <span className="group-hover:text-gold">WhatsApp</span>
              </Link>
            </div>
          </div>
          <nav className="flex gap-x-20">
            {FOOTER_LINKS.map((section) => (
              <div key={section.heading} className="flex flex-col gap-4">
                <h4
                  className={`${albert.className} text-xl font-semibold text-gold pb-2`}
                >
                  {section.heading}
                </h4>
                {section.links.map((link) => (
                  <Link
                    href={link.href}
                    className={`${albert.className} relative hover:text-gold inline-block`}
                    key={link.title}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
          <div className="col-span-full flex justify-between items-center mt-20">
            <span>
              © {new Date().getFullYear()} Ecoturismo. Todos los derechos
              reservados
            </span>
            <div className="flex gap-10">
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
          </div>
        </div>
      </footer>
    </main>
  );
}

export const FOOTER_LINKS = [
  { heading: "Inicio", links: [{ title: "Inicio", href: "/" }] },
  {
    heading: "Experiencias",
    links: [
      { title: "Caminata por el bosque", href: "/" },
      { title: "Avistamiento", href: "/" },
    ],
  },
  {
    heading: "Destinos",
    links: [
      { title: "Bello horizonte", href: "/" },
      { title: "Casa Tucán", href: "/" },
    ],
  },
  {
    heading: "Nosotros",
    links: [{ title: "Nuestra historia", href: "/" }],
  },
  {
    heading: "Blog",
    links: [{ title: "Artículos", href: "/" }],
  },
  {
    heading: "Reservas",
    links: [{ title: "Haz tu reserva aquí", href: "/" }],
  },
  {
    heading: "Contacto",
    links: [
      { title: "ecoturismo@gmail.com", href: "mailto:ecoturismo@gmail.com" },
      { title: "WhatsApp", href: "/" },
      { title: "+57 123 456 7890", href: "tel:+571234567890" },
    ],
  },
];
