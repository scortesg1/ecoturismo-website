import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { albert } from "@/app/ui/fonts";
import MotionWrapper from "@/app/shared/MotionWrapper/MotionWrapper";

export default function Faq() {
  return (
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
        </MotionWrapper>
      </Accordion>
    </section>
  );
}
