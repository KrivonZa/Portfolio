import React, { useEffect, useState } from "react";

export const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-full py-14 px-4">
      <div
        className={`duration-1000 ${
          isLoaded ? "opacity-100 translate-0" : "opacity-0 translate-x-20"
        }`}
      >
        <div className="text-4xl font-semibold">About me</div>
        <hr className="border-4 border-[#ffae13] my-4 ml-2 rounded-lg w-32" />
        <div className="px-6 py-4">
          Mặc dù phiên Satsuma đóng vai trò quan trọng trong cuộc Minh Trị Duy
          Tân và chiến tranh Boshin, và rất nhiều người xuất thân từ Satsuma nắm
          giữ những vị trí quan trọng của triều đình Minh Trị
        </div>
      </div>
    </div>
  );
};

export default About;
