import { FOOTER_LINKS } from "@/app/data/siteData";
import { albert } from "@/app/ui/fonts";
import React from "react";
import MotionWrapper from "../MotionWrapper/MotionWrapper";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
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
  );
}
