import React from "react";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import transition from "../components/transition";

const Home = () => {
  const languages = ["JavaScript (ES6+)", "React", "Next", "Node", "Rust"];

  return (
    <main className=" w-[90%] lg:w-[800px] mx-auto ">
      <Hero />
      <AboutMe languages={languages} />
    </main>
  );
};

export default transition(Home);
