import type { Metadata } from "next";
import "./globals.css";
import { quattrocento } from "./ui/fonts.js";
import Navbar from "./shared/Navbar/Navbar";

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
        className={`${quattrocento.className} antialiased bg-mainwhite text-mainblack`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
