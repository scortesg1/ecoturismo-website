"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../../../../../node_modules/react-modal-video/css/modal-video.css";
import Image from "next/image";
import { Play } from "lucide-react";

export default function VideoPlayer() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="custom"
        isOpen={isOpen}
        url="/bosque.mp4"
        onClose={() => setOpen(false)}
      />
      <div className="relative w-full">
        <Image
          src="/experiencesForest.jpg"
          width={1200}
          height={1200}
          alt="hola"
          className="w-full h-36 sm:h-60 lg:h-96 xl:h-[500px] object-center object-cover brightness-50 rounded-lg 2xl:rounded-xl"
        />
        <button
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
          title="Play video"
          onClick={() => setOpen(true)}
        >
          <Play className="text-white w-10 lg:w-20 h-10 lg:h-20 fill-white group-hover:scale-105 transition-all duration-300 group-hover:fill-gold group-hover:text-gold" />
        </button>
      </div>
    </>
  );
}
