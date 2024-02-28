"use client";;

import Image from "next/image";
import { useEffect, useRef } from "react";

export function ScrollToUp(): JSX.Element {
  const buttonRef = useRef<HTMLButtonElement>(null);

  function onScroll() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    function handleScroll() {
      if (buttonRef.current) {
        if (window.scrollY > 300) {
          buttonRef.current.style.opacity = "1";
        } else {
          buttonRef.current.style.opacity = "0";
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button onClick={onScroll} className="fixed z-1 opacity-0 right-5 bottom-5 cursor-pointer bg-primary-800 inline-flex items-center rounded-full justify-center w-10 h-10" ref={buttonRef}>
      <Image src="/icons/chevron-up.svg" alt="Scroll to top" width={24} height={24} />
    </button>
  );
};