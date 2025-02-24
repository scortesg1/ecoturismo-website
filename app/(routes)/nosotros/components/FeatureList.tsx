"use client"

import React from "react";
import { ABOUTUS_DATA } from "../data/nosotros.data";
import { albert } from "@/app/ui/fonts";

export default function FeatureList() {
  return (
    <ul className="flex flex-wrap gap-5 lg:gap-10 mt-10 justify-center">
      {ABOUTUS_DATA.features.map((feature, index) => (  
        <li key={index} className="flex flex-col items-center gap-2 lg:gap-3 w-full md:w-72 lg:w-96 bg-main px-5 py-8 lg:p-10 text-mainwhite rounded-md lg:rounded-xl text-center">
          <feature.icon size={50} />
          <h3 className={`${albert.className} text-lg xl:text-2xl font-bold text-mainwhite`}>{feature.title}</h3>
          <p>{feature.description}</p>
        </li>
      ))}   
    </ul>
  );
}
