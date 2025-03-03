import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronDown,
  faEnvelope,
  faPhone,
  faMagnifyingGlass,
  faBars,
  // faTimes,
} from "@fortawesome/free-solid-svg-icons";

// Images Import Here
import Logo from "../Assets/Images/logo-light.png";
import RegisterImg from "../Assets/Images/reg.png";

const products = [
  {
    id: 1,
    image:
      "https://www.gyangroup.in/upload_data/images/Product/62/GHP-1023.png",
    casNo: "6265-07-2",
    name: "4 Methyl 2 Amino 6 Nitro Phenol",
    productNo: "GHP-1023",
    categoryName: "Pharma & API Intermediate",
    molecularWeight: "168.15",
    mwFormula: "C7H8N2O1",
    productStatus: "Campaign Base",
    specification: "On Request",
    application: "PHARMA",
    link: "/products/productDetail/1",
  },
  {
    id: 2,
    image:
      "https://www.gyangroup.in/upload_data/images/Product/59/GHP-1021.png",
    casNo: "94-85-9",
    name: "2,5 Diethoxy Aniline",
    productNo: "GHP-1023",
    categoryName: "Pharma & API Intermediate",
    molecularWeight: "168.15",
    mwFormula: "C7H8N2O2",
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
    categoryName: "Pharma & API Intermediate",
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
    categoryName: "Pharma & API Intermediate",
    molecularWeight: "168.15",
    mwFormula: "C7H8N2O4",
    productStatus: "Campaign Base",
    specification: "On Request",
    application: "PHARMA",
  },
];

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutSubmenuOpen, setAboutSubmenuOpen] = useState(false);
  const [productSubmenuOpen, setProductSubmenuOpen] = useState(false);
  // const [isSearchOpen, setIsSearchOpen] = useState(false);
  const menuRef = useRef(null);
  // const searchPopupRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      // Close the Mobile menu if click is outside
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }

      // Close the popup if clicked outside in Search Btn
      // if (
      //   searchPopupRef.current &&
      //   !searchPopupRef.current.contains(event.target)
      // ) {
      //   setIsSearchOpen(false);
      // }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function for toggling Menu, AboutMenu, ProductMenu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleAboutSubmenu = () => {
    setAboutSubmenuOpen(!aboutSubmenuOpen);
    setProductSubmenuOpen(false);
  };

  const toggleProductSubmenu = () => {
    setProductSubmenuOpen(!productSubmenuOpen);
    setAboutSubmenuOpen(false);
  };

  // Handle Search Input Change
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    if (value.length > 0) {
      const filtered = products.filter(
        (product) => product.name.toLowerCase().includes(value) // Now this will checks anywhere in the product name
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  // Handle Product Selection
  const handleSelectProduct = (product) => {
    setSearchTerm("");
    setFilteredProducts([]);
    navigate(`/products/productDetail/${product.id}`, { state: { product } }); // Pass product data
  };

  return (
    <div>
      {/* Top Bar Here */}
      <div className="top-bar bg-[#d5e4f1] py-3 px-8 hidden lg:block">
        <div className="top-bar-container">
          <div className=" flex justify-between items-center">
            <div className=" flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className=" text-[#1e7dd8] mr-2"
              />
              info@gyangroup.in
              <FontAwesomeIcon
                icon={faPhone}
                className=" text-[#1e7dd8] mr-2 ml-5"
              />
              +91 260 240 4300
            </div>

            <div className=" flex items-center justify-center">
              <ul className="social flex">
                <li className="mr-3">
                  <a
                    href="https://wa.me/919825886288"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex justify-center items-center relative bg-[#c4def5] rounded-full hover:bg-[#b7d8f5] hover:ring-2 transition-colors duration-150"
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className=" w-6 h-6 inline-block text-[#1e7dd8]"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/company/gyangroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex justify-center items-center relative bg-[#c4def5] hover:bg-[#b7d8f5] hover:ring-2 transition-colors duration-150 rounded-full"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className=" w-6 h-6 inline-block text-[#1e7dd8]"
                    />
                  </a>
                </li>

                <li>
                  <img
                    className=" ml-3"
                    alt=""
                    src={RegisterImg}
                    width="48"
                    height="48"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Header Section Here */}
      <header
        className={` bg-[#d5e4f1] lg:bg-white z-[60] shadow-lg transition-transform duration-300 ${
          isSticky ? "fixed w-full top-0" : "relative"
        }`}
      >
        <nav className=" px-3 md:px-8 py-3 lg:pt-2 lg:pb-0 relative flex items-center justify-between w-full">
          <div className="relative">
            <div className="">
              <NavLink className="" to="/">
                <img src={Logo} alt="Logo-img" />
              </NavLink>
            </div>
          </div>

          <div className=" flex items-center flex-row">
            {/* Desktop Menu */}
            <div className="pr-5 pl-[105px] hidden lg:block">
              <div className="inline-block align-top">
                <ul className="text-left flex text-[#1e7dd8] text-base font-medium">
                  <li className="pr-4 pt-5 pb-7">
                    <NavLink
                      to="/"
                      className="sf-with-ul-pre sf-with-ul border-b-2 border-transparent hover:border-[#1e7dd8] transition-all duration-300 pb-1"
                    >
                      Home
                    </NavLink>
                  </li>

                  <div className=" group">
                    <li className="pr-4 pt-5 pb-7 about-header">
                      <NavLink
                        to="#"
                        className="sf-with-ul-pre sf-with-ul border-b-2 border-transparent group-hover:border-[#1e7dd8] transition-all duration-300 pb-1"
                      >
                        About Us
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="ml-1 group-hover:rotate-180 transition-all duration-500"
                        />
                      </NavLink>

                      <ul className="sub-menu about-header-menu">
                        <li className="pl-3 pr-3 py-2 hover:bg-blue-200 transition-colors duration-300">
                          <NavLink to="/about">Company Profile</NavLink>
                        </li>

                        <li className=" pl-3 pr-3 py-2 hover:bg-blue-200 transition-colors duration-300">
                          <NavLink to="/groupOfCompany">
                            Group Of Company
                          </NavLink>
                        </li>

                        <li className=" pl-3 pr-3 py-2 hover:bg-blue-200 transition-colors duration-300">
                          <NavLink to="/achievements">
                            Achievements / Milestones
                          </NavLink>
                        </li>

                        <li className="pl-3 pr-3 py-2 hover:bg-blue-200 transition-colors duration-300">
                          <NavLink to="/qualityPolicy">Quality Policy</NavLink>
                        </li>
                      </ul>
                    </li>
                  </div>

                  <div className=" group">
                    <li className="pr-4 pt-5 pb-7 product-header">
                      <NavLink
                        to="#"
                        className="sf-with-ul-pre sf-with-ul border-b-2 border-transparent group-hover:border-[#1e7dd8] transition-all duration-300 pb-1"
                      >
                        Products
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="ml-1 group-hover:rotate-180 transition-all duration-500"
                        />
                      </NavLink>

                      <ul className="sub-menu product-header-menu">
                        <li className=" pl-3 pr-3 py-2 hover:bg-blue-200 transition-colors duration-300">
                          <NavLink to="/products/pharma">
                            Pharma & Api Intermediate
                          </NavLink>
                        </li>

                        <li className="pl-3 pr-3 py-2 hover:bg-blue-200 transition-colors duration-300">
                          <NavLink to="/products/pigment">
                            Pigment Intermediate
                          </NavLink>
                        </li>

                        <li className="pl-3 pr-3 py-2 hover:bg-blue-200 transition-colors duration-300">
                          <NavLink to="/products/dye">Dye Intermediate</NavLink>
                        </li>
                      </ul>
                    </li>
                  </div>

                  <li className=" pr-4 pt-5 pb-7">
                    <NavLink
                      to="/weExport"
                      className="sf-with-ul-pre sf-with-ul border-b-2 border-transparent hover:border-[#1e7dd8] transition-all duration-300 pb-1"
                    >
                      We Export
                    </NavLink>
                  </li>

                  <li className="pr-4 pt-5 pb-7">
                    <NavLink
                      to="/blog"
                      className="sf-with-ul-pre sf-with-ul border-b-2 border-transparent hover:border-[#1e7dd8] transition-all duration-300 pb-1"
                    >
                      Blog
                    </NavLink>
                  </li>

                  <li className=" pt-5 pb-7">
                    <NavLink
                      to="/contactUs"
                      className="sf-with-ul-pre sf-with-ul border-b-2 border-transparent hover:border-[#1e7dd8] transition-all duration-300 pb-1"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative lg:mb-2">
              <input
                type="text"
                className="w-64 p-2 border border-gray-300 rounded-full outline-none pl-4 focus:ring-2 focus:ring-[#1e7dd8]"
                placeholder="Search product here..."
                value={searchTerm}
                onChange={handleSearch}
              />

              <button className="absolute right-3 top-[0.6rem] text-gray-500">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>

              {/* Search Suggestions */}
              {filteredProducts.length > 0 && (
                <ul className="absolute top-full mt-2 bg-white w-64 border border-gray-200 rounded-lg shadow-lg z-10">
                  {filteredProducts.map((product) => (
                    <li
                      key={product.id}
                      className="p-3 hover:bg-gray-300 cursor-pointer text-gray-700"
                      onClick={() => handleSelectProduct(product)}
                    >
                      {product.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="navbar-header ml-2 md:ml-6 lg:hidden">
              <button
                type="button"
                className="navbar-toggle p-3 relative"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon
                  icon={faBars}
                  className="w-6 h-6 align-middle"
                />
              </button>

              {/* <div className="quote-btn">
                <a className="btn" href="https://www.gyangroup.in/enquiry">
                  Enquiry
                </a>
              </div> */}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu here*/}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-lg z-[70] transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-5 right-5 p-3 text-3xl"
          onClick={toggleMenu}
        >
          ✕
        </button>

        <ul className="mt-16 text-[#1e7dd8] text-base font-medium">
          <li className="py-4 px-6 ">
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>

          <li className="py-4 px-6">
            <button
              className="flex items-center justify-between w-full"
              onClick={toggleAboutSubmenu}
            >
              <span>About Us</span>

              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-2 transform transition-transform duration-300 ${
                  aboutSubmenuOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Submenu */}
            <ul
              className={`ml-4 text-sm overflow-hidden transition-all duration-500 ${
                aboutSubmenuOpen
                  ? "max-h-[180px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <li className="py-3">
                <NavLink to="/about" onClick={toggleMenu}>
                  Company Profile
                </NavLink>
              </li>

              <li className="py-3">
                <NavLink to="/groupOfCompany" onClick={toggleMenu}>
                  Group Of Company
                </NavLink>
              </li>

              <li className="py-3">
                <NavLink to="/achievements" onClick={toggleMenu}>
                  Achievements / Milestones
                </NavLink>
              </li>

              <li className="py-3 ">
                <NavLink to="/qualityPolicy" onClick={toggleMenu}>
                  Quality Policy
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="py-4 px-6">
            <button
              className="flex items-center justify-between w-full"
              onClick={toggleProductSubmenu}
            >
              <span>Products</span>

              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-2 transform transition-transform duration-300 ${
                  productSubmenuOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Submenu */}
            <ul
              className={`ml-4 text-sm overflow-hidden transition-all duration-500 ${
                productSubmenuOpen
                  ? "max-h-[135px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <li className="py-3">
                <NavLink to="/products/pharma" onClick={toggleMenu}>
                  Pharma & Api Intermediate
                </NavLink>
              </li>

              <li className="py-3 ">
                <NavLink to="/products/pigment" onClick={toggleMenu}>
                  Pigment Intermediate
                </NavLink>
              </li>

              <li className="py-3">
                <NavLink to="/products/dye" onClick={toggleMenu}>
                  Dye Intermediate
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="py-4 px-6 ">
            <NavLink to="/weExport" onClick={toggleMenu}>
              We Export
            </NavLink>
          </li>

          <li className="py-4 px-6">
            <NavLink to="/blog" onClick={toggleMenu}>
              Blog
            </NavLink>
          </li>

          <li className="py-4 px-6">
            <NavLink to="/contactUs" onClick={toggleMenu}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
