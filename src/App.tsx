import React from "react";
import "./App.css";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ExperienceSection } from "@/components/sections/Experience";
import { ProjectsSection } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { projects } from "@/data/projects.data";
import { experience } from "@/data/experience.data";

// types moved to src/data

// legacy type removed

// types moved to src/data

// legacy in-file data removed; now imported from src/data

// section imports are already at the top
// data imports are already at the top

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
