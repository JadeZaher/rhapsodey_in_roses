import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../assets/Logo.jpg";

const NavBar = () => {
  return (
    <div className="fixed right-5 bottom-5 flex h-20 w-[40%]  min-w-[300px] items-center justify-between rounded-md bg-slate-100">
      <Link href="/">
        <Image
          src={Logo}
          alt="logo"
          className=" mx-2  h-[70px] min-h-[40px] w-[70px] min-w-[70px]  rounded-lg object-cover shadow-lg"
        />
      </Link>
      <div className=" justify-between font-sans text-2xl font-black  [&>a]:px-5 [&>a]:text-[#000000]">
        <Link href="/about">About</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Contact</Link>{" "}
      </div>
    </div>
  );
};

export default NavBar;
