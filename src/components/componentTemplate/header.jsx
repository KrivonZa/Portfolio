import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = ({ page, setPage }) => {
  const navigate = useNavigate();

  return (
    <div className="z-10 flex justify-end">
      <nav className="bg-[#0c0a20] bg-opacity-70 text-white py-4 px-8 absolute rounded-bl-3xl text-lg font-semibold">
        <ul className="flex space-x-8 ">
          <li>
            <a
              className={`hover:text-[#ffae13] hover:cursor-pointer duration-300 ${
                page === "about" ? "text-[#ffae13]" : ""
              }`}
              onClick={() => setPage("about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              className={`hover:text-[#ffae13] hover:cursor-pointer duration-300 ${
                page === "certificates" ? "text-[#ffae13]" : ""
              }`}
              onClick={() => setPage("certificates")}
            >
              Certificates
            </a>
          </li>
          <li>
            <a
              className={`hover:text-[#ffae13] hover:cursor-pointer duration-300 ${
                page === "projects" ? "text-[#ffae13]" : ""
              }`}
              onClick={() => setPage("projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className={`hover:text-[#ffae13] hover:cursor-pointer duration-300 ${
                page === "contact" ? "text-[#ffae13]" : ""
              }`}
              onClick={() => setPage("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
