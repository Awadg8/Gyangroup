// import React from "react";
// import { NavLink } from "react-router-dom";

// // FontAwesome Icons
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronRight,
//   faPhone,
//   faLocationDot,
//   faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

// // Images Import Here
// import ProactiiLogo from "../Assets/Images/proactii-logo.png";
// import Logo from "../Assets/Images/logo-light.png";

// function Footer() {
//   return (
//     // Footer Section Starts Here
//     <footer className="bg-[#232323] text-white">
//       <div className="pt-16 md:pt-24 pb-16 text-sm">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-center flex-col lg:flex-row">
//             <div className=" w-full flex flex-col md:flex-row">
//               <div className=" w-full md:w-1/2 px-5 mb-10 lg:mb-0 lg:w-[60%] lg:px-3">
//                 <p className="pb-4">
//                   <NavLink to="/">
//                     <img src={Logo} alt="Logo-img" />
//                   </NavLink>
//                 </p>

//                 <p>
//                   Gyan (knowledge) is considered as all powerful / omnipotent, a
//                   thing one has to strive to achieve not only for wellbeing of
//                   all mankind but even for emancipation of its soul.
//                 </p>
//               </div>

//               <div className=" w-full md:w-1/2 px-5 mb-10 lg:mb-0 lg:w-[40%] lg:px-3 lg:pl-8">
//                 <h5 className=" text-[#1e7dd8] mb-3 font-bold text-base">
//                   Quick Links
//                 </h5>

//                 <div className="wgs-content">
//                   <ul className="menu">
//                     <li className="pb-2">
//                       <FontAwesomeIcon
//                         icon={faChevronRight}
//                         className=" text-[#1e7dd8] mr-2"
//                       />
//                       <NavLink to="/">Home</NavLink>
//                     </li>

//                     <li className="pb-2">
//                       <FontAwesomeIcon
//                         icon={faChevronRight}
//                         className=" text-[#1e7dd8] mr-2"
//                       />
//                       <NavLink to="/about">About Us</NavLink>
//                     </li>

//                     {/* <!--<li>
// 									      <a href="http://www.gyangroup.in/">
// 										      Facilities
// 									      </a>
// 								      </li>-->
//                   */}

//                     <li className="pb-2">
//                       <FontAwesomeIcon
//                         icon={faChevronRight}
//                         className=" text-[#1e7dd8] mr-2"
//                       />
//                       <NavLink to="/weExport">We Export</NavLink>
//                     </li>

//                     <li className="pb-2">
//                       <FontAwesomeIcon
//                         icon={faChevronRight}
//                         className=" text-[#1e7dd8] mr-2"
//                       />
//                       <NavLink to="/qualityPolicy">Quality Policy</NavLink>
//                     </li>

//                     <li className="pb-2">
//                       <FontAwesomeIcon
//                         icon={faChevronRight}
//                         className=" text-[#1e7dd8] mr-2"
//                       />
//                       <NavLink to="/contactUs">Contact Us</NavLink>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className=" w-full flex flex-col md:flex-row ">
//               <div className=" w-full mb-10 md:mb-0 md:w-1/2 px-5 lg:px-3">
//                 <h5 className=" text-[#1e7dd8] mb-3 font-bold text-base">
//                   Products
//                 </h5>

//                 <div className="wgs-content">
//                   <ul className="menu">
//                     {/* <!--<li>
// 									      <a href="#">
// 										    All Products
// 									    </a>
// 								        </li>--> */}

//                     <li className="pb-2">
//                       <FontAwesomeIcon
//                         icon={faChevronRight}
//                         className=" text-[#1e7dd8] mr-2"
//                       />

//                       <NavLink to="./products/pharma">
//                         PHARMA &amp; API INTERMEDIATE
//                       </NavLink>
//                     </li>

//                     <li className="pb-2">
//                       <FontAwesomeIcon
//                         icon={faChevronRight}
//                         className=" text-[#1e7dd8] mr-2"
//                       />

