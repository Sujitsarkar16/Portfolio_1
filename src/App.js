import React, { useRef } from "react";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

function App() {
  const HomeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollHandler = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <main>
        <nav>
          <ul className="items">
            <li onClick={() => scrollHandler(HomeRef)}>Home</li>
            <li onClick={() => scrollHandler(aboutRef)}>About</li>
            <li onClick={() => scrollHandler(projectsRef)}>Resume</li>
            <li onClick={() => scrollHandler(contactRef)}>Contact</li>
          </ul>
        </nav>
        <section ref={HomeRef}>
          <Home />
        </section>
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={projectsRef}>
          <Projects />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
