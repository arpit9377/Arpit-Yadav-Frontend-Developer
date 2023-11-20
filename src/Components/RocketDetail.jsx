// src/Components/RocketDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";


const RocketDetail = () => {
  const { rocketId } = useParams();
  const rocket = useSelector((state) =>
    state.rockets.rockets.find((r) => r.rocket_id === rocketId)
  );

  if (!rocket) {
    return <div>Rocket not found</div>;
  }

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
        <source src="/videos/Rocketsvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container mx-auto p-8 text-white relative z-10">
        <h1 className="text-4xl font-bold mt-8 mb-4">{rocket.rocket_name}</h1>
        {rocket.flickr_images.length > 0 && (
          <img
            src={rocket.flickr_images[0]}
            alt={rocket.rocket_name}
            className="mb-4 rounded-lg border-8 border-white shadow-md"
            style={{ maxHeight: "400px", filter: "brightness(0.6)" }}
          />
        )}
        <p className="text-gray-300 text-lg mb-4">{rocket.description}</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Rocket Details</h2>
            <p className="text-gray-300">
              <span className="font-bold">Height:</span> {rocket.height.meters} meters
            </p>
            <p className="text-gray-300">
              <span className="font-bold">Weight:</span> {rocket.mass.kg} kg
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Payload Weights</h2>
            {rocket.payload_weights.map((payload) => (
              <p key={payload.id} className="text-gray-300">
                <span className="font-bold">{payload.name}:</span> {payload.kg} kg
              </p>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Wikipedia</h2>
          <a
            href={rocket.wikipedia}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {rocket.wikipedia}
          </a>
        </div>
      </div>
    </div>
  );
};

export default RocketDetail;