//                       <NavLink to="./products/pigment">
//                         PIGMENT INTERMEDIATE
//                       </NavLink>
//                     </li>

//                     <li className="pb-2">
//                       <FontAwesomeIcon
//                         icon={faChevronRight}
//                         className=" text-[#1e7dd8] mr-2"
//                       />

//                       <NavLink to="./products/dye">DYE INTERMEDIATE</NavLink>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               <div className=" w-full md:w-1/2 px-5 lg:px-3">
//                 <div className="wgs wgs-footer">
//                   <h5 className=" text-[#1e7dd8] mb-3 font-bold text-base">
//                     Get In Touch
//                   </h5>

//                   <div className="wgs-content">
//                     <div className="pb-2 flex">
//                       <span>
//                         <FontAwesomeIcon
//                           icon={faLocationDot}
//                           className="text-[#1e7dd8] mr-2"
//                         />
//                       </span>

//                       <p>
//                         Plot No 5/12, Road No 7,
//                         Opp Fire Station, GIDC,
//                         Sarigam - 396155, Gujarat India
//                       </p>
//                     </div>

//                     <p className="ml-[-3px] pb-2">
//                       <FontAwesomeIcon
//                         icon={faPhone}
//                         className=" text-[#1e7dd8] mr-2"
//                       />
//                       <span>(+91) 982 588 6288</span>
//                     </p>

//                     <p className="ml-[-3px]">
//                       <FontAwesomeIcon
//                         icon={faEnvelope}
//                         className=" text-[#1e7dd8] mr-2"
//                       />
//                       <a href="/" className="cursor-pointer">
//                         info@gyangroup.in
//                       </a>
//                     </p>

//                     <ul className="social flex mt-5 ml-5">
//                       <li className="mr-3">
//                         <a
//                           href="https://wa.me/919825886288"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="w-12 h-12 flex justify-center items-center relative bg-[#eee] rounded-full"
//                         >
//                           <FontAwesomeIcon
//                             icon={faWhatsapp}
//                             className=" w-6 h-6 inline-block text-black"
//                           />
//                         </a>
//                       </li>

//                       <li>
//                         <a
//                           href="https://www.linkedin.com/company/gyangroup"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="w-12 h-12 flex justify-center items-center relative bg-[#eee] rounded-full"
//                         >
//                           <FontAwesomeIcon
//                             icon={faLinkedinIn}
//                             className=" w-6 h-6 inline-block text-black"
//                           />
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="copyright-wrapper bg-[#0c0c0c] px-4 py-8 md:p-8">
//         <div className=" flex flex-col justify-center md:flex-row md:justify-between text-sm container">
//           <div className="flex justify-center items-center mb-2 md:mb-0">
//             Gyan Group © Copyright All Right Reserved 2022
//           </div>

//           <div className="flex justify-center items-center">
//             Developed with
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 512 512"
//               width="18"
//               height="18"
//               className="fill-red-700 align-middle ml-2"
//             >
//               <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
//             </svg>
//             &nbsp; By &nbsp;
//             <a
//               href="https://proactii.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={ProactiiLogo} alt="Proactii Logo" width="20" />
//             </a>
//             <a
//               className=" ml-2 hover:underline hover:underline-offset-4 hover:text-[#1e7dd8] transition-all"
//               href="https://proactii.com/"
//             >
//               Proactii
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>

//     // Footer Section Ends Here
//   );
// }

// export default Footer;

