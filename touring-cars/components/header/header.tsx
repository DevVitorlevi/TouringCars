"use client";

import Image from "next/image";
import Logo from "@/assets/images/touringcars.png";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Início" },
    { href: "/about", label: "Sobre" },
  ];

  return (
    <header className="w-full flex items-center justify-between p-10">
      <Image src={Logo} alt="Logo TouringCars" className="w-48" />
      <nav>
        <ul className="flex gap-6 text-2xl font-medium">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`p-2 rounded-2xl transition-all ${
                    isActive
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
