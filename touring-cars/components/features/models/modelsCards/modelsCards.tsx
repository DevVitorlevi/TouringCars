"use client";
import Hybrid from "@/assets/images/Hybrid.png";
import Combustion from "@/assets/images/Combustion.png";
import Eletric from "@/assets/images/Eletric.png";

export function ModelCards() {
  const cars = [
    { name: "Hybrid", img: Hybrid },
    { name: "Combustion", img: Combustion }, 
    { name: "Eletric", img: Eletric },
  ];

  return (

    <div className="w-full flex flex-col xl:flex-row justify-center items-center gap-4  py-10">
      {cars.map((car) => (
        <div
          key={car.name}
          className="w-[90vw] h-64 md:h-[400px] lg:h-[600px] xl:w-[30vw] xl:h-64 2xl:w-[410px] bg-cover bg-center rounded-2xl relative shadow-lg hover:scale-105 hover:shadow-2xl transition-all"
          style={{ backgroundImage: `url(${car.img.src})` }}
        >
          <div className="absolute inset-0 bg-opacity-40 rounded-2xl flex items-end justify-start ml-5 p-3">
            <h2 className="text-white text-2xl">{car.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
