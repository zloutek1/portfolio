import React from "react";
import "./App.css";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ExperienceSection } from "@/components/sections/Experience";
import { ProjectsSection } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";

function App(): React.JSX.Element {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ExperienceSection experience={experience} />
      <ProjectsSection projects={projects} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
