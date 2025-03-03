"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// For Showing Marker On MAP
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// MAP Location JSON File
import worldGeoJSON from "../world-countries.json";

// SVG Icon Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

// Those Marker We Want To Show On MAP
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

  return (
    <div className="flex relative flex-col items-center justify-center w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-2xl">
      <div className="relative w-full h-full max-w-6xl aspect-[16/9] mt-8 flex justify-center items-center">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 140 }}
          className="w-full h-full flex"
        >
          <Geographies geography={worldGeoJSON} className="pt-40">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#2d3748"
                  stroke="#ffcc00"
                  strokeWidth={0.5}
                  className="w-full h-full"
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
              <g>
                <motion.g
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredMarker === name ? 1.1 : 1 }}
                  onMouseEnter={() => setHoveredMarker(name)}
                  onMouseLeave={() => setHoveredMarker(null)}
                  className="relative"
                >
                  {/* Tooltip marker */}
                  {hoveredMarker === name && (
                    <motion.foreignObject
                      x="-50"
                      y="-45"
                      width="115"
                      height="40"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-white text-gray-800 px-1 py-2 rounded-md shadow-md text-sm font-semibold text-center w-full">
                        {name}
                      </div>
                    </motion.foreignObject>
                  )}

                  <FontAwesomeIcon
                    icon={faLocationDot}
                    color={color}
                    width="24px"
                    height="24px"
                    className="cursor-pointer drop-shadow-md"
                  />
                </motion.g>
              </g>
            </Marker>
          ))}
        </ComposableMap>
      </div>

      {/* Country Name On Hovering On Marker */}
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
