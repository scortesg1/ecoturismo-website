import React from "react";
import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function WhatsAppButton() {
  return (
    <TooltipProvider>
      <Tooltip defaultOpen>
        <TooltipTrigger asChild>
          <a
            href="/"
            className="whatsapp flex flex-col justify-center items-center animate-pulse"
            target="_blank"
          >
            <FaWhatsapp />
          </a>
        </TooltipTrigger>
        <TooltipContent sideOffset={10}>
          <p>Habla con nosotros</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default WhatsAppButton;
