import FaustoImg from "./assets/fausto-photo.webp";
import faustoImg1 from "./assets/fausto-image-about-pg-01.webp";
import faustoImg2 from "./assets/fausto-image-about-pg-02.webp";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export function About() {
  const container = useRef(null);

  useGSAP(
    () => {
      // Set the initial opacity to 0
      gsap.set("#box", { opacity: 0 });

      gsap.to("#box", {
        scrollTrigger: {
          trigger: "#box", // The animation triggers when ".box" enters the viewport
          start: "top", // Animation starts when the top of ".box" hits the bottom of the viewport
          toggleActions: "play none none none", // Play the animation once when the trigger is hit
        },
        opacity: 1, // Animate to full opacity
        duration: 1, // Duration of the animation (optional, adjust as needed)
      });

      gsap.set("#header", { scale: 0 }); // Set the initial scale to 0
      gsap.to("#header", {
        scrollTrigger: {
          trigger: "#header", // Trigger the animation when #header enters the viewport
          start: "top bottom", // Adjust as necessary, e.g., "top bottom" means the animation starts when the top of #header hits the bottom of the viewport
          toggleActions: "play none none none",
        },
        scale: 1, // Scale up to 100%
        duration: 1, // Duration of 2 seconds
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className=" w-full h-full flex flex-rows justify-center items-center mb-10 sm:my-20 "
    >
      <div id="box" className="w-[20%] lg:flex  justify-center hidden ">
        <img
          src={faustoImg1}
          className=" w-full max-w-[300px] h-auto  rotate-[-4deg]  rounded-lg mt-[500px]"
        />
      </div>
      <div className="lg:w-[50%] w-full h-auto flex flex-col justify-center items-center">
        <div
          id="header"
          className="  flex flex-col justify-center items-center mx-10"
        >
          <img
            src={FaustoImg}
            alt="Fausto"
            className="w-[800px] h-auto aspect-[4/3] object-cover  rounded-xl mb-10  "
          />
        </div>
        <div
          id="title-1"
          className="w-[100%] flex flex-col lg:flex-row justify-start gap-0 lg:gap-20 3xl:gap-[700px]"
        >
          <div id="title-1" className=" w-full flex justify-start mb-10  ">
            <div className="flex flex-col justify-center gap-5 w-[100%] text-left items-center">
              <div className="sm:w-[80%] w-[90%] flex flex-col justify-center items-center ">
                <span className="w-auto flex flex-col justify-center items-center uppercase">
                  <p>Behind The Lens</p>
                </span>
                <span className="w-auto flex flex-col justify-center items-center">
                  <h1 className=" ">Fausto</h1>
                  <h1 className="ml-20 lg:mt-[-10px] mt-[-15px] ">Nuñez</h1>
                </span>
              </div>
              <div
                id="text-content"
                className=" flex flex-col gap-10 sm:w-[80%] w-[90%]  "
              >
                <h5>
                  I picked up photography during my college years and fell in
                  love with it. Photography has been a way for me to express
                  myself, to open up more to the world, and, more importantly,
                  to tell stories—stories about the people I meet, the places I
                  visit, and everything in between.
                </h5>
                <h5>
                  In every frame, I like to take a journalistic approach, to
                  document life as it happens, whether it’s me walking the
                  streets of NYC and photographing daily life, taking a
                  portrait, documenting an event, or traveling through some
                  distant land, my goals are to capture the essence of that
                  moment, that moment that will never repeat itself because it
                  can happen only once in life, to capture the feeling of that
                  moment, the story of that person and that place in every
                  frame.
                </h5>
                <h5>
                  I hope we get to know each other and create beautiful things.
                </h5>
                <NavLink to="/contact">
                  <h5 className=" underline text-light-text-light dark:text-dark-text-light">
                    Let's Connect!
                  </h5>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="box" className="w-[20%] lg:flex  justify-center hidden ">
        <img
          src={faustoImg2}
          className=" w-full max-w-[300px] h-auto    rotate-3 rounded-lg mt-[1200px] "
        />
      </div>
    </div>
  );
}
