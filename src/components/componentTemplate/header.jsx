import React from "react";

const Navigation = ({ page, setPage }) => (
  <nav className="bg-[#0c0a20] bg-opacity-70 text-white py-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:rounded-bl-3xl text-base sm:text-lg font-semibold">
    <ul className="flex justify-center xl:justify-end space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10">
      {["about", "certificates", "projects", "contact"].map((item) => (
        <li key={item}>
          <a
            className={`hover:text-[#ffae13] hover:cursor-pointer duration-300 ${
              page === item ? "text-[#ffae13]" : ""
            }`}
            onClick={() => setPage(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export const Header = ({ page, setPage }) => {
  return (
    <div>
      {/* Header for desktop (displayed at the top right) */}
      <div className="z-10 hidden xl:flex fixed top-0 right-0 w-full justify-end">
        <Navigation page={page} setPage={setPage} />
      </div>

      {/* Navigation for mobile (displayed at the bottom) */}
      <div className="fixed bottom-0 w-full xl:hidden">
        <Navigation page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Header;
