import React, { useState, useEffect } from "react";
import Link from "next/link";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [windowSize, setWindowSize] = useState({
    height: 1,
    width: 1,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });

      if (window.innerWidth > 640) {
        setNav(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [nav]);

  return (
    <div
      className={`
      ${nav ? "" : "rounded-br-md"}
      ${nav ? "w-full" : "w-[65px] sm:w-fit"}
      ${nav ? "h-full" : "h-[65px] sm:h-fit"}
      fixed top-[0px] left-0 z-10 hidden  flex-col items-center justify-between bg-[#F0F0F0] p-[12px] duration-300 sm:top-[50%] sm:translate-y-[-50%] sm:rounded-tr-md`}
    >
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className={`
        absolute mt-1 flex flex-col items-center justify-center sm:hidden`}
      >
        <div
          className={`
          ${nav ? "translate-y-[9px] rotate-45" : "translate-y-0 rotate-0"}
            my-[2px] flex h-[5px] w-[40px] items-center justify-center rounded-sm bg-black duration-200 sm:hidden`}
        />
        <div
          className={`
        ${nav ? "rotate-[-45deg]" : "rotate-0"}
        my-[2px] flex h-[5px] w-[40px] rounded-sm bg-black duration-300 sm:hidden`}
        />
        <div
          className={`
        ${nav ? "opacity-0" : "opacity-100"}
        my-[2px] flex h-[5px] w-[40px] rounded-sm bg-black duration-300 sm:hidden`}
        />
      </div>
      <div
        onClick={() => {
          setNav(false);
        }}
        className={`
        ${nav ? " delay-75" : " delay-[-100ms]"}
        ${nav ? " pointer-events-auto" : "pointer-events-none"}
        ${nav ? "h-full" : "h-0"}
        ${nav ? "opacity-100" : "opacity-0"}
        flex flex-col items-center justify-evenly text-center font-sans text-xl font-black duration-300 sm:pointer-events-auto sm:flex sm:h-full sm:items-start sm:opacity-100 [&>a]:text-[#1E050B] sm:[&>a]:px-5 [&>a]:sm:py-[24px]`}
      >
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default NavBar;
