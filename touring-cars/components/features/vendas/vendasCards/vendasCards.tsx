"use client";
import img1 from "@/assets/images/RAM.png";
import img2 from "@/assets/images/SW4.png";
import img3 from "@/assets/images/SEA-DOO.png";

export function VendasCards() {
  const cars = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 py-10">
      {cars.map((car, index) => (
        <div
          key={index}
          className="w-[400px] h-64 bg-cover bg-center rounded-2xl relative shadow-lg hover:scale-105 hover:shadow-2xl transition-all"
          style={{ backgroundImage: `url(${car.img.src})` }}
        ></div>
      ))}
    </div>
  );
}
