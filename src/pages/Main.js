import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import Gallery from "../components/Gallery";

import {
  FadeUp,
  FadeLeft,
  FadeRight,
  ScaleIn,
} from "../components/Animation.tsx";

// AOS Animation Link
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

import {
  ChevronRight,
  ArrowRight,
  Building2,
  FlaskRound as Flask,
  Microscope,
  Beaker,
  CheckCircle2,
} from "lucide-react";

import PharmaImg from "../Assets/Images/pharma.jpg";
import PigmentImg from "../Assets/Images/pigment.jpg";
import DyeImg from "../Assets/Images/dye.jpg";
import AboutImg1 from "../Assets/Images/aboutimg1.jpg";

interface Feature {
  image: string;
  title: string;
  link: string;
}

const features: Feature[] = [
  {
    image: PharmaImg,
    title: "PHARMA & API INTERMEDIATE",
    link: "/products/pharma",
  },
  {
    image: PigmentImg,
    title: "PIGMENT INTERMEDIATE",
    link: "/products/pigment",
  },
  {
    image: DyeImg,
    title: "DYE INTERMEDIATE",
    link: "/products/dye",
  },
];

interface CustomSynthesisPoint {
  icon: JSX.Element;
  text: string;
}

const customSynthesisPoints: CustomSynthesisPoint[] = [
  {
    icon: <Building2 className="h-5 w-5" />,
    text: "A vast experience in custom synthesis since 2003.",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    text: "A partner who ensure that your requirements are met.",
  },
  {
    icon: <Flask className="h-5 w-5" />,
    text: "A dedicated attentive and responsive team working.",
  },
  {
    icon: <Microscope className="h-5 w-5" />,
    text: "A wide range of innovative and not available molecules with high performance.",
  },
  {
    icon: <Beaker className="h-5 w-5" />,
    text: "A constant supply of exclusive chemicals coming from our collaboration.",
  },
];

