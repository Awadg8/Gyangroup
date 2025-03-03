import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import InquiryPopup from "../../components/InquiryPopup.js";

import {
  FadeUp,
  FadeDown,
  FadeLeft,
  FadeRight,
} from "../../components/Animation.js";

import {
  ArrowLeftIcon,
  ClipboardListIcon as ClipboardDocumentListIcon,
  RecycleIcon as MoleculeIcon,
  ScaleIcon,
  BeakerIcon as BeakerIconOutline,
  // FileTextIcon,
  FlaskConicalIcon,
  BookOpenIcon,
  AlertCircleIcon,
  // DownloadIcon,
  SendIcon,
  Atom,
  FileText,
  ShieldCheck,
} from "lucide-react";

function ProductDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const product = location.state?.product;

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center p-8 bg-white shadow-xl rounded-2xl max-w-md w-full mx-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-8 bg-white shadow-xl rounded-2xl max-w-md mx-4"
          >
            <AlertCircleIcon className="w-16 h-16 mx-auto mb-6 text-gray-400" />
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Product Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <button
              onClick={() => navigate("/products/pharma")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg w-full"
            >
              Back to Products
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 md:py-10 lg:py-10">
        <div>
          {/* Header with navigation */}
          <FadeLeft>
            <div className="bg-white shadow-sm sticky top-0 z-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-gray-600 hover:text-gray-900 hover:bg-gray-200 py-2 px-3 rounded-full transition-colors group"
                  >
                    <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium">Back to Products</span>
                  </button>
                </div>
              </div>
            </div>
          </FadeLeft>

          {/* Main content */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-6 sm:p-8 lg:p-10 lg:pt-8">
                  {/* Product header */}
                  <FadeDown className="mb-8">
                    <div className="flex items-center text-sm text-gray-500 font-medium mb-3">
                      <MoleculeIcon className="w-4 h-4 mr-2 text-gray-500" />
                      <span>CAS: {product.casNo}</span>
                    </div>

                    <h1 className="text-3xl font-bold text-gray-900 mb-3">
                      {product.name}
                    </h1>
                  </FadeDown>

                  {/* Product details grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left column - Structure */}
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center border border-gray-200">
                        <div className="w-full max-w-md">
                          <img
                            src={product.image}
                            alt="Chemical Structure"
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Right column - Details */}
                    <FadeRight className="space-y-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <DetailCard
                          icon={<BeakerIconOutline className="w-5 h-5" />}
                          label="Product No"
                          value={product.productNo}
                        />
                        <DetailCard
                          icon={
                            <ClipboardDocumentListIcon className="w-5 h-5" />
                          }
                          label="Category"
                          value={product.categoryName}
                        />
                        <DetailCard
                          icon={<MoleculeIcon className="w-5 h-5" />}
                          label="CAS No"
                          value={product.casNo}
                        />
                        <DetailCard
                          icon={<ScaleIcon className="w-5 h-5" />}
                          label="Molecular Weight"
                          value={product.molecularWeight}
                        />
                        <DetailCard
                          icon={<Atom className="w-5 h-5" />}
                          label="Molecular Formula"
                          value={product.mwFormula}
                        />
                        <DetailCard
                          icon={<FlaskConicalIcon className="w-5 h-5" />}
                          label="Product Status"
                          value={product.productStatus}
                        />
                        <DetailCard
                          icon={<BookOpenIcon className="w-5 h-5" />}
                          label="Application"
                          value={product.application || "Various Applications"}
                        />
                        <DetailCard
                          icon={<FileText className="w-5 h-5" />}
                          label="Specification"
                          value={
                            product.specification || "Various Specification"
                          }
                        />
                      </div>

                      {/* Action buttons */}
                      <FadeUp className="space-y-4">
                        <button
                          onClick={openPopup}
                          className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                        >
                          <SendIcon className="w-5 h-5" />
                          <span>Inquiry Now</span>
                        </button>
                      </FadeUp>
                    </FadeRight>
                  </div>
                </div>
              </div>

              {/* Safety Information */}
              <FadeUp className="mt-8">
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <div className=" flex items-center mb-4">
                    <ShieldCheck className="w-8 h-8 text-blue-600 mr-2 ml-1" />

                    <h2 className="text-lg font-semibold text-gray-900 ">
                      Safety Information
                    </h2>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-yellow-800">
                      Please refer to the Material Safety Data Sheet (MSDS) for
                      detailed handling instructions and safety precautions.
                      Always wear appropriate personal protective equipment when
                      handling this product.
                    </p>
                  </div>
                </div>
              </FadeUp>

              {/* Additional information section */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Additional Information
                </h2>
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed">
                    This product is a pharmaceutical intermediate commonly used
                    in the synthesis of various pharmaceutical compounds. Our
                    high-purity grade ensures optimal results in your research
                    and development processes. For detailed specifications,
                    safety information, or technical support, please contact our
                    expert team.
                  </p>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <FlaskConicalIcon className="w-6 h-6 text-blue-600 mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">
                        High Purity
                      </h3>
                      <p className="text-sm text-gray-600">
                        Meets stringent quality standards for pharmaceutical
                        applications
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <FileTextIcon className="w-6 h-6 text-blue-600 mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Documentation
                      </h3>
                      <p className="text-sm text-gray-600">
                        Complete documentation including COA and SDS available
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <BeakerIcon className="w-6 h-6 text-blue-600 mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Technical Support
                      </h3>
                      <p className="text-sm text-gray-600">
                        Expert technical assistance for your specific needs
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div> */}
            </div>
          </main>

          {/* Enquiry Popup */}
          <AnimatePresence>
            {isPopupOpen && (
              <InquiryPopup product={product} onClose={closePopup} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// Card For Every Details
function DetailCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode,
  label: string,
  value: string,
}) {
  return (
    <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 hover:border-blue-200 transition-colors">
      <div className="flex items-center mb-2">
        <span className="text-gray-400">{icon}</span>
        <span className="ml-2 text-sm font-medium text-gray-500">{label}</span>
      </div>
      <p className="text-gray-900 font-medium">{value}</p>
    </div>
  );
}

export default ProductDetail;
