import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="h-[60px] fixed w-[90%] hidden sm:flex justify-between mt-5 items-center z-[99] text-white">
      <h1 className="text-white font-bebas font-bold text-5xl">DEVHACKS</h1>
      <div className="w-[600px] hover:cursor-pointer h-[50px] rounded-3xl hidden md:flex header items-center justify-between px-10 text-white font-jetbrains">
        <Link href="/#home" scroll={true}>
          <p className="text-md font-bold uppercase font-jetbrains">home</p>
        </Link>
        <Link href="/#about" scroll={true}>
          <p className="text-md font-bold uppercase font-jetbrains">about</p>
        </Link>
        <Link href="/#problem" scroll={true}>
          <p className="text-md font-bold uppercase font-jetbrains">Problems</p>
        </Link>
        <Link href="/#sponsors" scroll={true}>
          <p className="text-md font-bold uppercase font-jetbrains">sponsors</p>
        </Link>
        <Link href="/#faqs" scroll={true}>
          <p className="text-md font-bold uppercase font-jetbrains">faqs</p>
        </Link>
        <Link href="/#contact" scroll={true}>
          <p className="text-md font-bold uppercase font-jetbrains">eds</p>
        </Link>
      </div>
      <h1 className="text-white font-bebas font-bold text-2xl">
        echelon dev society
      </h1>
    </div>
  );
};

export default Header;
