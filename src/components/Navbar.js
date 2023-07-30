import React from "react";
import {
  FiAlignRight,
  FiX,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiCodepen,
  FiGithub,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar({ links, linksContainer, handleToggle, show }) {
  return (
    <nav className="sticky top-0 inset-x-0 z-10 bg-white lg:flex justify-between items-center px-7 py-4">
      <div className="flex justify-between items-center">
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="text-gray-800 text-lg"
        >
          DESi<span className="text-blue-600">.</span>
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className={`lg:hidden text-4xl font-bold text-blue-600 transition-all duration-300 ${
            show && "rotate-90"
          }`}
          onClick={handleToggle}
        >
          {show ? <FiX /> : <FiAlignRight />}
        </motion.p>
      </div>

      <div
        ref={linksContainer}
        className="h-0 overflow-hidden transition-all duration-300 lg:!h-auto"
      >
        <ul
          ref={links}
          className="flex items-center justify-center flex-col lg:flex-row lg:justify-between overflow-hidden"
        >
          <NavLink
            style={{ color: "rgb(37 99 235 / var(--tw-text-opacity))" }}
            to="."
            onClick={handleToggle}
            className="mb-5 lg:mb-0"
          >
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 1 }}
              className="flex ml-4 hover:text-blue-600"
            >
              00. Home
            </motion.p>
          </NavLink>

          <NavLink
            style={{ color: "rgb(37 99 235 / var(--tw-text-opacity))" }}
            to="/projects"
            onClick={handleToggle}
            className="mb-5 lg:mb-0"
          >
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 1 }}
              className="flex ml-4 hover:text-blue-600"
            >
              01. Projects
            </motion.p>
          </NavLink>

          <div className="pt-5 flex space-x-5 justify-center items-start text-2xl  lg:hidden">
            <div className="hover:text-blue-600 hover:mb-2 transition-all duration-300">
              <FiGithub />
            </div>
            <div className="hover:text-blue-600 pb-3 transition-all duration-300">
              <FiInstagram />
            </div>
            <div className="hover:text-blue-600 pb-3 transition-all duration-300">
              <FiTwitter />
            </div>

            <div className="hover:text-blue-600 pb-3 transition-all duration-300">
              <FiLinkedin />
            </div>

            <div className="hover:text-blue-600 pb-3 transition-all duration-300">
              <FiCodepen />
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
