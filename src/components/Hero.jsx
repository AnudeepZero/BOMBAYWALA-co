import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div >
      <Image
        className="lg:w-[580px] xl:w-[800px] h-auto absolute top-10 right-0 -z-10"
        src="/hero1.png"
        width={1000}
        height={600}
        alt="hero_bg"
      />
      <div className="container h-[calc(100vh-120px)] grid items-center pt-24 sm:pt-0">
        <div className="space-y-4 bg-[#ffffff98] w-fit p-4">
          <p className="uppercase font-medium">Wide options of choice</p>
          <h2 className="text-4xl sm:text-6xl font-bold">
            Pioneer of <span className="text-accent">Indian Food</span>
          </h2>
          <p className="text-gray-700 text-[14px] sm:text-[16px]">
            Delicious taste and aroma. Let our food and ambience take you through the memory lanes of Bombay.
            <br /> What are you waiting for?
          </p>

          <button className="bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm:text-[16px]">
            Our Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
