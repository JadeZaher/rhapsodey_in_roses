import React from "react";

import Link from "next/link";

const CTAButton = ({
  text,
  link,
  styles,
  color = "offWhite",
}: {
  text: string;
  link: string;
  styles: object;
  color: string;
}) => {
  return (
    <Link href={`${link}`} style={styles}>
      <button
        className={` rounded-md border-2 border-solid border-${color} p-4 px-8 font-semibold text-${color}`}
      >
        {text}
      </button>
    </Link>
  );
};
export default CTAButton;
