import React from "react";

import Link from "next/link";

const HomeService = ({ text, link, styles }) => {
  return (
    <Link href={`${link}`} style={styles}>
      <button className=" rounded-md border-2 border-solid border-offWhite p-4 px-8 font-semibold text-offWhite">
        {text}
      </button>
    </Link>
  );
};
export default HomeService;
