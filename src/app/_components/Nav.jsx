import React from "react";
import Link from "next/link";
import { navLinks } from "../../assets/data";
export default function Nav() {
  return (
    <section className="flex gap-x-96 py-6 px-10   z-50  sticky top-0 bg-secondary">
      <div className="flex justify-center items-center gap-2">
          <Link href="/" aria-label="home page"><h1 className="text-2xl  bg-gradient-to-r from-primary to-primary-700 text-transparent bg-clip-text  font-bold">BerryCare</h1></Link>
      </div>
      <ul className="flex gap-5 max-md:hidden">
        {navLinks.map((item, index) => (
          <li key={index} className="group font-semibold">
            <Link href={item.link}>{item.name}</Link>
            <div className="w-0 group-hover:w-full h-[2px] duration-300 bg-primary"></div>
          </li>
        ))}
      </ul>
    </section>
  );
}
