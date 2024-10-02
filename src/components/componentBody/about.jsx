import React, { useEffect, useState } from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";

export const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-full py-14 px-4">
      <div
        className={`duration-700 ${
          isLoaded ? "opacity-100 translate-0" : "opacity-0 translate-x-20"
        }`}
      >
        <div className="text-4xl font-semibold duration-500">About me</div>
        <hr className="border-4 border-[#ffae13] my-4 ml-2 rounded-lg w-32" />
      </div>
      <div
        className={`duration-1000 py-4 ${
          isLoaded ? "opacity-100 translate-0" : "opacity-0 translate-x-20"
        }`}
      >
        <div className="bg-[#005F7C] bg-opacity-60 rounded-3xl px-6 py-8 shadow-xl">
          Hello! My name is Truong Tan Dung, but you can call me Kevin for
          short. I am a software developer focusing on frontend development,
          especially in web and mobile applications. I come from Tien Giang
          province, Vietnam, known as the "Kingdom of Fruits" and the birthplace
          of "Đờn ca tài tử Nam Bộ," a unique traditional art form. With a
          strong passion for technology, I'm always looking for opportunities to
          improve my skills and create high-quality products for users. I enjoy
          exploring new technologies, participating in creative projects, and
          working in collaborative environments where I can learn from others
          and share my ideas.
        </div>

        <div className="my-8">
          <div className="text-center text-2xl font-semibold mb-4">
            Primary Focus
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:gap-x-6 gap-y-6">
            <div className="w-full sm:w-1/2 min-h-[150px] bg-[#005F7C] bg-opacity-60 rounded-3xl shadow-xl p-4 mb-4 sm:mb-0">
              <div className="flex gap-x-2">
                <div className="flex justify-center items-center">
                  <AiOutlineGlobal size={32} className="text-[#ffae13]" />
                </div>
                <div>
                  <div className="font-bold text-lg mb-2">
                    Web design and development
                  </div>
                  <div>
                    Creating responsive, user-friendly experiences that
                    prioritize usability and collaboration.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 min-h-[150px] bg-[#005F7C] bg-opacity-60 rounded-3xl shadow-xl p-4">
              <div className="flex gap-x-2">
                <div className="flex justify-center items-center">
                  <IoPhonePortraitOutline
                    size={32}
                    className="text-[#ffae13]"
                  />
                </div>
                <div>
                  <div className="font-bold text-lg mb-2">Mobile App</div>
                  <div>
                    Focused on mobile app development, creating intuitive
                    applications for seamless user experiences.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
