"use client";

import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { NAV_LINKS } from "./Navbar.data";
import { albert } from "@/app/ui/fonts";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export default function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  return (
    <nav className="pt-10 lg:pt-14 pb-0">
      <div className="hidden lg:flex justify-between items-center w-11/12 mx-auto">
        <Image src="/next.svg" width={200} height={200} alt="Logo" className="lg:w-40" />
        <ul className="flex lg:space-x-7 xl:space-x-14 text-base xl:text-lg xl:font-medium">
          {NAV_LINKS.map((link) => (
            <li key={link.title} className="">
              <Link
                href={link.href}
                className={`${albert.className} relative group hover:text-gold inline-block font-normal transition-colors duration-300`}
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
      </div>
      <div className="flex lg:hidden justify-between items-center w-11/12 mx-auto">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger>
            <Menu className="text-mainblack" size={30} />
          </SheetTrigger>
          <SheetContent side="left" className="w-screen bg-main text-mainwhite border-r-0">
            <VisuallyHidden.Root asChild>
              <SheetTitle>Menu</SheetTitle>
            </VisuallyHidden.Root>
            <Image
              src="/nextWhite.svg"
              width={200}
              className="pt-10"
              height={200}
              alt="Logo"
            />
            <ul className="flex flex-col text-base font-medium pt-20 space-y-6">
              {NAV_LINKS.map((link) => (
                <li key={link.title} className="">
                  <Link
                    href={link.href}
                    className={`${albert.className} relative group hover:text-gold inline-block font-normal transition-colors duration-300`}
                  >
                    {link.title}
                    <span className="w-1/2 bg-main h-[2px] block absolute left-0 -bottom-1 group-hover:w-full group-hover:bg-gold transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
        <Button variant="gold">
          Contacto
          <Phone />
        </Button>
      </div>
    </nav>
  );
}
