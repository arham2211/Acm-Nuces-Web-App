import React, { useState } from 'react';
import Player from "../../assets/images/houses/player.png";
import RealMadridPlayer from "../../assets/images/houses/real-madrid-player.png";
import ManchestorPlayer from "../../assets/images/houses/manchestor-player.png";
import BarcelonaPlayer from "../../assets/images/houses/barcelona-player.webp";
import ArsenalPlayer from "../../assets/images/houses/arsenal-player.png";
import RealMadrid from "../../assets/images/houses/real-madrid.png";
import Manchestor from "../../assets/images/houses/manchestor.png";
import Barcelona from "../../assets/images/houses/barcelona.png";
import Arsenal from "../../assets/images/houses/arsenal.png";
import Background from "../../assets/images/houses/bg.png";

const HousesSection = () => {
  
  const [currentPlayer, setCurrentPlayer] = useState(Player);

  
  const handleHover = (playerImage) => setCurrentPlayer(playerImage);

  
  const handleMouseLeave = () => setCurrentPlayer(Player);

  return (
    <div className="relative flex flex-col justify-center items-center gap-y-4 p-8 min-h-screen overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div
          className="w-full md:w-11/12 h-screen bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${Background})` }}
        />
      </div>

      {/* Title Section */}
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold z-10">
        HOUSES DETAILS
      </h1>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-y-8 lg:gap-x-4 z-10">
        {/* Left Column */}
        <div className="flex flex-col items-center gap-y-8 p-6 md:p-12">
          <ClubCard
            image={RealMadrid}
            playerImage={RealMadridPlayer}
            name="Real Madrid"
            handleHover={handleHover}
            handleMouseLeave={handleMouseLeave}
          />
          <ClubCard
            image={Arsenal}
            playerImage={ArsenalPlayer}
            name="Arsenal"
            handleHover={handleHover}
            handleMouseLeave={handleMouseLeave}
          />
        </div>

        {/* Player Image (Center) */}
        <div className="w-full md:w-3/4 lg:w-auto flex justify-center">
          <img src={currentPlayer} alt="Player" className="w-full md:w-3/4 lg:w-auto" />
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center gap-y-8 p-6 md:p-12">
          <ClubCard
            image={Manchestor}
            playerImage={ManchestorPlayer}
            name="Manchestor"
            handleHover={handleHover}
            handleMouseLeave={handleMouseLeave}
          />
          <ClubCard
            image={Barcelona}
            playerImage={BarcelonaPlayer}
            name="Barcelona"
            handleHover={handleHover}
            handleMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </div>
  );
};

// ClubCard Component
const ClubCard = ({ image, playerImage, name, handleHover, handleMouseLeave }) => (
  <div
    className="card justify-center items-center flex flex-col gap-y-4 p-8 cursor-pointer"
    onMouseEnter={() => handleHover(playerImage)}
    onMouseLeave={handleMouseLeave}
  >
    <img src={image} alt={name} className="w-48 md:w-64" />
    <p className="text-white text-sm md:text-base text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
);

export default HousesSection;
