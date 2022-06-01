import { useState } from "react";
import Hero from "./components/hero";
import Navigation from "./components/navigation";
import Services from "./components/services";
import Projects from "./components/projects";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
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
