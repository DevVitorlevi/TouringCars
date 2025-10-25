"use client";
import Image from "next/image";
import Porsche from "@/assets/images/porsche-model5 1.png";

export function Hero() {
  return (
    <section className="w-full h-[95vh] flex flex-col lg:flex-row items-center justify-center lg:justify-between">
      {/* Texto */}
      <div className="text-center lg:text-left flex justify-center lg:block">
        <h1 className="font-bold text-4xl md:text-7xl xl:text-7xl 2xl:text-8xl leading-tight lg:ml-10">
          Qualidade,
          <br />
          Segurança,
          <br />
          Transparência.
        </h1>
      </div>

      {/* Imagem */}
      <div className="flex justify-center lg:justify-end w-full">
        <Image
          src={Porsche}
          alt="Porsche"
          className="w-full max-w-[900px] h-auto object-contain lg:object-right"
          priority
        />
      </div>
    </section>
  );
}
