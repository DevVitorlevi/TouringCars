"use client";

import Image from "next/image";
import Logo from "@/assets/images/touringcars.png";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: "/", label: "Início" },
    { href: "/about", label: "Sobre" },
  ];

  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="w-full flex items-center justify-between p-5 relative z-50">
      {/* Logo */}
      <Image src={Logo} alt="Logo TouringCars" className="w-48 ml-15" />

      {/* Menu desktop */}
      <nav className="hidden md:block">
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

      {/* Ícone do menu mobile */}
      <button
        className="md:hidden p-2 rounded-xl hover:bg-gray-200 transition"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Abrir menu"
      >
        {menuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Overlay escuro */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#000000a1] bg-opacity-50 transition-opacity duration-300 z-40" />
      )}

      {/* Menu lateral mobile */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-6 mt-10">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-xl font-medium p-2 rounded-xl transition ${
                  isActive
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
