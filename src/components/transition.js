import React from "react";
import { motion } from "framer-motion";

const transition = (Component) => {
  return () => (
    <div>
      <Component />
      <motion.div
        className="fixed inset-0 bg-gray-900 h-screen w-full origin-bottom z-50"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="fixed inset-0 bg-gray-800 h-screen w-full origin-top z-50"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
};
export default transition;
