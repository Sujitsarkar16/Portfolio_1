import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="container">
      <section className="experience">
        <h2>Experience</h2>
        <h3>
          Aircraft Design Certification Engineer Trainee (ADCE) <br></br>{" "}
          Ziegler Aerospace (2020 – 2021)
          <p>
            Aircraft Cabin and Structural modification project using AutoCAD and
            Catia, PMD modification drawings according to EASA Part 21 J
          </p>
        </h3>

        {/* Add more experience details if needed */}
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <h3 style={{ borderBottom: "1px solid black" }}>
          Design and Fabrication of 1U CUBESAT - 2021 – 2023
          <br></br>
          <p>
            Fabricated 8 world’s smallest experimental CUBESAT to study the
            radiation effect on the structural properties of Natural Plant Fiber
            Reinforced Polymer Composite Laminates on Space. (Launched from NASA
            Wallops Flight facility, USA on June 20 2019, 3 pm IST).
          </p>
        </h3>
        <h3>
          Mathematical Modeling of Quadcopter Characteristics on Wind Speed -
          2016 – 2020
          <br></br>
          <p>
            Created a Mathematical Model of Quadcopter using MATLAB Simulink and
            code, based on non linear equations for the characteristic
            performance of Quadcopter. Gathered information required for the
            performance of quadcopter in medium and strong wind.
          </p>
        </h3>
      </section>

      <span className="Line"></span>

      <section className="education">
        <h2>Education</h2>
        <p>
          Master of Aeronautical Engineering <br></br>
          <span>Kaunas University of Technology</span>
        </p>
        <p>
          Bachelor of Technology in Aeronautical Engineering <br></br>
          <span>Bharath Institute of Higher Education and Research</span>
        </p>
        <p>
          Higher Secondary School Education<br></br>
          <span>Narayana Group of Educational Institutions</span>
        </p>
      </section>

      {/* Add sections for social and political activities, honors and awards, conferences and seminars, technical skills, language skills, etc. */}
    </div>
  );
};

export default Projects;
