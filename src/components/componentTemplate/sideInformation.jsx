import React from "react";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import {
  IoHourglassOutline,
  IoLocationOutline,
  IoPersonOutline,
} from "react-icons/io5";

export const SideInformation = () => {
  return (
    <div className="p-8 flex flex-col items-center w-[25vw] shadow-lg rounded-3xl">
      {/* Avatar */}
      <div className="border-4 border-white w-32 h-32 rounded-full overflow-hidden shadow-md">
        <img src="/Image.png" className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <div className="text-2xl text-white text-center mt-6 font-semibold">
        Truong Tan Dung
      </div>

      {/* Animated Roles */}
      <div className="text-lg text-gray-200 font-mono m-2 text-center">
        <TypeAnimation
          sequence={[
            "Programmer",
            1000,
            "Translator",
            1000,
            "Gamer",
            1000,
            "Traveller",
            1000,
            "Coffee Addict",
            1000,
            "Music Lover",
            1000,
          ]}
          speed={50}
          wrapper="span"
          repeat={Infinity}
        />
      </div>

      {/* Divider */}
      <hr className="border-t border-white opacity-50 my-6 w-full" />

      {/* Information List */}
      <div className="space-y-6 w-full text-white">
        {/* Age */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <IoHourglassOutline className="text-2xl" />
            <div className="text-sm font-light">Age</div>
          </div>
          <div className="text-lg">
            <CountUp end={21} duration={3} />
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <IoLocationOutline className="text-2xl" />
            <div className="text-sm font-light">Location</div>
          </div>
          <div className="text-lg">Viet Nam</div>
        </div>

        {/* Personality Type */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <IoPersonOutline className="text-2xl" />
            <div className="text-sm font-light">Personality Type</div>
          </div>
          <div className="text-lg">INTJ</div>
        </div>
      </div>
    </div>
  );
};

export default SideInformation;
