import { MapPin, Building2 } from "lucide-react";

import { FadeDown, FadeLeft, FadeRight } from "../components/Animation.js";

import BreadCrumb from "../components/BreadCrumb";

import CompanyImg from "../Assets/Images/aboutimg1.jpg";
import CompanyImg2 from "../Assets/Images/group-of-company2.jpg";
import CompanyImg4 from "../Assets/Images/group-of-company4.jpg";
import Banner from "../Assets/Images/banner-1.jpg";

interface CompanyInfo {
  name: string;
  shortName: string;
  address: string;
  image: string;
  description: string;
}

const companies: CompanyInfo[] = [
  {
    name: "Gyan Health Care",
    shortName: "GHC",
    description:
      "Leading healthcare solutions provider specializing in pharmaceutical research and development.",
    address:
      "Survey No 146 D, Off NH 8D, Chowki (Sorath), Junagadh - 362315, Gujarat, INDIA",
    image: CompanyImg,
  },
  {
    name: "Gyan Technology",
    shortName: "GT",
    description:
      "Innovative technology solutions for the pharmaceutical and chemical industries.",
    address: "Plot No 13, J Nanji Industrial Park, Chhiri, Vapi 396191, INDIA",
    image: CompanyImg2,
  },
  {
    name: "Reliable Life Science",
    shortName: "RLS",
    description:
      "Specialized in life science research and development of cutting-edge pharmaceutical products.",
    address:
      "Plot No 05/12, Road No 7, Opp. Fire Station, Sarigam, 396155, Gujarat, INDIA",
    image: CompanyImg,
  },
  {
    name: "Venus Lab",
    shortName: "VNL",
    description:
      "State-of-the-art laboratory facilities for pharmaceutical testing and research.",
    address:
      "206, Nikisha Ind Estate Pandurang Wadi, Mira Road Mumbai 400107, INDIA",
    image: CompanyImg4,
  },
];

function GroupOfCompanies() {
  return (
    <div>
      <BreadCrumb
        title="Group of Companies"
        currentPage="Group of Companies"
        backgroundImage={Banner}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 lg:py-14">
          <div className="text-center mb-8 md:mb-16">
            <FadeDown>
              <h1 className="text-4xl md:text-[42px] lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 mb-4">
                Our Group of Companies
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A synergy of innovation, expertise, and excellence across
                healthcare, technology, and life sciences
              </p>
            </FadeDown>
          </div>

          <div className="space-y-12">
            {companies.map((company, index) => (
              <CompanyCard key={company.name} company={company} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanyCard({
  company,
  index,
}: {
  company: CompanyInfo,
  index: number,
}) {
  const isEven = index % 2 === 0;

  return (
    <div>
      {isEven ? (
        <FadeLeft className="group">
          <div
            className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 md:flex`}
          >
            <div className="  md:w-2/5 relative overflow-hidden">
              <img
                className="h-64 w-full object-cover md:h-full transform group-hover:scale-105 transition-transform duration-500"
                src={company.image}
                alt={company.name}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              <div className="absolute bottom-4 left-4 text-white">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600/80">
                  {company.shortName}
                </span>
              </div>
            </div>

            <div className="p-7 md:w-3/5 lg:p-12">
              <div className="flex items-center mb-4">
                <Building2 className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {company.name}
                </h2>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {company.description}
              </p>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-600">{company.address}</p>
              </div>
            </div>
          </div>
        </FadeLeft>
      ) : (
        <FadeRight className="group">
          <div
            className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 md:flex md:flex-row-reverse`}
          >
            <div className="md:w-2/5 relative overflow-hidden">
              <img
                className="h-64 w-full object-cover md:h-full transform group-hover:scale-105 transition-transform duration-500"
                src={company.image}
                alt={company.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600/80">
                  {company.shortName}
                </span>
              </div>
            </div>

            <div className="p-7 md:w-3/5 lg:p-12">
              <div className="flex items-center mb-4">
                <Building2 className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {company.name}
                </h2>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {company.description}
              </p>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-[2px]" />
                <p className="text-gray-600">{company.address}</p>
              </div>
            </div>
          </div>
        </FadeRight>
      )}
    </div>
  );
}

export default GroupOfCompanies;
