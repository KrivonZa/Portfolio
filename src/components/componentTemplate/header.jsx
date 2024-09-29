import React from "react";

const Navigation = ({ page, setPage }) => (
  <nav className="bg-[#0c0a20] bg-opacity-70 text-white py-4 px-8 xl:rounded-bl-3xl text-lg font-semibold">
    <ul className="flex space-x-8">
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
      <div className="z-10 hidden justify-end xl:flex fixed top-0 right-0 w-full">
        <Navigation page={page} setPage={setPage} />
      </div>
      <div className="fixed bottom-0 w-full xl:hidden">
        <Navigation page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Header;
