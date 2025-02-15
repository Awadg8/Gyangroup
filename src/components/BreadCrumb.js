// import React from "react";
// import { NavLink } from "react-router-dom";

// function BreadCrumb() {
//   return (
//     <div>
//       <div>BreadCrumb</div>
//       <div class="banner banner-static">
//         <div class="container">
//           <div class="content row has-bg-image">
//             <div
//               class="imagebg bg-image-loaded"
//               style={{
//                 "backgroundImage ":
//                   "url(&quot;https://gyangroup.in/assets/ui/image/banner-inside-h.jpg&quot;);",
//               }}
//             >
//               <img
//                 src="https://gyangroup.in/assets/ui/image/banner-inside-h.jpg"
//                 alt=""
//               />
//             </div>

//             <div class="banner-text">
//               <h1 class="page-title">About Us</h1>
//               <p class="page-breadcrumb">
//                 <NavLink to="/">Home</NavLink>/<span class="current">About Us</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BreadCrumb;

import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { FadeDown, FadeUp } from "./Animation.js";

interface BreadcrumbProps {
  title: string;
  currentPage: string;
  backgroundImage?: string;
}

function Breadcrumb({ title, currentPage, backgroundImage }: BreadcrumbProps) {
  return (
    <div className="relative h-[400px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/75" />
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full pt-16 pb-12">
          {/* Breadcrumb Navigation */}
          <FadeDown className="mb-6">
            <nav className="flex items-center space-x-2 text-sm font-medium text-blue-100/80">
              <Link
                to="/"
                className="flex items-center text-base hover:text-white transition-colors"
              >
                <Home className="h-5 w-5 mr-1" />
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-blue-100/60" />
              <span className="text-white">{currentPage}</span>
            </nav>
          </FadeDown>

          {/* Page Title */}
          <FadeUp delay={0.1}>
            <h1 className="text-4xl md:text-[42px] lg:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
          </FadeUp>

          {/* Page Description */}
          <FadeUp delay={0.2} className="max-w-3xl">
            <p className="text-base md:text-lg text-blue-100/90 leading-relaxed">
              Discover our journey of innovation, commitment to quality, and
              dedication to sustainable chemical solutions that shape the future
              of industry.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-[-15px] left-0 right-0 z-50">
        <svg
          className="w-full h-12 sm:h-16 text-white fill-current"
          viewBox="0 0 1440 74"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default Breadcrumb;
