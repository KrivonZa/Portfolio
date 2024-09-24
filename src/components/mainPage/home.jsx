import React from "react";
import { Outlet } from "react-router-dom";
import { Header, SideInformation } from "../componentTemplate";

export const Home = () => {
  return (
    <div className="grid grid-flow-col grid-cols-3 px-32 gap-x-10">
      <div className="col-span-1">
        <div className="bg-[#100d2b38] fixed top-1/2 left-0 transform -translate-y-1/2 translate-x-1/2 border-white border-2 shadow-[0_0_50px_5px_rgba(255,255,255,0.5)] rounded-3xl">
          <SideInformation />
        </div>
      </div>
      <div className="col-span-2 min-h-screen h-auto">
        <div className="flex flex-col justify-center items-center border-2 rounded-3xl relative overflow-hidden border-white my-14 pb-40 shadow-[0_0_50px_5px_rgba(255,255,255,0.5)]">
          <div className="w-full">
            <Header />
          </div>
          <div className="w-full flex-grow">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
