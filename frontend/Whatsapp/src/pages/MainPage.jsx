import React from "react";
import { FaRegSquarePlus } from "react-icons/fa6";

import SideBar from "../components/SideBar";
import { BsThreeDotsVertical } from "react-icons/bs";

const MainPage = () => {
  return (
    <>
      <div className="grid grid-cols-12  h-149">
        {/* side area */}
        <SideBar />
        {/* all chats */}
        <div className="col-span-5 bg-[#161717]">
          <div className="container flex justify-between items-center p-5">
            <h4 className="text-2xl text-white font-semibold">WhatsApp</h4>
            <div className="flex items-center justify-center text-white gap-3">
              <FaRegSquarePlus />
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>
        {/* single chat and messages */}
        <div className="col-span-6 bg-black">
          <div className="header bg-[#1A0A2E]"></div>
          <div className="mainchat">
            <img
              className="w-full"
              src="https://camo.githubusercontent.com/c42c83df2fd1e442ef1e0ed69cc20d21f65308fc2f0dca2a8035360738d49c8c/68747470733a2f2f7765622e77686174736170702e636f6d2f696d672f62672d636861742d74696c652d6461726b5f61346265353132653731393562366237333364393131306234303866303735642e706e67"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
