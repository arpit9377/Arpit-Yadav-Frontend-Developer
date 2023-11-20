// src/Components/About.jsx
import React from "react";
import Header from "./Header";

const About = () => {
  return (
    <div className="relative">
        <Header/>
          {/* Video background */}
          <video
  autoPlay
  loop
  muted
  className="absolute top-0 left-0 min-w-full min-h-full object-cover z-[-1]"
>
  <source src={process.env.PUBLIC_URL + '/videos/Rocketsvid.mp4'} type="video/mp4" />
  Your browser does not support the video tag.
</video>

      <div className="container mx-auto p-8 text-white relative z-10">
        <h1 className="text-4xl font-bold mt-8 mb-4">About SpaceX</h1>
        <p className="text-gray-300">
        Space Exploration Technologies Corp., commonly referred to as SpaceX, is an American spacecraft manufacturer, launch service provider, defense contractor and satellite communications company headquartered in Hawthorne, California. The company was founded in 2002 by Elon Musk with the goal of reducing space transportation costs and to colonize Mars. The company currently operates the Falcon 9 and Falcon Heavy rockets along with the Dragon spacecraft.

The company offers internet service via its Starlink satellites, which became the largest-ever satellite constellation in January 2020 and as of November 2023 comprised more than 5,000 small satellites in orbit.

Meanwhile, the company is developing Starship, a human-rated, fully-reusable, super heavy-lift launch system for interplanetary and orbital spaceflight. On its failed first flight in April 2023, it became the largest and most powerful rocket ever flown. The second flight took place in November 2023.

SpaceX is the first private company to develop a liquid-propellant rocket that has reached orbit; to launch, orbit, and recover a spacecraft; to send a spacecraft to the International Space Station; and to send astronauts to the International Space Station. It is also the first organization of any type to achieve a vertical propulsive landing of an orbital rocket booster and the first to reuse such a booster. The company's Falcon 9 rockets have landed and reflown more than 200 times.
        </p>

        {/* The Developer */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">The Developer</h2>
          <p className="text-gray-300">
            Hello! I'm Arpit Yadav, a passionate developer with a keen interest in web development and space exploration. I created this SpaceX application to showcase information about SpaceX rockets. Connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/im-arpit-yadav-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
