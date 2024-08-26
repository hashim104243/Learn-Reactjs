import React from "react";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import HeaderContent from "./components/HeaderContent";
import Footer from "./components/Footer";
import HeaderSkillsSection from "./components/HeaderSkillsSection";
import AboutMe from "./components/AboutMe";
import FunFacts from "./components/FunFacts";
import Education from "./components/Education";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
export default function App() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Header>
        <HeaderContent />
      </Header>
      <HeaderSkillsSection />
      <AboutMe />
      <FunFacts />
      <Education />
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
}

// https://thames-demo-nuxt.vercel.app/index-1
