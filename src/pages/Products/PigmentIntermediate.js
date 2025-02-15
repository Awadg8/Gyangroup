import React from "react";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import Banner from "../../Assets/Images/banner-3.jpg";

import BreadCrumb from "../../components/BreadCrumb";
import { FadeUp, FadeLeft, FadeDown } from "../../components/Animation.js";

const products = [
  {
    id: 1,
    image:
      "https://www.gyangroup.in/upload_data/images/Product/62/GHP-1023.png",
    casNo: "6265-07-2",
    name: "4 Methyl 2 Amino 6 Nitro Phenol",
    productNo: "GHP-1023",
    categoryName: "Pigment Intermediate",
    molecularWeight: "168.15",
    mwFormula: "C7H8N2O3",
    productStatus: "Campaign Base",
    specification: "On Request",
    application: "PHARMA",
  },
  {
    id: 2,
    image:
      "https://www.gyangroup.in/upload_data/images/Product/59/GHP-1021.png",
    casNo: "94-85-9",
    name: "2,5 Diethoxy Aniline",
    productNo: "GHP-1023",
    categoryName: "Pigment Intermediate",
    molecularWeight: "168.15",
    mwFormula: "C7H8N2O3",
    productStatus: "Campaign Base",
    specification: "On Request",
    application: "PHARMA",
  },
  {
    id: 3,
    image:
      "https://www.gyangroup.in/upload_data/images/Product/57/GHP-1004.png",
    casNo: "100-10-7",
    name: "N N Dimethyl Benzaldehyde",
    productNo: "GHP-1023",
    categoryName: "Pigment Intermediate",
    molecularWeight: "168.15",
    mwFormula: "C7H8N2O3",
    productStatus: "Campaign Base",
    specification: "On Request",
    application: "PHARMA",
  },
  {
    id: 4,
    image:
      "https://www.gyangroup.in/upload_data/images/Product/56/GHP-1001.png",
    casNo: "118-46-7",
    name: "1 Amino 7 Naphthol",
    productNo: "GHP-1023",
    categoryName: "Pigment Intermediate",
    molecularWeight: "168.15",
    mwFormula: "C7H8N2O3",
    productStatus: "Campaign Base",
    specification: "On Request",
    application: "PHARMA",
  },
];

function PigmentIntermediate() {
  return (
    <>
      <BreadCrumb
        title="Pigment Intermediate"
        currentPage="Pigment Intermediate"
        backgroundImage={Banner}
      />

      <div className="py-12 md:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" text-center mb-10 flex justify-center items-center flex-col">
            <FadeDown>
              <h1 className="pb-6 text-4xl md:text-[42px] lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Our Products Range
              </h1>
            </FadeDown>

            <FadeUp className=" w-[70%]">
              <p className=" text-gray-600 text-base mb-4">
                With our dedication, determination and innovation we are one
                such association who are successfully making the products and
                continuously strive to reach the best standards in both quality
                &amp; value.
              </p>

              <p className=" text-gray-600 text-base mb-5">
                Our concept has driven us to manufacture vital products under
                co-development with our manufacturing associates to fulfill the
                current requirement.
              </p>
            </FadeUp>
          </div>

          <FadeLeft>
            <h1 className=" text-[26px] md:text-3xl lg:text-[32px] px-4 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 pb-5 mt-9">
              Pigment Intermediate
            </h1>
          </FadeLeft>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id || index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group relative"
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <FadeUp delay={index * 0.1} className="p-4 pb-6">
                  <div className="relative aspect-square w-full mb-4 rounded-lg overflow-hidden bg-gray-50 border-slate-200 border-[2px]">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <NavLink
                        to={`/products/productDetail/${product.id}`}
                        className="w-full inline-flex items-center justify-center px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-md hover:bg-gradient-to-r from-blue-600 to-blue-800  hover:text-white transition-colors duration-200"
                        state={{ product }}
                      >
                        <span className="font-medium text-sm">
                          View Product
                        </span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </NavLink>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        CAS: {product.casNo}
                      </span>
                      {/* Add favorite button or other status indicator if needed */}
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 leading-snug">
                      {product.name}
                    </h3>

                    {/* Add additional product info if available */}
                    {product.price && (
                      <div className="flex items-center mt-2">
                        <span className="text-lg font-bold text-gray-900">
                          ${product.price}
                        </span>
                        {product.unit && (
                          <span className="ml-2 text-sm text-gray-500">
                            / {product.unit}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </FadeUp>

                {/* Status Ribbon */}
                {product.status && (
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                    <span
                      className={`${
                        product.status === "New"
                          ? "text-green-600"
                          : "text-blue-600"
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PigmentIntermediate;
