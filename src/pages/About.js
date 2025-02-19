import React from "react";

import BreadCrumb from "../components/BreadCrumb";

import { FadeUp, FadeDown, FadeLeft } from "../components/Animation.js";

// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPaperPlane, faGem } from "@fortawesome/free-solid-svg-icons";

import aboutImage from "../Assets/Images/aboutimg1.jpg";
import Banner from "../Assets/Images/banner-8.avif";

function About() {
  return (
    <div>
      <BreadCrumb
        title="About Us"
        currentPage="About Us"
        backgroundImage={Banner}
      />

      <div className="bg-gray-50">
        {/* About Section here */}
        <section className="py-10 md:py-12 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <FadeLeft>
                <div className="space-y-6">
                  <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 text-3xl md:text-4xl font-semibold">
                    About Gyan Group
                  </h2>

                  <p className="text-gray-600 text-lg md:text-xl font-light">
                    Gaining knowledge is the first step to wisdom. Sharing it is
                    the first step to humanity.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed">
                    <span className="font-semibold"> Gyan (knowledge)</span> is
                    considered as all-powerful, something to be strived for-not
                    only for the
                    <span className="font-semibold">
                      {" "}
                      well-being of humanity
                    </span>{" "}
                    but also for the
                    <span className="font-semibold">
                      {" "}
                      enlightenment of the soul
                    </span>
                    . Dedicated to
                    <span className="font-semibold"> Green Chemistry</span>, we
                    specialize in
                    <span className="font-semibold">
                      {" "}
                      R&D, bulk production,{" "}
                    </span>
                    and{" "}
                    <span className="font-semibold">
                      high-quality specialty chemicals{" "}
                    </span>
                    for various industries, including:
                  </p>

                  <ul className="list-disc text-gray-700 text-base space-y-2 pl-5">
                    <li>Bulk Drugs</li>
                    <li>Agro-chemicals</li>
                    <li>Dyes & Pigments</li>
                    <li>Polymers & Perfumery Chemicals</li>
                  </ul>
                </div>
              </FadeLeft>

              {/* Image Content */}
              <div className="relative flex justify-center">
                <img
                  src={aboutImage}
                  alt="About Gyan Group"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-10 md:py-12 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center">
              <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 text-3xl md:text-4xl font-semibold mb-6">
                History of Gyan Group
              </h2>

              <p className="text-gray-700 text-base leading-relaxed mb-6 max-w-[49rem] mx-auto">
                <span className="font-semibold">Founded in 2008</span>, Gyan
                started its journey as a
                <span className="font-semibold">
                  {" "}
                  pioneer in Chemical Technology
                </span>{" "}
                in
                <span className="font-semibold"> Vapi, Gujarat, India</span>.
                With continuous growth and innovation, we expanded in{" "}
                <span className="font-semibold">2013</span> with Gyan Healthcare
                and later strengthened our presence in{" "}
                <span className="font-semibold">2017</span> with Reliable Life
                Science in
                <span className="font-semibold"> Sarigam, Gujarat</span>.
              </p>

              <blockquote className="text-xl font-light text-gray-600 italic">
                "We strive to become acknowledged Global Leaders and preferred
                Partners in helping our Clients succeed in the rapidly evolving
                Specialty Chemical markets."
              </blockquote>
            </FadeUp>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-10 md:py-12 lg:py-14 bg-gray-900 text-white relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage:
                "url(http://www.gyangroup.in/assets/ui/image/plx-dark-default.jpg)",
            }}
          ></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeDown className="text-3xl md:text-4xl font-semibold mb-12 text-center">
              Why Choose Us
            </FadeDown>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <FadeUp>
                <div className="flex items-center mb-4">
                  <div className="bg-[#f66419] rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faEye} className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-semibold">Vision</h3>
                </div>

                <p className="text-gray-300">
                  To constantly endeavour to create a sustainable position as
                  one of the leading but diversified chemical companies with a
                  strong manufacturing base in specialty chemicals, aiming for
                  global presence with worldwide product acceptability.
                </p>
              </FadeUp>

              <FadeUp>
                <div className="flex items-center mb-4">
                  <div className="bg-[#f66419] rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faPaperPlane} className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-semibold">Mission</h3>
                </div>

                <p className="text-gray-300">
                  Empowered work environment, Innovation & efficiency, Ethical
                  way of functioning, Honouring commitments, Exceptional quality
                  and service, which add value to the end product.
                </p>
              </FadeUp>
            </div>

            <FadeUp className="mt-12">
              <div className="flex items-center mb-4">
                <div className="bg-[#f66419] rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faGem} className="text-2xl" />
                </div>
                <h3 className="text-2xl font-semibold">Values</h3>
              </div>

              <ul className="space-y-4 text-gray-300">
                <li>
                  <strong>CARE :</strong> Our commitment to care includes care
                  of all our employees, our customers, our suppliers, our
                  community and our environment.
                </li>

                <li>
                  <strong>Integrity :</strong> We always practice the quality of
                  being honest and having strong moral principles.
                </li>

                <li>
                  <strong>Quality :</strong> We always care to achieve quality
                  with consistent supply.
                </li>

                <li>
                  <strong>Trust :</strong> "Trust is built with consistency". We
                  believe in building trust.
                </li>
              </ul>
            </FadeUp>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
