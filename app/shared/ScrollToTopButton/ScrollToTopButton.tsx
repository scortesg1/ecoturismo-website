"use client";

import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import MotionWrapper from "../MotionWrapper/MotionWrapper";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <button
      className="fixed flex items-center justify-center w-[60px] h-[60px] bg-gray-800 rounded-full right-[40px] bottom-28 text-3xl z-10 cursor-pointer text-white"
      style={{ display: visible ? "inline" : "none" }}
      onClick={scrollToTop}
    >
      <ArrowUp className="mx-auto" />
    </button>
  );
}
