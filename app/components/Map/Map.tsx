"use client";

import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LOCATIONS_DATA } from "@/app/page";

const LocationMap = () => {
  useEffect(() => {
    // Verificar si window está definido (solo ejecutar en el cliente)
    if (typeof window !== "undefined") {
      // Crear el mapa
      const map = L.map("map", {
        zoomControl: false,
      }).setView([3.4274, -76.5187], 11);
      map.dragging.disable();
      map.touchZoom.disable();
      map.doubleClickZoom.disable();
      map.scrollWheelZoom.disable();
      map.keyboard.disable();

      // Agregar el tile layer (OpenStreetMap)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      // Personalizar el icono del marcador
      const customIcon = L.divIcon({
        className: "custom-marker",
        html: `
        <div class="w-8 h-8 bg-mainblack rounded-full flex items-center justify-center text-white font-bold">
        </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [16, 32],
      });

      // Agregar marcadores
      LOCATIONS_DATA.forEach((location) => {
        const marker = L.marker(location.coordinates, { icon: customIcon })
          .addTo(map)
          .bindPopup(location.name);

        // Agregar el número al marcador
        const markerElement = marker.getElement();
        if (markerElement) {
          const iconElement = markerElement.querySelector(".custom-marker div");
          if (iconElement) {
            iconElement.textContent = location.id.toString();
          }
        }
      });
    }
  }, []);

  return (
    <div className="h-[600px] relative">
      <div id="map" className="w-full h-full rounded-lg overflow-hidden" />
    </div>
  );
};

export default LocationMap;