function Main() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with settings
  }, []);

  const handleAfterChange = (current) => {
    setActiveSlide(current); // Set the current slide as active
  };

  // Slider animation here
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: handleAfterChange,
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false, // Hide arrows
          dots: true, // Show dots
        },
      },
    ],
  };

  // Slider next btn
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} btn`}
        style={{
          ...style,
          right: "25px",
          top: "55%",
        }}
        onClick={onClick}
      />
    );
  }

  // Slider previous btn
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} btn`}
        style={{
          ...style,
          left: "25px",
          zIndex: "10",
          top: "55%",
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <main className="flex-grow overflow-hidden">
      <div className="">
        {/* Slider code */}
        <Slider className="homepage-slides" {...settings}>
          {/* Slide 1 */}
          <div className="single-slide-item hero-area-bg-1">
            <div className="hero-area-content">
              <div className="container mx-auto px-4">
                <div
                  className={`mx-4 ${
                    activeSlide === 0
                      ? "opacity-100 animate__animated animate__fadeInUp animate__delay-0s"
                      : "opacity-0"
                  }`}
                >
                  <div className="section-title mb-5">
                    <h2
                      className={`text-[#2a2e34] text-[1.75rem] sm:text-2xl md:text-4xl font-semibold leading-[1.25] mb-5 ${
                        activeSlide === 0
                          ? "animate__animated animate__fadeInUp animate__delay-0s"
                          : ""
                      }`}
                    >
                      Gaining knowledge, <br />
                      <strong className=" text-[#4a7dbc] font-bold">
                        is the first step
                      </strong>
                      <br /> to wisdom.
                    </h2>

                    <p
                      className={`text-xs md:text-[15px] lg:text-lg text-[#2a2e34] mb-5 w-2/3 ${
                        activeSlide === 0
                          ? "animate__animated animate__fadeInUp animate__delay-0s"
                          : ""
                      }`}
                    >
                      A thing one has to strive to achieve not only for
                      wellbeing of all mankind but even for emancipation of its
                      soul.
                    </p>
                  </div>

                  <NavLink
                    to="/products/pharma"
                    className={`inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors ${
                      activeSlide === 0
                        ? "animate__animated animate__fadeInUp animate__delay-1s"
                        : ""
                    }`}
                  >
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="single-slide-item hero-area-bg-2">
            <div className="hero-area-content">
              <div className="container mx-auto px-4">
                <div
                  className={`mx-4 ${
                    activeSlide === 1
                      ? "opacity-100 animate__animated animate__fadeInUp animate__delay-0s"
                      : "opacity-0"
                  }`}
                >
                  <div className="section-title mb-5">
                    <h2
                      className={`text-white text-[1.75rem] sm:text-2xl md:text-4xl font-semibold leading-[1.25] mb-5 ${
                        activeSlide === 1
                          ? "animate__animated animate__fadeInUp animate__delay-0s"
                          : ""
                      }`}
                    >
                      Intermediate <br />
                      <strong className=" text-[#4a7dbc] font-bold">
                        Manufacturing
                      </strong>
                    </h2>

                    <p
                      className={`text-xs md:text-[15px] lg:text-lg text-white mb-5 ${
                        activeSlide === 1
                          ? "animate__animated animate__fadeInUp animate__delay-0s"
                          : ""
                      }`}
                    >
                      Pharma, API, Pigment, Dyes, Perfumery, Agro
                    </p>
                  </div>

                  <NavLink
                    to="/products/pharma"
                    className={`inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors ${
                      activeSlide === 1
                        ? "animate__animated animate__fadeInUp animate__delay-1s"
                        : ""
                    }`}
                  >
                    View Products <ArrowRight className="ml-2 h-5 w-5" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="single-slide-item hero-area-bg-3">
            <div className="hero-area-content">
              <div className="container mx-auto px-4">
                <div
                  className={`mx-4 ${
                    activeSlide === 2
                      ? "opacity-100 animate__animated animate__fadeInUp animate__delay-0s"
                      : "opacity-0"
                  }`}
                >
                  <div className="section-title mb-5">
                    <h2
                      className={`text-white text-[1.75rem] sm:text-2xl md:text-4xl font-semibold leading-[1.25] mb-5 ${
                        activeSlide === 2
                          ? "animate__animated animate__fadeInUp animate__delay-0s"
                          : ""
                      }`}
                    >
                      Sharing it, <br />
                      <strong className=" text-[#4a7dbc] font-bold">
                        is the first step
                      </strong>
                      <br /> to humanity.
                    </h2>

                    <p
                      className={`text-xs md:text-[15px] lg:text-lg text-white mb-5 w-2/3 ${
                        activeSlide === 2
                          ? "animate__animated animate__fadeInUp animate__delay-0s"
                          : ""
                      }`}
                    >
                      Gyan started its journey to become a little giant in the
                      field of Chemical Technology by inception of Gyan
                      Technologyin 2008.
                    </p>
                  </div>

                  <NavLink
                    to="/products/pharma"
                    className={`inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors ${
                      activeSlide === 2
                        ? "animate__animated animate__fadeInUp animate__delay-1s"
                        : ""
                    }`}
                  >
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </Slider>

        {/* Features Section */}
        <section className="pt-20 pb-12 md:pb-14 lg:pb-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FadeUp key={feature.title} delay={index * 0.1}>
                  <NavLink
                    to={feature.link}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-xl">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-lg font-semibold text-white">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                  </NavLink>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-14 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeLeft>
                <div className="space-y-6">
                  <span className="text-sm font-semibold tracking-[4px] text-blue-600 uppercase">
                    About Gyan Group
                  </span>
                  <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 text-[26px] md:text-3xl lg:text-[32px] font-semibold">
                    Gaining knowledge, is the first step to wisdom. Sharing it,
                    is the first step to humanity.
                  </h2>
                  <p className="text-base text-gray-600">
                    <span className="font-semibold"> Gyan (knowledge)</span> is
                    considered as all{" "}
                    <span className="font-semibold">
                      {" "}
                      powerful / omnipotent
                    </span>
                    , a thing one has to strive to achieve not only for
                    wellbeing of all{" "}
                    <span className="font-semibold"> mankind</span> but even for
                    emancipation of its{" "}
                    <span className="font-semibold"> soul</span>.
                  </p>
                  <p className="text-base text-gray-600">
                    <span className="font-semibold"> Gyan </span> is dedicated
                    to <span className="font-semibold"> Green Chemistry </span>{" "}
                    with facilities and technical know how available from
                    <span className="font-semibold">
                      {" "}
                      Research & Development{" "}
                    </span>{" "}
                    work to bulk production of Speciality Chemicals for Bulk
                    Drugs, Agro-chemicals, Dyes & Pigments, Polymers, perfumery
                    chemicals.
                  </p>
                </div>
              </FadeLeft>

              <div className="relative flex justify-center">
                <img
                  src={AboutImg1}
                  alt="About Gyan Group"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/10 rounded-full -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600/10 rounded-full -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-12 md:py-14 lg:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative flex justify-center">
                <img
                  src="https://www.gyangroup.in/assets/ui/image/photo-sm-oil-b.jpg"
                  alt="Our History"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-600/10 rounded-full -z-10" />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full -z-10" />
              </div>

              <FadeRight>
                <div className="space-y-6">
                  <h2 className="text-[26px] md:text-3xl lg:text-[32px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Our History
                  </h2>
                  <p className="text-base text-gray-600">
                    <span className="font-semibold"> Gyan </span> started its
                    journey to become a{" "}
                    <span className="font-semibold"> little giant </span> in the
                    field of Chemical Technology by inception of{" "}
                    <span className="font-semibold"> Gyan Technology </span>
                    in <span className="font-semibold"> 2008 </span> in a
                    Chemical Industrial township of{" "}
                    <span className="font-semibold"> Vapi, Gujarat, India</span>
                    . Expanding its scale of production, in{" "}
                    <span className="font-semibold"> 2013 Gyan </span> came up
                    with
                    <span className="font-semibold">
                      {" "}
                      Gyan Healthcare{" "}
                    </span>{" "}
                    state-of-the-art bulk production facility at
                    <span className="font-semibold">
                      {" "}
                      Junagadh, Gujarat, India{" "}
                    </span>{" "}
                    and further consolidated its manufacturing facility by
                    adding up another production facility at{" "}
                    <span className="font-semibold">
                      {" "}
                      Sarigam, Gujarat, India{" "}
                    </span>{" "}
                    namely Reliable life Science in
                    <span className="font-semibold"> 2017</span>.
                  </p>
                  <blockquote className="text-xl italic text-gray-600 border-l-4 border-blue-500 pl-4 font-light">
                    " We strive to become acknowledged Global Leaders and
                    preferred Partners in helping our Clients succeed in the
                    rapidly evolving Pharmaceutical markets."
                  </blockquote>
                  <NavLink
                    to="/about"
                    className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Read More <ChevronRight className="ml-2 h-5 w-5" />
                  </NavLink>
                </div>
              </FadeRight>
            </div>
          </div>
        </section>

        {/* Custom Synthesis Section */}
        <section className=" py-12 md:py-14 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeLeft>
                <div className="space-y-6">
                  <h2 className="text-[26px] md:text-3xl lg:text-[32px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Custom Synthesis
                  </h2>
                  <p className="text-base text-gray-600">
                    <span className="font-semibold"> Custom synthesis </span> is
                    the process where a{" "}
                    <span className="font-semibold"> molecule </span> is made
                    exclusively for a particular client according to
                    <span className="font-semibold"> specifications </span> at
                    their scale. As a reminder, in the chemistry world the
                    synthesis of{" "}
                    <span className="font-semibold"> chemicals </span> is set up
                    on a single or several chemical reactions process which{" "}
                    <span className="font-semibold"> targets </span>
                    the development of a{" "}
                    <span className="font-semibold">
                      {" "}
                      complex chemical{" "}
                    </span>{" "}
                    from reactants or other substances.
                  </p>
                  <p className="text-base text-gray-600">
                    We are involved in numerous{" "}
                    <span className="font-semibold"> industrial projects </span>{" "}
                    and collaborative partnerships, and we are attached to
                    <span className="font-semibold"> continuously </span> expand
                    our internal{" "}
                    <span className="font-semibold"> R&D programs </span> to
                    maintain a high level of competence and innovation in many
                    fields of
                    <span className="font-semibold"> organic chemistry</span>.
                  </p>
                </div>
              </FadeLeft>

              <div className="relative flex justify-center">
                <img
                  src="https://gyangroup.in/assets/ui/image/lab-img.jpg"
                  alt="Custom Synthesis"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/10 rounded-full -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600/10 rounded-full -z-10" />
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                You must work with us if you are looking for :
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {customSynthesisPoints.map((point, index) => (
                  <ScaleIn key={index} delay={index * 0.1}>
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                          {point.icon}
                        </div>
                        <p className="text-gray-600">{point.text}</p>
                      </div>
                    </div>
                  </ScaleIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries Images Section */}
        <section className="pt-12 md:pt-14 lg:pt-16 pb-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Gallery Starts Here */}

            <Gallery />

            {/* Gallery Ends Here */}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
