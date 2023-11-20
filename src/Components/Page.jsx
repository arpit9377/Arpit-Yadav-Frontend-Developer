// src/Components/Page.jsx

import React, { useEffect, useRef } from "react";
import Header from "./Header";
import backgroundImage from "../Assets/space.jpg"; // Import the background image
import astro from "../Assets/astronaut.png";
import { useNavigate } from 'react-router-dom';
import gsap from "gsap"; // Import GSAP



const Page = () => {

    const navigate = useNavigate();

    const handleExploreRockets = () => {
      // Navigate to the Rockets page
      navigate('/rockets');
    };

  const astronautRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // GSAP animation timeline
    const tl = gsap.timeline();

    // Animation for the astronaut image
    tl.fromTo(
      astronautRef.current,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1.4, duration: 3, ease: "power4.out" }
    );

    // Animation for the heading
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 2.5, ease: "power3.out" },
      "-=0.5"
    );

    tl.to(
        astronautRef.current,
        {
          y: -20, // Adjust the value to control the floating distance
          duration: 1,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        },
        "-=1" // Start the floating animation 1 second after the scaling animation starts
      );

    // Animation for the paragraph
    tl.fromTo(
      paragraphRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 3, ease: "power3.out" },
      "-=0.3"
    );

    // Animation for the button
    tl.fromTo(
      buttonRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 3, ease: "power3.out" },
      "-=0.3"
    );
  }, []);

  return (
    <div
      className="bg-cover h-screen relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Include your navigation header */}
      <Header />

      {/* Your content goes here */}
      <div className="container mx-auto p-8 text-white flex items-center">
        {/* Astronaut Image with GSAP animation */}
        <img
          ref={astronautRef}
          src={astro}
          alt="Astronaut"
          className="w-64 h-64 md:w-96 md:h-96"
        />

        {/* Content of the page with GSAP animation */}
        <div className="ml-64">
          <h1 ref={headingRef} className="text-4xl font-bold mt-32">
            TAKING HUMANS TO SPACE
          </h1>
          <p ref={paragraphRef} className="text-lg mb-6 mt-4">
            SpaceX is an American aerospace manufacturer and space
            transportation<br></br>company founded by Elon Musk in 2002. It is
            known for its ambitious goals<br></br> to reduce space
            transportation costs and enable the colonization of Mars.
          </p>

          {/* Button with GSAP animation */}
          <button
            ref={buttonRef}
            onClick={handleExploreRockets}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Explore Rockets | 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
