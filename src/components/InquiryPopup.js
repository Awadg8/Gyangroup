import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

// For Notification
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

import Loader from "./LoaderSmall";

import {
  SendIcon,
  XIcon,
  UserIcon,
  MailIcon,
  PhoneIcon,
  MessageSquareIcon,
  RecycleIcon,
  BeakerIcon,
} from "lucide-react";

interface InquiryPopupProps {
  product: {
    name: string,
    productNo: string,
  };
  onClose: () => void;
}

const InquiryPopup: React.FC<InquiryPopupProps> = ({ product, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
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
    setIsLoading(true);

    const emailParams = {
      to_name: "Admin", // Recipient
      from_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,

      // Product Details
      product_name: product.name,
      product_no: product.productNo,
      cas_no: product.casNo || "N/A", // Ensure CAS number is optional
    };

    emailjs
      .send(
        "service_in8rqko", // Email.js Service ID
        "template_bj3z0cm", // Email.js Template ID
        emailParams,
        "L6lggsuRYQXH1fkCr" // Email.js Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000, // Closes after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setIsLoading(false);
        },
        (error) => {
          console.error("Email sending failed:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
          setIsLoading(false);
        }
      );
  };

  return (
    <>
    <ToastContainer />
    
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[70]"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="bg-white rounded-lg shadow-xl max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-2xl font-bold text-gray-900">
                  Products Enquiry
                </h2>

                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <XIcon className="w-6 h-6" />
                </button>
              </div>

              <div>
                <p>
                  If you have any questions or would like to book a session
                  please{" "}
                  <span className=" text-blue-500 font-semibold hover:underline hover:underline-offset-2 hover:text-blue-600">
                    <NavLink to="/contactUs">Contact Us</NavLink>
                  </span>
                  .
                </p>
              </div>

              {/* Product Summary */}
              <div className="bg-gray-50 rounded-lg p-4 mb-5">
                <h3 className="font-medium text-gray-900 mb-2">
                  {product.name}
                </h3>
                <div className="text-sm text-gray-500">
                  <div className="flex items-center mr-3">
                    <BeakerIcon className="h-5 w-5 text-gray-400 mr-1" />
                    <p>Product No: {product.productNo}</p>
                  </div>

                  <div className="flex items-center mt-1">
                    <RecycleIcon className="w-5 h-5 text-gray-400 mr-1" />
                    <p>CAS: {product.casNo}</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-5 w-5 text-gray-400" />
                    </div>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`block w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors
                              ${
                                formData.name
                                  ? "border-blue-500 ring-2 ring-blue-500"
                                  : "border-gray-300"
                              }`}
                      placeholder="Your name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MailIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`block w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors
                              ${
                                formData.email
                                  ? "border-blue-500 ring-2 ring-blue-500"
                                  : "border-gray-300"
                              }`}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <PhoneIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`block w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors
                              ${
                                formData.phone
                                  ? "border-blue-500 ring-2 ring-blue-500"
                                  : "border-gray-300"
                              }`}
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>

                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageSquareIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className={`block w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none resize-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors
                              ${
                                formData.message
                                  ? "border-blue-500 ring-2 ring-blue-500"
                                  : "border-gray-300"
                              }`}
                      placeholder="Your message or specific requirements"
                      required
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className={`w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md flex items-center justify-center space-x-2 outline-none transition-colors
                  ${
                    isLoading
                      ? "opacity-75 cursor-not-allowed"
                      : "hover:bg-blue-700 hover:shadow-lg"
                  }
                `}
                    disabled={isLoading}
                  >
                    <SendIcon className="w-5 h-5" />
                    <span>Send Request</span>
                    {isLoading && <Loader />}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default InquiryPopup;
