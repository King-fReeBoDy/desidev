import React from "react";
import { motion } from "framer-motion";

import transition from "../components/transition";

const Projects = () => {
  return (
    <div className="h-screen w-full">
      <section className="w-[90%] lg:w-[800px] mx-auto  pt-10">
        <motion.small
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className=""
        >
          Selected Projects
        </motion.small>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="mb-2 text-4xl text-gray-800"
        >
          Projects
        </motion.h1>
      </section>
    </div>
  );
};

export default transition(Projects);
