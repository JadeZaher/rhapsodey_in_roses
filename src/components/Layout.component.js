import React from "react";
import NavBar from "./NavBar.component";
import Roses from "../assets/RosesBg.jpg";

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(78,3,3,1) 0%, rgba(255,0,0,0.35898109243697474) 81%) , url(${Roses.src}) `,
        }}
        className={` flex min-h-screen flex-col items-center justify-center bg-cover bg-center`}
      >
        <NavBar />
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
