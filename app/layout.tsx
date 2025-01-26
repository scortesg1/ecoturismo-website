import type { Metadata } from "next";
import "./globals.css";
import { quattrocento } from "./ui/fonts.js";
import Navbar from "./shared/Navbar/Navbar";
import WhatsAppButton from "./shared/WhatsAppButton/WhatsAppButton";
import ScrollToTopButton from "./shared/ScrollToTopButton/ScrollToTopButton";
import MotionWrapper from "./shared/MotionWrapper/MotionWrapper";

export const metadata: Metadata = {
  title: "Ecoturismo",
  description: "Ecoturismo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${quattrocento.className} antialiased bg-mainwhite text-mainblack overflow-x-hidden`}
      >
        <MotionWrapper direction="down" cascade>
          <Navbar />
        </MotionWrapper>
        {children}
        <WhatsAppButton />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
