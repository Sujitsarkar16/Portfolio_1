import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const para1 = document.querySelector(".para-1");
    const words = para1.innerText.split(" ");
    para1.innerHTML = "";
    words.forEach((word, index) => {
      const wordWrapper = document.createElement("span");
      wordWrapper.innerText = `${word} `;
      wordWrapper.style.opacity = 0;
      para1.appendChild(wordWrapper);

      gsap.to(wordWrapper, {
        opacity: 1,
        color: "skyblue",
        duration: 0.5,
        scrollTrigger: {
          trigger: para1,
          start: "top 90%",
          end: "bottom 50%",
          scrub: true,
          stagger: 0.1 * index,
        },
      });
    });
  }, []);

  return (
    <div id="about">
      <div className="description">
        <h2 className="greetings">Hello there</h2>
        <br />
        <p className="para-1">
          I am a highly motivated Masters Aeronautical graduate with a profound
          passion for aviation and aerospace engineering. My academic journey
          includes a Master's degree from Kaunas University of Technology,
          Lithuania, and a Bachelor's degree from Bharath Institute of Higher
          Education and Research, India. During my tenure as an Aircraft Design
          Certification Engineer Trainee at Ziegler Aerospace in Hyderabad,
          India, I contributed to a significant Aircraft Cabin and Structural
          Modification Project, adhering to EASA Part 21 J standards.
        </p>
      </div>
    </div>
  );
};

export default About;
