"use client";

import { icons } from "lucide-react";
import { albert } from "@/app/ui/fonts";
import { LucideIcon } from "lucide-react";

const iconDictionary = [
  {
    featureId: 1,
    icon: "Users",
  },
  {
    featureId: 2,
    icon: "WavesLadder",
  },
  {
    featureId: 3,
    icon: "Shield",
  },
  {
    featureId: 4,
    icon: "EggFried",
  },
  {
    featureId: 5,
    icon: "Binoculars",
  },
];

interface IconEntry {
  featureId: number;
  icon: keyof typeof icons;
}

const Feature = ({ id, name }: { id: number; name: string }) => {
  const selectedIcon =
    (iconDictionary as IconEntry[]).find((icon) => icon.featureId === id) ||
    ({ icon: "Users" } as IconEntry);

  const Icon: LucideIcon = icons[selectedIcon.icon];

  return (
    <li
      key={id}
      className="flex flex-col w-28 items-center text-center gap-y-3 lg:gap-y-5"
    >
      {Icon && <Icon className="w-10 h-10 lg:w-14 lg:h-14" />}
      <span className={`${albert.className} font-medium text-sm lg:text-lg`}>
        {name}
      </span>
    </li>
  );
};

export default Feature;
