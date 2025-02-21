import React from "react";

import {
  Building2,
  Calendar,
  Award,
  TrendingUp,
  Quote,
  MapPin,
} from "lucide-react";

import {
  FadeUp,
  FadeDown,
  FadeLeft,
  FadeRight,
} from "../components/Animation.js";

import BreadCrumb from "../components/BreadCrumb";
import Banner from "../Assets/Images/banner-2.jpg";

interface Milestone {
  year: string;
  title: string;
  location: string;
  description?: string;
}

const milestones: Milestone[] = [
  {
    year: "2008",
    title: "Gyan Technology (GT)",
    location:
      "Plot No 13, J Nanji Industrial Park, Chhiri, Vapi - 396191, Gujarat, INDIA",
    description: "Inception of our journey in Chemical Technology",
  },
  {
    year: "2013",
    title: "Gyan Health Care (GHC)",
    location:
      "Survey No 146 D, Off NH 8 D, Chowki (Sorath), Junagadh - 362315, Gujarat, INDIA",
    description: "Expansion with state-of-the-art bulk production facility",
  },
  {
    year: "2017",
    title: "Reliable Life Science (RLS)",
    location:
      "Plot No 05/12, Road No 7, Opp. Fire Station, Sarigam - 396155, Gujarat, INDIA",
    description: "Further consolidation of manufacturing capabilities",
  },
];

function Achievements() {
  return (
    <div>
      <BreadCrumb
        title="Achievements & Milestones"
        currentPage="Achievements"
        backgroundImage={Banner}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 md:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <FadeDown className="text-center mb-4 md:mb-2">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-10 w-10 text-blue-600 mr-3 hidden sm:block" />
              <h1 className="text-4xl md:text-[42px] lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Achievements & Milestones
              </h1>
            </div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our journey of growth and excellence in Chemical Technology
            </p>
          </FadeDown>

          {/* Introduction Section */}
          <FadeUp>
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 mb-16">
              <div className="max-w-4xl mx-auto">
                <p
                  align="justify"
                  className="text-gray-600 leading-relaxed mb-8"
                >
                  <span className="font-semibold"> Gyan </span> started its
                  journey to become a{" "}
                  <span className="font-semibold"> little giant</span> in the
                  field of Chemical Technology by inception of{" "}
                  <span className="font-semibold"> Gyan Technology</span> in{" "}
                  <span className="font-semibold"> 2008</span> in a Chemical
                  Industrial township of{" "}
                  <span className="font-semibold"> Vapi, Gujarat, India</span>.
                  Expanding its scale of production, in{" "}
                  <span className="font-semibold"> 2013</span> Gyan came up with
                  <span className="font-semibold"> Gyan Healthcare</span>{" "}
                  state-of-the-art bulk production facility at{" "}
                  <span className="font-semibold">
                    {" "}
                    Junagadh, Gujarat, India
                  </span>{" "}
                  and further consolidated its manufacturing facility by adding
                  up another production facility at{" "}
                  <span className="font-semibold">
                    {" "}
                    Sarigam, Gujarat, India{" "}
                  </span>{" "}
                  namely{" "}
                  <span className="font-semibold">
                    {" "}
                    Reliable life Science
                  </span>{" "}
                  in <span className="font-semibold"> 2017</span>.
                </p>
                <div className="flex items-start border-l-4 border-blue-600 pl-6 py-2">
                  <Quote className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0" />
                  <p className="text-lg font-medium text-gray-800 italic">
                    "Gyan group is constantly looking for growth and achieve new
                    milestones by forward and backward integration."
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Timeline Section */}
          <div className="relative pl-7 md:pl-0">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-blue-800" />

            {/* Timeline Items */}
            <div className=" space-y-10 md:space-y-12">
              {milestones.map((milestone, index) => (
                <TimelineItem
                  key={milestone.year}
                  milestone={milestone}
                  index={index}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>

          {/* Future Vision */}
          <FadeUp className="mt-24 text-center">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-100 mb-6">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Looking to the Future
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We continue to innovate and expand, setting new benchmarks in the
              chemical and pharmaceutical industry.
            </p>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({
  milestone,
  index,
  isLeft,
}: {
  milestone: Milestone,
  index: number,
  isLeft: boolean,
}) {
  return (
    <div>
      {isLeft ? (
        <FadeLeft className={`relative flex items-center md:flex-row`}>
          {/* Year Bubble */}
          <div className="absolute left-[-20px] md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg" />

          {/* Content */}
          <div
            className={`w-full md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-2xl font-bold text-blue-600">
                  {milestone.year}
                </span>
              </div>

              <div className="flex items-center mb-3">
                <Building2 className="h-5 w-5 text-gray-500 mr-2" />
                <h3 className=" text-lg md:text-xl font-semibold text-gray-900">
                  {milestone.title}
                </h3>
              </div>

              {milestone.description && (
                <p className="text-gray-600 mb-4">{milestone.description}</p>
              )}

              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-500">{milestone.location}</p>
              </div>
            </div>
          </div>
        </FadeLeft>
      ) : (
        <FadeRight className={`relative flex items-center md:flex-row-reverse`}>
          {/* Year Bubble */}
          <div className="absolute left-[-20px] md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg" />

          {/* Content */}
          <div
            className={`w-full md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-2xl font-bold text-blue-600">
                  {milestone.year}
                </span>
              </div>

              <div className="flex items-center mb-3">
                <Building2 className="h-5 w-5 text-gray-500 mr-2" />
                <h3 className=" text-lg md:text-xl font-semibold text-gray-900">
                  {milestone.title}
                </h3>
              </div>

              {milestone.description && (
                <p className="text-gray-600 mb-4">{milestone.description}</p>
              )}

              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-500">{milestone.location}</p>
              </div>
            </div>
          </div>
        </FadeRight>
      )}
    </div>
  );
}

export default Achievements;
