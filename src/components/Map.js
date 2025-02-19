"use client";

import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { motion } from "framer-motion";

// SVG Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

// MAP Location JSON File
import worldGeoJSON from "../world-countries.json";

// const markers = [
//   { name: "Germany", coordinates: [5.4515, 58.1657], color: "#ff5722" },
//   { name: "USA", coordinates: [-105.7129, 43.0902], color: "#3f51b5" },
//   { name: "China", coordinates: [104.1954, 35.8617], color: "#4caf50" },
//   { name: "Japan", coordinates: [134.2529, 43.2048], color: "#ff9800" },
//   { name: "Switzerland", coordinates: [3.9, 52.8182], color: "#9c27b0" },
//   { name: "France", coordinates: [-5.2137, 52.6034], color: "#e91e63" },
//   { name: "Italy", coordinates: [10.5674, 45.8719], color: "#00bcd4" },
//   { name: "South Africa", coordinates: [17.9375, 15.5595], color: "#795548" },
// ];

const markers = [
  { name: "Germany", coordinates: [5.4515, 58.1657], color: "#f66419" },
  { name: "USA", coordinates: [-105.7129, 43.0902], color: "#f66419" },
  { name: "China", coordinates: [104.1954, 35.8617], color: "#f66419" },
  { name: "Japan", coordinates: [134.2529, 43.2048], color: "#f66419" },
  { name: "Switzerland", coordinates: [3.9, 52.8182], color: "#f66419" },
  { name: "France", coordinates: [-5.2137, 52.6034], color: "#f66419" },
  { name: "Italy", coordinates: [10.5674, 45.8719], color: "#f66419" },
  { name: "South Africa", coordinates: [17.9375, 15.5595], color: "#f66419" },
];

const Map = () => {
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  return (
    <div className="flex relative flex-col items-center justify-center w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-2xl">
      <div className="relative w-full h-full max-w-6xl aspect-[16/9] mt-8 flex justify-center items-center">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 140 }}
          className="w-full h-full flex"
        >
          <Geographies geography={worldGeoJSON} className=" pt-40">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#2d3748"
                  stroke="#ffcc00"
                  strokeWidth={0.5}
                  className=" w-full h-full"
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#3f4f6e", outline: "none" },
                    pressed: { fill: "#2d3748", outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {markers.map(({ name, coordinates, color }) => (
            <Marker key={name} coordinates={coordinates}>
              <motion.g
                initial={{ scale: 1 }}
                animate={{ scale: hoveredMarker === name ? 1.1 : 1 }}
                onMouseEnter={(e) => {
                  setHoveredMarker(name);
                  setTooltipPosition({
                    x: e.clientX - 15,
                    y: e.clientY - 60,
                  });
                }}
                onMouseLeave={() => setHoveredMarker(null)}
              >
                <FontAwesomeIcon
                  icon={faLocationDot}
                  color={color}
                  width="24px"
                  height="24px"
                  className="cursor-pointer drop-shadow-md"
                />
              </motion.g>
            </Marker>
          ))}
        </ComposableMap>

        {/* Tooltip */}
        {hoveredMarker && (
          <motion.div
            className="fixed bg-white text-black px-3 py-2 rounded-md shadow-md text-sm font-semibold"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y}px`,
              pointerEvents: "none",
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {hoveredMarker}
          </motion.div>
        )}
      </div>

      {/* Country Legends */}
      <div className="mb-8 md:-mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2">
        {markers.map(({ name, color }) => (
          <div key={name} className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faLocationDot} color={color} size="sm" />
            <span className="text-white text-sm">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Map;
