import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NAV_LINKS } from "./Navbar.data";
import { albert } from "@/app/ui/fonts";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center pt-14 pb-0 w-11/12 mx-auto">
      <Image src="/next.svg" width={200} height={200} alt="Logo" />
      <ul className="flex space-x-14 text-lg font-medium">
        {NAV_LINKS.map((link) => (
          <li key={link.title} className="">
            <Link
              href={link.href}
              className={`${albert.className} relative group hover:text-gold inline-block font-semibold`}
            >
              {link.title}
              <span className="w-1/2 bg-main h-[2px] block absolute left-1/2 -translate-x-1/2 -bottom-1 group-hover:w-full group-hover:bg-gold transition-all duration-300"></span>
            </Link>
          </li>
        ))}
      </ul>
      <Button variant="gold">
        Contacto
        <Phone />
      </Button>
    </nav>
  );
}
