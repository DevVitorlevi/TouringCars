"use client";

import Image from "next/image";
import Logo from "@/assets/images/touringcars.png";

export function Footer() {
  return (
  
  <div className="flex justify-center">
        <footer className="w-[80vw] border-t-[1] border-t-black flex flex-col md:flex-row items-center justify-center gap-10 p-10">
          <Image src={Logo} alt="Logo TouringCars" className="w-48 h-auto" />
          <p className="text-2xl text-center md:text-left">
            Desenvolvido por{" "}
            <a
              href="https://github.com/DevVitorlevi"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-500 transition-colors"
            >
              Vitor Levi
            </a>
          </p>
        </footer>
  </div>
  );
}
