import React from "react";

export const Header = () => {
  return (
    <div className="z-10 flex justify-end">
      <nav className="bg-[#0c0a20] bg-opacity-70 text-white py-4 px-8 absolute rounded-bl-3xl text-xl font-semibold">
        <ul className="flex space-x-8 ">
          <li>
            <a className="hover:text-[#ffae13] hover:cursor-pointer duration-300">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-[#ffae13] hover:cursor-pointer duration-300">
              Certificates
            </a>
          </li>
          <li>
            <a className="hover:text-[#ffae13] hover:cursor-pointer duration-300">
              Projects
            </a>
          </li>
          <li>
            <a className="hover:text-[#ffae13] hover:cursor-pointer duration-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