//v0 ai
// import type React from "react";
// import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronRight,
//   faPhone,
//   faLocationDot,
//   faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
// import Logo from "../Assets/Images/logo-light.png";
// import ProactiiLogo from "../Assets/Images/proactii-logo.png";

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="space-y-6">
//             <NavLink to="/" className="inline-block">
//               <img
//                 src={Logo || "/placeholder.svg"}
//                 alt="Gyan Group Logo"
//                 className="h-12"
//               />
//             </NavLink>
//             <p className="text-sm leading-relaxed">
//               Gyan (knowledge) is considered as all powerful / omnipotent, a
//               thing one has to strive to achieve not only for wellbeing of all
//               mankind but even for emancipation of its soul.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h5 className="text-lg font-semibold text-white mb-4">
//               Quick Links
//             </h5>
//             <ul className="space-y-2">
//               {[
//                 "Home",
//                 "About Us",
//                 "We Export",
//                 "Quality Policy",
//                 "Contact Us",
//               ].map((item) => (
//                 <li key={item}>
//                   <NavLink
//                     to={`/${item.toLowerCase().replace(" ", "-")}`}
//                     className="text-sm hover:text-blue-400 transition-colors duration-200 flex items-center"
//                   >
//                     <FontAwesomeIcon
//                       icon={faChevronRight}
//                       className="text-blue-400 mr-2 text-xs"
//                     />
//                     {item}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Products */}
//           <div>
//             <h5 className="text-lg font-semibold text-white mb-4">Products</h5>
//             <ul className="space-y-2">
//               {[
//                 "PHARMA & API INTERMEDIATE",
//                 "PIGMENT INTERMEDIATE",
//                 "DYE INTERMEDIATE",
//               ].map((item) => (
//                 <li key={item}>
//                   <NavLink
//                     to={`/products/${item
//                       .toLowerCase()
//                       .replace(/ & /g, "-")
//                       .replace(/ /g, "-")}`}
//                     className="text-sm hover:text-blue-400 transition-colors duration-200 flex items-center"
//                   >
//                     <FontAwesomeIcon
//                       icon={faChevronRight}
//                       className="text-blue-400 mr-2 text-xs"
//                     />
//                     {item}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h5 className="text-lg font-semibold text-white mb-4">
//               Get In Touch
//             </h5>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <FontAwesomeIcon
//                   icon={faLocationDot}
//                   className="text-blue-400 mt-1 mr-3"
//                 />
//                 <span className="text-sm">
//                   Plot No 5/12, Road No 7, Opp Fire Station, GIDC, Sarigam -
//                   396155, Gujarat India
//                 </span>
//               </li>
//               <li className="flex items-center">
//                 <FontAwesomeIcon
//                   icon={faPhone}
//                   className="text-blue-400 mr-3"
//                 />
//                 <span className="text-sm">(+91) 982 588 6288</span>
//               </li>

//               <li className="flex items-center">
//                 <FontAwesomeIcon
//                   icon={faEnvelope}
//                   className="text-blue-400 mr-3"
//                 />
//                 <a
//                   href="mailto:info@gyangroup.in"
//                   className="text-sm hover:text-blue-400 transition-colors duration-200"
//                 >
//                   info@gyangroup.in
//                 </a>
//               </li>
//             </ul>
//             <div className="mt-6 flex space-x-4">
//               <a
//                 href="https://wa.me/919825886288"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-gray-700 p-3 flex items-center rounded-full hover:bg-blue-500 transition-colors duration-200"
//               >
//                 <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
//               </a>
//               <a
//                 href="https://www.linkedin.com/company/gyangroup"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-gray-700 p-3 flex items-center rounded-full hover:bg-blue-500 transition-colors duration-200"
//               >
//                 <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="bg-gray-950 py-6">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm">
//           <p className="mb-4 md:mb-0">
//             Gyan Group © {new Date().getFullYear()} All Rights Reserved
//           </p>
//           <div className="flex items-center">
//             <span>Developed with</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 512 512"
//               className="w-4 h-4 mx-2 text-red-500"
//             >
//               <path
//                 fill="currentColor"
//                 d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
//               />
//             </svg>
//             <span>by</span>
//             <a
//               href="https://proactii.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center ml-2 hover:text-blue-400 transition-colors duration-200"
//             >
//               <img
//                 src={ProactiiLogo || "/placeholder.svg"}
//                 alt="Proactii Logo"
//                 className="w-5 h-5 mr-1"
//               />
//               Proactii
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

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

