"use client";

import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const BENGALURU = {
  lat: 12.9716,
  lng: 77.5946,
  name: "Bengaluru",
};

export function LocationMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style:
        "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json",
      center: [BENGALURU.lng, BENGALURU.lat],
      zoom: 5,
      pitch: 0,
      bearing: 0,
      scrollZoom: false,
      boxZoom: false,
      dragRotate: false,
      touchZoom: false,
      doubleClickZoom: false,
      keyboard: false,
      dragPan: false,
    });

    // Add marker at Bengaluru
    const markerElement = document.createElement("div");
    markerElement.className =
      "h-3 w-3 rounded-full bg-green-500 shadow-lg ring-2 ring-green-400/50";

    new maplibregl.Marker({
      element: markerElement,
      anchor: "center",
    })
      .setLngLat([BENGALURU.lng, BENGALURU.lat])
      .addTo(map.current);

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      className="h-28 w-full rounded-xl border border-border overflow-hidden bg-panel-muted"
      style={{ minHeight: "7rem" }}
    />
  );
}
