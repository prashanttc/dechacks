import React from "react";
import Link from "next/link";
import { HyperText } from "./magicui/hyper-text";

const Header = () => {
  return (
    <div className="h-[60px] fixed w-[90%] hidden sm:flex justify-between mt-5 items-center z-50 text-white">
      <h1 className="text-white font-bebas font-bold text-5xl">DEVHACKS</h1>
      <div className="w-[600px] hover:cursor-pointer   h-[50px] rounded-3xl hidden md:flex header items-center justify-between px-10 text-white font-jetbrains">
        <Link href='#'>
        <HyperText className="text-md font-jetbrains">home</HyperText></Link>
        <Link href="#sponsors"> <HyperText className="text-md font-jetbrains">sponsors</HyperText></Link>
        <Link href="#about"> <HyperText className="text-md font-jetbrains">about</HyperText></Link>
        <Link href="#faqs"> <HyperText className="text-md font-jetbrains">faqs</HyperText></Link>
        <Link href="#contact"> <HyperText className="text-md font-jetbrains">eds</HyperText> </Link>
      </div>
      <h1 className="text-white font-bebas font-bold text-2xl">echelon dev society</h1>
</div>  );
};

export default Header;
