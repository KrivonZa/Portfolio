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
    <div className="grid grid-cols-1 xl:grid-cols-3 px-4 xl:px-32 gap-4 xl:gap-16">
      <div className="col-span-1 flex justify-center">
        <div
          className={`bg-[#100d2b1e] xl:fixed xl:top-0 mt-20 border-white border-2 shadow-[0_0_50px_5px_rgba(255,255,255,0.5)] rounded-3xl transform duration-1000 ${
            isVisible ? "opacity-100 translate-0" : "opacity-0 -translate-y-20"
          }`}
        >
          <SideInformation />
        </div>
      </div>
      <div className="col-span-2 min-h-screen h-auto max-w-[800px] min-w-[400px] mx-auto">
        <div
          className={`flex flex-col justify-center items-center border-2 rounded-3xl relative overflow-hidden border-white my-14 shadow-[0_0_50px_5px_rgba(255,255,255,0.5)] max-w-screen-md transform duration-1000 ${
            isVisible ? "opacity-100 translate-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="w-full">
            <Header setPage={setPage} page={page} />
          </div>
          <div className="">{renderPage()}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
