import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <header className="h-[87vh] flex items-center">
      <div>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
          className="mb-2"
        >
          Hi i'm
        </motion.p>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
          className="font-bold text-4xl mb-2 text-gray-800 "
        >
          Kudjuh Desmond.
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
          className="text-2xl mb-2 text-gray-500"
        >
          I build things for the web.
        </motion.p>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
          className="text-sm mb-8"
        >
          I’m a Web Designer and Front-End Developer (and occasionally
          designing) <br /> Currently, I’m focused on building more things for
          web.
        </motion.p>
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
          className="py-2 px-10 rounded-md  bg-blue-600 text-slate-50"
        >
          Resume
        </motion.button>
      </div>
    </header>
  );
}

export default Hero;
