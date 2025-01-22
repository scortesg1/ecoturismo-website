import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center pt-14 pb-0 w-11/12 mx-auto">
      <Image src="/next.svg" width={200} height={200} alt="Logo" />
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Hola</Link>
        </li>
        <li>
          <Link href="/">Hola</Link>
        </li>
        <li>
          <Link href="/">Hola</Link>
        </li>
        <li>
          <Link href="/">Hola</Link>
        </li>
      </ul>
      <Button variant="gold">
        Contacto
        <Phone />
      </Button>
    </nav>
  );
}
