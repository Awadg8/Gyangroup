import { NavLink } from "react-router-dom";
import {
  ChevronRight,
  Phone,
  MapPin,
  Mail,
  // Linkedin,
  // MessageCircle,
  Heart,
  // Building2,
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

// Images Import Here
import ProactiiLogo from "../Assets/Images/proactii-logo.png";
import Logo from "../Assets/Images/logo-light.png";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      {/* Main Footer Content */}
      <div className="py-12 md:pt-14">
        <div className="px-10 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <NavLink to="/" className="block">
                <div className="flex items-center space-x-2 text-white">
                  <img src={Logo} alt="logo" />
                  <span className="text-xl font-bold">Gyan Group</span>
                </div>
              </NavLink>

              <p className="text-gray-400 leading-relaxed">
                Gyan (knowledge) is considered as all powerful / omnipotent, a
                thing one has to strive to achieve not only for wellbeing of all
                mankind but even for emancipation of its soul.
              </p>

              <div className="flex space-x-4 pt-0">
                <a
                  href="https://wa.me/919825886288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors duration-200 flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className=" w-6 h-6 inline-block text-white"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/company/gyangroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className=" w-6 h-6 inline-block text-white"
                  />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">
                Quick Links
              </h3>

              <ul className="space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About Us" },
                  { to: "/weExport", label: "We Export" },
                  { to: "/qualityPolicy", label: "Quality Policy" },
                  { to: "/contactUs", label: "Contact Us" },
                ].map((link) => (
                  <li key={link.label}>
                    <NavLink
                      to={link.to}
                      className="group flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <ChevronRight
                        size={16}
                        className="mr-2 text-blue-500 group-hover:translate-x-1 transition-transform duration-200"
                      />
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">
                Products
              </h3>

              <ul className="space-y-3">
                {[
                  {
                    to: "./products/pharma",
                    label: "Pharma & API Intermediate",
                  },
                  { to: "./products/pigment", label: "Pigment Intermediate" },
                  { to: "./products/dye", label: "Dye Intermediate" },
                ].map((product) => (
                  <li key={product.label}>
                    <NavLink
                      to={product.to}
                      className="group flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <ChevronRight
                        size={16}
                        className="mr-2 text-blue-500 group-hover:translate-x-1 transition-transform duration-200"
                      />
                      {product.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info here*/}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">
                Get In Touch
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin
                    size={20}
                    className="mr-3 text-blue-500 flex-shrink-0 mt-1"
                  />
                  <p className="text-gray-400">
                    Plot No. 5/12, Road No. 7, Opp Fire Station, GIDC, Sarigam -
                    396155, Gujarat, India
                  </p>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="mr-3 text-blue-500" />
                  <span className="text-gray-400">(+91) 982 588 6288</span>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="mr-3 text-blue-500" />
                  <a
                    href="mailto:info@gyangroup.in"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    info@gyangroup.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section Here*/}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-7xl py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              Gyan Group © Copyright All Right Reserved{" "}
              {new Date().getFullYear()}
            </p>

            <div className="flex items-center text-sm text-gray-400">
              <span>Developed with</span>
              <Heart size={16} className="mx-2 text-red-500 fill-current" />
              <span>by</span>
              <a
                href="https://proactii.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center ml-2 hover:text-blue-400 transition-colors duration-200"
              >
                <img
                  src={ProactiiLogo}
                  alt="website-designer-logo"
                  className=" w-5 h-5 mr-2"
                />
                <span className="hover:underline underline-offset-4">
                  Proactii
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
