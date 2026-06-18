"use client";

import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

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
      scrollZoom: true,
      boxZoom: false,
      dragRotate: false,
      doubleClickZoom: true,
      touchZoomRotate: true,
      keyboard: false,
      dragPan: true,
      attributionControl: false,
    });

    map.current.addControl(
      new maplibregl.AttributionControl({ compact: true })
    );

    map.current.on("load", () => {
      map.current?.resize();
    });

    const resizeObserver = new ResizeObserver(() => {
      map.current?.resize();
    });

    resizeObserver.observe(mapContainer.current);

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
      resizeObserver.disconnect();
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      className="location-map-container pointer-events-auto rounded-xl border border-border overflow-hidden bg-panel-muted"
    />
  );
}
