import { Quattrocento_Sans, Albert_Sans } from "next/font/google";

// Headings
export const albert = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

// Body
export const quattrocento = Quattrocento_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
