"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";

interface MotionWrapperProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  cascade?: boolean;
  className?: string;
  damping?: number;
}

export default function MotionWrapper({
  direction = undefined,
  className = "",
  cascade = false,
  damping = 0.2,
  children,
}: MotionWrapperProps) {
  return (
    <Fade
      className={className}
      triggerOnce
      cascade={cascade}
      direction={direction}
      damping={damping}
    >
      {children}
    </Fade>
  );
}
