import { useEffect, useRef, useState } from "react";
import "./index.css";
import navData from "./components/navLinks";
import Navbar from "./components/Navbar";

import {
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiCodepen,
  FiGithub,
} from "react-icons/fi";

import transition from "./components/transition";
import { Route, Routes, useLocation } from "react-router-dom";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/Footer";

function App() {
  const [show, setShow] = useState(false);
  const linksContainer = useRef(null);
  const links = useRef(null);

  useEffect(() => {
    const linksHeight = links.current.getBoundingClientRect().height;

    if (show) {
      linksContainer.current.style.height = `${linksHeight}px`;
    } else {
      linksContainer.current.style.height = "0px";
    }
  }, [show]);

  const handleToggle = () => setShow(!show);

  const location = useLocation();

  console.log(window.onload);
  return (
    <div className="bg-slate-50 text-gray-400">
      <Navbar
        show={show}
        handleToggle={handleToggle}
        linksContainer={linksContainer}
        links={links}
        navData={navData}
      />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>

      <div className="hidden lg:flex relative">
        <div className="fixed bottom-0 left-5 flex space-x-5 items-center mix-blend-difference overflow-hidden">
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
            className="text-lg mb-3 hover:text-blue-600 hover:pb-4 transition-all duration-300"
          >
            <FiGithub />
          </motion.p>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1, ease: "easeInOut" }}
            className="text-lg mb-3 hover:text-blue-600 hover:pb-4 transition-all duration-300"
          >
            <FiInstagram />
          </motion.p>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeIn" }}
            className="text-lg mb-3 hover:text-blue-600 hover:pb-4 transition-all duration-300 overflow-hidden"
          >
            <FiTwitter />
          </motion.p>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1, ease: "easeIn" }}
            className="text-lg mb-3 hover:text-blue-600 hover:pb-4 transition-all duration-300 overflow-hidden"
          >
            <FiLinkedin />
          </motion.p>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 1, ease: "easeIn" }}
            className="text-lg mb-3 hover:text-blue-600 hover:pb-4 transition-all duration-300 overflow-hidden"
          >
            <FiCodepen />
          </motion.p>
          {/* <motion.p
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1, ease: "easeIn" }}
            className="h-10 w-0.5 bg-gray-500 overflow-hidden"
          ></motion.p> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default transition(App);
