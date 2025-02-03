import MotionWrapper from "@/app/shared/MotionWrapper/MotionWrapper";
import { albert } from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Cta() {
  return (
    <section className="w-10/12 xl:w-9/12 flex flex-col-reverse gap-y-8 md:flex-row gap-x-10 items-center my-16 md:my-20 lg:my-28">
      <div className="flex flex-col gap-4 text-center sm:items-center md:items-start md:text-left">
        <MotionWrapper direction="up" cascade damping={0.1}>
          <h2
            className={`${albert.className} text-3xl md:text-4xl xl:text-5xl font-bold text-mainblack`}
          >
            Reserva ahora tu próxima <br className="block md:hidden xl:block" />{" "}
            experiencia única
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
  );
}
