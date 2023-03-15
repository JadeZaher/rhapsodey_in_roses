import React from "react";
import NavBar from "./NavBar.component";
import Backround from "../components/Background.component";
import Bg2 from "../components/bg2.component";

const Layout = ({ children }) => {
  return (
    <>
      <div
        className={` z-0 flex min-h-screen w-screen flex-col items-center justify-center bg-[#E74C3C]`}
      >
        <Backround />
        <Bg2 />
        {/* for nav pl-[65px] md:pl-[136px] */}
        <NavBar />
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
