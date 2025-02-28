"use client";
import { BarChart, X } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full sm:hidden h-[60px] bg-black items-center flex px-5 justify-between fixed top-0 z-50">
        <h1 className="font-bebas text-white text-2xl">DEVHACKS</h1>
        {isMenuOpen ? (
          <X className="hover:cursor-pointer text-white" onClick={toggleMenu} />
        ) : (
          <BarChart
            className="rotate-90 hover:cursor-pointer text-white"
            onClick={toggleMenu}
          />
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-[60px] left-0 w-full bg-black z-40 transition-all duration-300 ease-in-out sm:hidden ${
          isMenuOpen
            ? "max-h-[300px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col p-5 gap-4">
          <Link
            href="/#home"
            scroll={true}
            className="text-white text-md font-bold uppercase font-jetbrains hover:text-gray-300 transition-colors"
            onClick={toggleMenu}
          >
            home
          </Link>
          <Link
            href="/#about"
            scroll={true}
            className="text-white text-md font-bold uppercase font-jetbrains hover:text-gray-300 transition-colors"
            onClick={toggleMenu}
          >
            about
          </Link>
          <Link
            href="/#problem"
            scroll={true}
            className="text-white text-md font-bold uppercase font-jetbrains hover:text-gray-300 transition-colors"
            onClick={toggleMenu}
          >
            Problems
          </Link>
          <Link
            href="/#sponsors"
            scroll={true}
            className="text-white text-md font-bold uppercase font-jetbrains hover:text-gray-300 transition-colors"
            onClick={toggleMenu}
          >
            sponsors
          </Link>
          <Link
            href="/#faqs"
            scroll={true}
            className="text-white text-md font-bold uppercase font-jetbrains hover:text-gray-300 transition-colors"
            onClick={toggleMenu}
          >
            faqs
          </Link>
          <Link
            href="/#contact"
            scroll={true}
            className="text-white text-md font-bold uppercase font-jetbrains hover:text-gray-300 transition-colors"
            onClick={toggleMenu}
          >
            eds
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
