import React from "react";
import { motion } from "framer-motion";

function AboutMe({ languages }) {
  return (
    <div id="about" className="lg:h-screen flex items-center ">
      <section className=" grid lg:grid lg:grid-cols-2 gap-6">
        <motion.div className="">
          <div className="flex items-center mb-5">
            <h1 className="text-xl text-gray-800 mr-5"> About</h1>
            <p className="w-full h-0.5 bg-gray-300"></p>
          </div>

          <p className=" mb-4">
            Hello! My name is Desmond and I enjoy creating things that live on
            the internet. My interest in web development started back in 2019
            when I decided to enroll in the tertiary institution and I've learnt
            alot from Youtube free courses. Fast-forward to today, and I’ve had
            the privilege of working as a Web Designer and Front-End Developer.
            My main focus these days is building more things that live on the
            internet.
          </p>
          <section className="flex space-x-4 text-blue-600">
            {languages.map((language, index) => (
              <p key={index}>{language}</p>
            ))}
          </section>
        </motion.div>

        <div className="">
          <img className="rounded-lg border" src="/IMG_1110.jpg" alt="" />
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
