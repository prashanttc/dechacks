"use client";

import Link from "next/link";
import { socials } from "../lib/utils";
import Image from "next/image";

const Bot = () => (
  <footer className="flex items-center justify-center w-full py-5 border-t-2 border-white/50 z-10">
        <div className="flex items-center justify-between w-full px-10 flex-wrap gap-4">
          <h4 className="font-extrabold hidden md:block  text-[12px] md:text-[24px] text-white">
            echelon dev society
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            cdgi ,indore{" "}
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <Link href={social.link} key={social.name}>
                <Image
                  width={1000}
                  height={1000}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </Link>
            ))}
          </div>
    </div>
  </footer>
);

export default Bot;
