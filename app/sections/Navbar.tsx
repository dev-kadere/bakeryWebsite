"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navBarLinks = [
    { name: "Home", href: "#" },
    { name: "Offers", href: "#offers" },
    { name: "Services", href: "#services" },
    { name: "Delivery", href: "#delivery" },
    { name: "Philosophy", href: "#Philosophy" },
    { name: "Features", href: "#features" },
    { name: "Contact", href: "#contact" },
  ];
  const firstNavs = navBarLinks.slice(0, 3);
  const secondNavs = navBarLinks.slice(4, 7);

  return (
    <header className="flex flex-row justify-between items-center px-5 py-3 shadow-md">
      <button className="hidden md:block">
        <img src="/icons/search.svg" alt="search" className="w-4 h-4" />
      </button>

      <nav className="hidden  md:flex flex-row gap-5 text-xl text-[var(--primary-color)]">
        {firstNavs.map((link, index) => (
          <Link key={index} href={link.href}>
            {link.name}
          </Link>
        ))}
      </nav>
      <Image src="/logo.png" alt="logoImage" width={90} height={60} />
      <nav className="hidden md:flex flex-row gap-5 text-xl  text-[var(--primary-color)]">
        {secondNavs.map((link, index) => (
          <Link key={index} href={link.href}>
            {link.name}
          </Link>
        ))}
      </nav>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
        <img
          src={isOpen ? "/icons/close.svg" : "/icons/menu.svg"}
          alt="menuIcon"
          className="w-6 h-6"
        />
      </button>
      <div
        className={`fixed top-24 left-0 h-full p-5 w-60 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <div className="flex flex-col text-[var(--black-color)] text-xl gap-5 ">
          {navBarLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
