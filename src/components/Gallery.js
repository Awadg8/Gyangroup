import React, { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { FadeUp } from "./Animation.js";

// Import local images
import gallery1 from "../Assets/Images/gallery1.jpg";
import gallery2 from "../Assets/Images/gallery2.jpg";
import gallery3 from "../Assets/Images/gallery3.jpg";
import gallery4 from "../Assets/Images/gallery4.jpg";
import gallery5 from "../Assets/Images/gallery5.jpg";
import gallery6 from "../Assets/Images/gallery6.jpg";
import gallery7 from "../Assets/Images/gallery7.jpg";
import gallery8 from "../Assets/Images/gallery8.jpg";
import gallery9 from "../Assets/Images/gallery9.jpg";
import gallery10 from "../Assets/Images/gallery10.jpg";
import gallery11 from "../Assets/Images/gallery11.jpg";
import gallery12 from "../Assets/Images/gallery12.jpg";

const galleryItems = [
  { thumb: gallery1, industries: "Pharmaceutical Research" },
  { thumb: gallery2, industries: "Agrochemicals" },
  { thumb: gallery3, industries: "Research & Development" },
  { thumb: gallery4, industries: "Pharmaceutical Manufacture" },
  { thumb: gallery5, industries: "Automotive Coatings" },
  { thumb: gallery6, industries: "Industrial Lubricants" },
  { thumb: gallery7, industries: "Color & Pigments" },
  { thumb: gallery8, industries: "Chemical" },
  { thumb: gallery9, industries: "Color & Pigments" },
  { thumb: gallery10, industries: "Veterinary Medicine" },
  { thumb: gallery11, industries: "Pesticide" },
  { thumb: gallery12, industries: "Medical" },
];

// Custom Styles for Full-Screen Gallery Modal
const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    zIndex: 70,
  },
  content: {
    inset: 0,
    background: "transparent",
    border: "none",
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div>
        <FadeUp>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 text-center mb-10">
            Industries We Served
          </h2>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => openModal(index)}
            >
              <img
                src={item.thumb}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto transform group-hover:scale-105 transition-all duration-300"
                loading="lazy"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white text-sm md:text-base lg:text-lg font-bold text-center">
                  {item.industries}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalStyles}
          ariaHideApp={false}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative flex items-center justify-center w-screen h-screen"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white text-2xl bg-gray-600 rounded-full px-[14px] py-[8px] z-50 hover:bg-gray-700 transition"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-6 text-white text-3xl bg-gray-600 rounded-full pt-[9px] pb-2 pr-4 pl-[17px] z-50 hover:bg-gray-700 transition"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            {/* Full-Screen Image */}
            <img
              src={galleryItems[currentIndex].thumb}
              alt="Gallery Preview"
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-md"
            />

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-6 text-white text-3xl bg-gray-600 rounded-full pt-[9px] pb-2 pr-4 pl-[17px] z-50 hover:bg-gray-700 transition"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </motion.div>
        </Modal>
      )}
    </div>
  );
};

export default Gallery;
