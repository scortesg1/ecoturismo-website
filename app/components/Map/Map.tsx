"use client";

import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { LOCATIONS_DATA } from "@/app/data/siteData";

const LocationMap = () => {

  useEffect(() => {
    // Dynamically import Leaflet only on client-side
    const L = require('leaflet');

    if (typeof window !== "undefined") {
      const mapInstance = L.map("map", { 
        zoomControl: false 
      }).setView([3.4274, -76.5187], 11);

      mapInstance.dragging.disable();
      mapInstance.touchZoom.disable();
      mapInstance.doubleClickZoom.disable();
      mapInstance.scrollWheelZoom.disable();
      mapInstance.keyboard.disable();

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(mapInstance);

      const customIcon = L.divIcon({
        className: "custom-marker",
        html: `<div class="w-8 h-8 bg-mainblack rounded-full flex items-center justify-center text-white font-bold"></div>`,
        iconSize: [40, 40],
        iconAnchor: [16, 32],
      });

      LOCATIONS_DATA.forEach((location) => {
        const marker = L.marker(location.coordinates, { icon: customIcon })
          .addTo(mapInstance)
          .bindPopup(location.name);

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
    <div className="h-96 lg:h-[500px] xl:h-[550px] 2xl:h-[600px] relative z-0">
      <div id="map" className="w-full h-full rounded-lg overflow-hidden" />
    </div>
  );
};

export default LocationMap;