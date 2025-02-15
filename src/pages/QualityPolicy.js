import {
  CheckCircle2,
  Shield,
  Truck,
  FileCheck,
  Lock,
  Users,
  Quote,
} from "lucide-react";

import {
  FadeUp,
  FadeDown,
  FadeLeft,
  FadeRight,
  ScaleIn,
} from "../components/Animation.js";

import BreadCrumb from "../components/BreadCrumb";
import Banner from "../Assets/Images/banner-7.avif";

interface PolicyPoint {
  icon: JSX.Element;
  text: string;
}

const policyPoints: PolicyPoint[] = [
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    text: "In order to achieve the goals of our Quality Policy, quality-related objectives will be set for each department, and the state of their implementation will be monitored.",
  },
  {
    icon: <Truck className="h-5 w-5" />,
    text: "Deliver our products on time and consistently invent optimal distribution routes to minimize costs and shipment time.",
  },
  {
    icon: <FileCheck className="h-5 w-5" />,
    text: "Operations are conducted in compliance with applicable regulations and standards.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    text: "Ensure uncompromised quality throughout processing.",
  },
  {
    icon: <Lock className="h-5 w-5" />,
    text: "Preserve the intellectual property rights of our clients, and practice confidentiality in the intermediate discovery and development of processes.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    text: "Our employees will be familiar with every aspect of our Quality Policy, and will promote the creation of a level of quality that can satisfy our customers.",
  },
];

function QualityPolicy() {
  return (
    <div>
      <BreadCrumb
        title="Quality Policy"
        currentPage="Quality Policy"
        backgroundImage={Banner}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 md:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-12">
            <FadeDown>
              <h1 className="text-4xl md:text-[42px] lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 mb-6">
                Quality Policy
              </h1>
            </FadeDown>

            <FadeUp className="max-w-3xl mx-auto space-y-4">
              <p className=" text-base md:text-lg text-gray-600 leading-relaxed">
                We strive for continuous{" "}
                <span className="font-semibold"> improvements</span> to meet or
                exceed the expectations of our{" "}
                <span className="font-semibold"> customers </span>in respect of{" "}
                <span className="font-semibold"> quality</span>, delivery of
                products and completion of{" "}
                <span className="font-semibold"> projects</span> on schedule.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We empower our <span className="font-semibold"> employees</span>{" "}
                and maintain an environment that enables individuals to achieve
                functional excellence, continuous{" "}
                <span className="font-semibold"> improvement</span>, teamwork
                and <span className="font-semibold"> innovation</span>. We shall
                achieve this through the following initiatives:
              </p>
            </FadeUp>
          </div>

          {/* Policy Points Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12 md:mb-16">
            {policyPoints.map((point, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 py-6 md:p-6 h-full border">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 ml-2">
                      {point.icon}
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Vision Statement */}
          <ScaleIn>
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white text-center">
              <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-6">
                  <Quote className="h-12 w-12 opacity-50" />
                </div>
                <p className=" text-lg md:text-2xl font-medium mb-6 italic">
                  "Where Innovation, Technology & Quality Drive Responsible
                  Chemistry"
                </p>
                <div className="hidden md:flex flex-wrap items-center justify-center gap-2 text-xl font-bold text-blue-100">
                  <FadeLeft delay={0.2}>
                    <span className="flex items-center mr-4">
                      <Shield className="h-5 w-5 mr-2" />
                      TRUST
                    </span>
                  </FadeLeft>

                  <FadeUp delay={0.3}>
                    <span className="flex items-center mr-4">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      INNOVATION
                    </span>
                  </FadeUp>

                  <FadeRight delay={0.2}>
                    <span className="flex items-center">
                      <Lock className="h-5 w-5 mr-2" />
                      SAFETY
                    </span>
                  </FadeRight>
                </div>

                <div className="flex md:hidden flex-wrap items-center justify-center gap-2 text-xl font-bold text-blue-100">
                  <div className=" flex ">
                    <FadeLeft delay={0.2}>
                      <span className="flex items-center mr-4">
                        <Shield className="h-5 w-5 mr-2" />
                        TRUST
                      </span>
                    </FadeLeft>

                    <FadeRight delay={0.2}>
                      <span className="flex items-center">
                        <Lock className="h-5 w-5 mr-2" />
                        SAFETY
                      </span>
                    </FadeRight>
                  </div>

                  <FadeUp delay={0.3}>
                    <span className="flex items-center mr-4">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      INNOVATION
                    </span>
                  </FadeUp>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </div>
  );
}

export default QualityPolicy;
