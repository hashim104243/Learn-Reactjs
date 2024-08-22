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

// <NavBar />
// <Header>
//   <HeaderContent />
// </Header>
// <HeaderSkillsSection />
// <AboutMe />
// <FunFacts />
// <Education />
// <Services />

// <Footer />

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

// font-family: "jost-medium-font"; */
// Headers background #221F35
// button hover color #80DB66 and border color
// https://thames-demo-nuxt.vercel.app/index-1
// Header nav
// Smart work
// About me
// Fun facts
// My education
// Services
// Pricing plan
// Footer
