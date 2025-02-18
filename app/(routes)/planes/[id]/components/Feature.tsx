"use client";

import { icons } from "lucide-react";
import { iconDictionary } from "../page";
import { albert } from "@/app/ui/fonts";

const Feature = ({ id, name }: { id: number; name: string }) => {
  const selectedIcon =
    iconDictionary.find((icon) => icon.featureId === id) || 0;
  const Icon = icons[selectedIcon.icon || "Users"];

  return (
    <li key={id} className="flex flex-col w-28 items-center text-center gap-y-5">
      {Icon && <Icon className="w-14 h-14" />}
      <span className={`${albert.className} font-medium text-lg`}>{name}</span>
    </li>
  );
};

export default Feature;
