import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="h-[60px] fixed w-[90%] hidden sm:flex justify-between mt-5 items-center z-50 text-white">
      <h1 className="text-white font-bebas font-bold text-5xl">DEVHACKS</h1>
      <div className="w-[600px] hover:cursor-pointer   h-[50px] rounded-3xl hidden md:flex header items-center justify-between px-10 text-white font-jetbrains">
        <Link href='#'>Home</Link>
        <Link href="#sponsors">sponsors</Link>
        <Link href="#about">details</Link>
        <Link href="#faqs">faqs</Link>
        <Link href="#contact">about eds</Link>
      </div>
      <h1 className="text-white font-bebas font-bold text-2xl">echelon dev society</h1>
</div>  );
};

export default Header;