// // Images Import Here
import ProactiiLogo from "../Assets/Images/proactii-logo.png";
import Logo from "../Assets/Images/logo-light.png";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      {/* Main Footer Content */}
      <div className="pt-16 md:pt-24 pb-16">
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

            {/* Contact Info */}
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

      {/* Copyright Section */}
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

// import React from "react";
// import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPhone,
//   faLocationDot,
//   faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

// // Images
// import ProactiiLogo from "../Assets/Images/proactii-logo.png";
// import Logo from "../Assets/Images/logo-light.png";

// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="space-y-4">
//             <NavLink to="/" className="block mb-4">
//               <img src={Logo} alt="Gyan Group" className="h-12 w-auto" />
//             </NavLink>
//             <p className="text-sm leading-relaxed">
//               Gyan (knowledge) is considered as all powerful / omnipotent,
//               a thing one has to strive to achieve not only for wellbeing
//               of all mankind but even for emancipation of its soul.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
//             <ul className="space-y-3">
//               {[
//                 { name: "Home", path: "/" },
//                 { name: "About Us", path: "/about" },
//                 { name: "We Export", path: "/weExport" },
//                 { name: "Quality Policy", path: "/qualityPolicy" },
//                 { name: "Contact Us", path: "/contactUs" },
//               ].map((link) => (
//                 <li key={link.name}>
//                   <NavLink
//                     to={link.path}
//                     className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2"
//                   >
//                     <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
//                     {link.name}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Products */}
//           <div className="space-y-4">
//             <h3 className="text-white font-semibold text-lg mb-4">Products</h3>
//             <ul className="space-y-3">
//               {[
//                 { name: "Pharma & API Intermediate", path: "/products/pharma" },
//                 { name: "Pigment Intermediate", path: "/products/pigment" },
//                 { name: "Dye Intermediate", path: "/products/dye" },
//               ].map((product) => (
//                 <li key={product.name}>
//                   <NavLink
//                     to={product.path}
//                     className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2"
//                   >
//                     <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
//                     {product.name}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-4">
//             <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
//             <div className="space-y-3">
//               <div className="flex items-start gap-3">
//                 <FontAwesomeIcon icon={faLocationDot} className="text-blue-500 mt-1" />
//                 <address className="text-sm not-italic">
//                   Plot No 5/12, Road No 7,<br />
//                   Opp Fire Station, GIDC,<br />
//                   Sarigam - 396155,<br />
//                   Gujarat India
//                 </address>
//               </div>

//               <div className="flex items-center gap-3">
//                 <FontAwesomeIcon icon={faPhone} className="text-blue-500" />
//                 <a href="tel:+919825886288" className="text-sm hover:text-blue-400">
//                   (+91) 982 588 6288
//                 </a>
//               </div>

//               <div className="flex items-center gap-3">
//                 <FontAwesomeIcon icon={faEnvelope} className="text-blue-500" />
//                 <a href="mailto:info@gyangroup.in" className="text-sm hover:text-blue-400">
//                   info@gyangroup.in
//                 </a>
//               </div>

//               {/* Social Links */}
//               <div className="flex gap-4 mt-4">
//                 <a
//                   href="https://wa.me/919825886288"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 bg-gray-800 rounded-lg hover:bg-blue-500 transition-colors"
//                 >
//                   <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/company/gyangroup"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 bg-gray-800 rounded-lg hover:bg-blue-500 transition-colors"
//                 >
//                   <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="border-t border-gray-800 mt-12 pt-8 text-center md:text-left">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
//             <div>
//               © {new Date().getFullYear()} Gyan Group. All rights reserved.
//             </div>
//             <div className="flex items-center gap-2">
//               <span>Developed with</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 512 512"
//                 className="w-4 h-4 fill-red-500"
//               >
//                 <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
//               </svg>
//               <span>by</span>
//               <a
//                 href="https://proactii.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 hover:text-blue-400"
//               >
//                 <img src={ProactiiLogo} alt="Proactii" className="h-4 w-auto" />
//                 Proactii
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
