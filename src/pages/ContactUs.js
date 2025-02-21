"use client";

import type React from "react";
import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

import BreadCrumb from "../components/BreadCrumb";

import Banner from "../Assets/Images/banner-4.jpg";

import {
  FadeUp,
  FadeDown,
  FadeLeft,
  FadeRight,
} from "../components/Animation.js";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "phone") {
      // Only allow numbers
      const numericValue = value.replace(/[^0-9]/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <>
      <BreadCrumb
        title="Get in Touch"
        currentPage="Contact Us"
        backgroundImage={Banner}
        // backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
      />

      <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <h1 className="text-4xl md:text-[42px] lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 md:mb-9">
              Contact Us
            </h1>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeLeft className="md:col-span-2 bg-white rounded-lg shadow-lg px-4 py-8 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you. Please fill out this form and we'll
                get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors focus:outline-none
                       ${
                         formData.name
                           ? "border-blue-500 ring-2 ring-blue-500 bg-blue-100"
                           : "border-gray-300"
                       }`}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors focus:outline-none
                       ${
                         formData.email
                           ? "border-blue-500 ring-2 ring-blue-500 bg-blue-100"
                           : "border-gray-300"
                       }`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      pattern="[0-9]*"
                      className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors focus:outline-none 
                      ${
                        formData.phone
                          ? "border-blue-500 ring-2 ring-blue-500 bg-blue-100"
                          : "border-gray-300"
                      }`}
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Interest of Service
                    </label>
                    <input
                      type="text"
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors focus:outline-none 
                      ${
                        formData.service
                          ? "border-blue-500 ring-2 ring-blue-500 bg-blue-100"
                          : "border-gray-300"
                      }`}
                      placeholder="What service are you interested in?"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors resize-none focus:outline-none 
                    ${
                      formData.message
                        ? "border-blue-500 ring-2 ring-blue-500 bg-blue-100"
                        : "border-gray-300"
                    }`}
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 ease-in-out"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </FadeLeft>

            <FadeRight className="bg-white rounded-lg shadow-lg py-8 px-4 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Address:</p>
                    <p className="text-gray-600">
                      Plot No. 5/12, Road No. 7,
                      <br />
                      Opp Fire Station, GIDC,
                      <br />
                      Sarigam-396155, Gujarat, INDIA
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Phone:</p>
                    <p className="text-gray-600">
                      (+91) 982 588 6288
                      <br />
                      (+91) 851 171 0167
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Email:</p>
                    <a
                      href="mailto:info@gyangroup.in"
                      className="text-blue-600 hover:underline"
                    >
                      info@gyangroup.in
                    </a>
                  </div>
                </li>
              </ul>
            </FadeRight>
          </div>

          {/* Google Map Section */}
          <div className=" mt-10 md:mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
            <FadeDown>
              <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 text-center py-6">
                Find Us on Google Maps
              </h2>
            </FadeDown>

            <div className="w-full h-96">
              <iframe
                title="Gyan Group Location"
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.6208541743035!2d72.85226060322152!3d20.289004730506406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0d302a70efa6d%3A0x4a9971325fa7e1a7!2sReliable%20Life%20Science!5e1!3m2!1sen!2sin!4v1739184823097!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
