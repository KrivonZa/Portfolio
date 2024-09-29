import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import {
  IoHourglassOutline,
  IoLocationOutline,
  IoPersonOutline,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoReddit,
  IoLogoGithub,
} from "react-icons/io5";

export const SideInformation = () => {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartCount(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const openTab = (url) => {
    window.open(url, '_blank'); // Mở trong tab mới
  };

  return (
    <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col items-center w-full sm:w-[75vw] md:w-[50vw] lg:w-[30vw] xl:w-[25vw] shadow-lg rounded-3xl">
      {/* Avatar */}
      <div className="border-4 border-white w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md">
        <img src="/Image.png" className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white text-center mt-4 sm:mt-5 md:mt-6 font-semibold">
        Truong Tan Dung
      </div>

      {/* Animated Roles */}
      <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-mono m-2 text-center">
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
      <hr className="border-t border-white opacity-50 my-4 sm:my-5 md:my-6 w-full" />

      {/* Information List */}
      <div className="space-y-4 sm:space-y-5 md:space-y-6 w-full text-white">
        {/* Age */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <IoHourglassOutline className="text-2xl sm:text-3xl" />
            <div className="text-sm sm:text-base md:text-lg font-medium text-[#ffae13]">Age</div>
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl">
            {startCount ? <CountUp start={0} end={21} duration={5} /> : "0"}{" "}
            years old
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <IoLocationOutline className="text-2xl sm:text-3xl" />
            <div className="text-sm sm:text-base md:text-lg font-medium text-[#ffae13]">Location</div>
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl">Viet Nam</div>
        </div>

        {/* Personality Type */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <IoPersonOutline className="text-2xl sm:text-3xl" />
            <div className="text-sm sm:text-base md:text-lg font-medium text-[#ffae13]">
              Personality Type
            </div>
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl">INTJ</div>
        </div>
      </div>

      <hr className="border-t border-white opacity-50 my-4 sm:my-5 md:my-6 w-[60%]" />

      <div className="flex justify-between items-center gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12 text-3xl sm:text-4xl">
        <div className="relative group cursor-pointer" onClick={()=>openTab('https://www.facebook.com/tandung.truong.9828/')}>
          <IoLogoFacebook className="relative z-10 text-white group-hover:text-[#ffae13] duration-300" />
          <div className="absolute inset-0 bg-[#ffae13] opacity-0 group-hover:opacity-50 group-hover:blur-lg transition-all duration-300 rounded-full"></div>
        </div>
        <div className="relative group cursor-pointer" onClick={()=>openTab('https://www.linkedin.com/in/dung-truong-a48675268/')}>
          <IoLogoLinkedin className="relative z-10 text-white group-hover:text-[#ffae13] duration-300" />
          <div className="absolute inset-0 bg-[#ffae13] opacity-0 group-hover:opacity-50 group-hover:blur-lg transition-all duration-300 rounded-full"></div>
        </div>
        <div className="relative group cursor-pointer" onClick={()=>openTab('https://www.reddit.com/user/KevZain/')}>
          <IoLogoReddit className="relative z-10 text-white group-hover:text-[#ffae13] duration-300" />
          <div className="absolute inset-0 bg-[#ffae13] opacity-0 group-hover:opacity-50 group-hover:blur-lg transition-all duration-300 rounded-full"></div>
        </div>
        <div className="relative group cursor-pointer" onClick={()=>openTab('https://github.com/KrivonZa')}>
          <IoLogoGithub className="relative z-10 text-white group-hover:text-[#ffae13] duration-300" />
          <div className="absolute inset-0 bg-[#ffae13] opacity-0 group-hover:opacity-50 group-hover:blur-lg transition-all duration-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SideInformation;
