import React, { useEffect, useState } from "react";
import { About, Certificates, Projects, Contact } from "../componentBody";
import { Header, SideInformation } from "../componentTemplate";

export const Home = () => {
  const [page, setPage] = useState("about");
  const [isVisible, setIsVisible] = useState(false);

  const renderPage = () => {
    switch (page) {
      case "certificates":
        return <Certificates />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      {/* Grid Layout for desktop and tablets */}
      <div className="min-h-screen flex flex-col items-center justify-center xl:grid xl:grid-cols-3 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 gap-4 sm:gap-8 md:gap-12 xl:gap-16">
        {/* Left Sidebar (Side Information) */}
        <div className="col-span-1 flex justify-center">
          <div
            className={`bg-[#100d2b1e] xl:fixed xl:top-0 mt-12 sm:mt-16 md:mt-20 border-white border-2 shadow-[0_0_50px_5px_rgba(255,255,255,0.5)] rounded-3xl transform duration-1000 ${
              isVisible
                ? "opacity-100 translate-0"
                : "opacity-0 -translate-y-20"
            }`}
          >
            <SideInformation />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="col-span-2 min-h-screen h-auto max-w-full sm:max-w-[640px] md:max-w-[720px] lg:max-w-[800px] mx-auto">
          <div
            className={`flex flex-col justify-center items-center border-2 rounded-3xl relative overflow-hidden border-white my-10 sm:my-12 md:my-14 shadow-[0_0_50px_5px_rgba(255,255,255,0.5)] transform duration-1000 ${
              isVisible ? "opacity-100 translate-0" : "opacity-0 translate-y-20"
            }`}
          >
            {/* Header for larger screens */}
            <div className="w-full hidden xl:block">
              <Header setPage={setPage} page={page} />
            </div>

            {/* Content Rendering */}
            <div className="w-full p-4 sm:p-6 md:p-8">{renderPage()}</div>
          </div>
        </div>
      </div>

      {/* Header for smaller screens */}
      <div className="w-full xl:hidden block mt-4 sm:mt-6 md:mt-8">
        <Header setPage={setPage} page={page} />
      </div>
    </div>
  );
};

export default Home;
