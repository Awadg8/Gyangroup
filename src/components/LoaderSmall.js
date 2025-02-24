import React from "react";
import { motion } from "framer-motion";

const LoaderSmall = ({ color = "white" }) => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="w-6 h-6 border-2 ml-2 border-white border-t-transparent rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
};

export default LoaderSmall;
