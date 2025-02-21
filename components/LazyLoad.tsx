"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import LoaderP from "./LoaderP";

export default function LazyLoad({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [isLoaded, setIsLoaded] = useState(false);

    if (inView && !isLoaded) {
      setIsLoaded(true);
    }

  return <div className="w-full h-full  z-0" ref={ref}>{isLoaded?children:<LoaderP/>}</div>;
}
