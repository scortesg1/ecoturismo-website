import React from "react";
import { ABOUTUS_DATA } from "../data/nosotros.data";

export default function ActionsList() {
  return (
    <ul className="flex flex-col gap-5 mt-10 lg:mt-20">
      {ABOUTUS_DATA.sustainability.actions.map((action, index) => (
        <li key={index} className="flex flex-col lg:flex-row text-center lg:text-left gap-3 lg:gap-5 items-center text-mainblack p-3 sm:py-5 lg:p-5 bg-mainwhite rounded-lg">
          <action.icon className="w-12 h-12 text-main" /> 
          <p className="text-base lg:text-lg font-medium">{action.title}</p>
        </li>
      ))}
    </ul>
  );
}

