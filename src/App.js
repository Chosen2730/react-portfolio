import React, { useState } from "react";
import Hero from "./hero";
import Navigation from "./navigation";
import Services from "./services";
import Projects from "./projects";
import Testimonials from "./testimonials";
import Contact from "./contact";

function App() {
  const [nav, setNav] = useState(true);
  return (
    <>
      <Navigation nav={nav} setNav={setNav} />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
