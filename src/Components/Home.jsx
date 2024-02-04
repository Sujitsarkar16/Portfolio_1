import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const revealContainersRef = useRef([]);

  useEffect(() => {
    revealContainersRef.current.forEach((container) => {
      const image = container.querySelector("img");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,

          toggleActions: "restart none none reset",
        },
      });

      tl.to(container, { duration: 1, "--height": "100%", ease: "Power2.ease" })
        .to(container, { duration: 1, "--height": "0%", ease: "Power2.ease" })
        .to(image, { duration: 0.2, opacity: 1, delay: -1 })
        .from(image, {
          duration: 1,
          scale: 1.4,
          ease: "Power2.easeInOut",
          delay: -1.2,
        });
    });
  }, []);
  return (
    <div id="home">
      <div className="title">
        <h1 className="left__text">Aeronautical</h1>
        {Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className="img-container"
            ref={(el) => (revealContainersRef.current[index] = el)}
          >
            <img src={`./assets/profile.jpg`} alt={`image-${index}`} />
          </div>
        ))}
        {/* <img
          className="Main__IMG"
          src="./assets/profile.jpg"
          alt="profile pic"
        /> */}
        <h1 className="right__text">Engineer</h1>
      </div>
      <p className="info">
        My passion lies in aviation and aerospace engineering. With expertise in
        aerodynamics, aircraft design, and propulsion systems.
      </p>
    </div>
  );
};

export default Home;
