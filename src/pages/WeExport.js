import React from "react";

import { FadeDown } from "../components/Animation.tsx";
import BreadCrumb from "../components/BreadCrumb";
import Banner from "../Assets/Images/banner-6.avif";

function WeExport() {
  return (
    <div>
      <BreadCrumb
        title="Global Presence"
        currentPage="We Export"
        backgroundImage={Banner}
      />

      <div className=" py-8 md:pt-12 md:pb-4 ">
        <div className=" py-4 px-8 sm:px-20 md:px-32 text-center flex justify-center flex-col">
          <FadeDown>
            <h1 className="text-4xl md:text-[42px] lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 mb-12">
              Countries We Export
            </h1>
          </FadeDown>

          <img
            className="w-100 text-center"
            src="https://gyangroup.in/assets/ui/image/export.JPG"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default WeExport;
