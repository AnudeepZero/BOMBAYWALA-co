"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="container relative pt-6">
      <div className="flex justify-between items-center">

        <Link href="/" passHref>
          <Image src="/logo1.png" width={50} height={50} alt="logo" />
        </Link>

        {/* HAMBURGER BUTTON FOR MOBILE */}
        <div className="md:hidden">
          <button onClick={() => setNavbar(!navbar)}>
            {navbar ? (
              <AiOutlineMenuFold className="text-accent" size={30} />
            ) : (
              <AiOutlineMenuUnfold className="text-accent" size={30} />
            )}
          </button>
        </div>

        {/* Desktop Menu Items */}
        <ul className="md:flex gap-8 items-center font-semibold text-[14px] hidden">
          <li>
            <Link href="/" onClick={() => setNavbar(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setNavbar(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/gallery" onClick={() => setNavbar(false)}>
              Gallery
            </Link>
          </li>
          <button className="bg-accent text-white px-6 py-2 rounded-3xl">
            Menu
          </button>
        </ul>
      </div>

      {/* Mobile Menu Items */}
      <div
        className={`fixed top-0 left-0 right-0 z-20 bg-white shadow-lg transform ${
          navbar ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4">
          <Link href="/" passHref>
            <Image src="/logo1.png" width={50} height={50} alt="logo" />
          </Link>
          <button onClick={() => setNavbar(false)}>
            <AiOutlineMenuFold className="text-accent" size={30} />
          </button>
        </div>
        <ul className="flex flex-col items-center gap-4 font-semibold text-[14px] mt-4 p-4">
          <li>
            <Link href="/" onClick={() => setNavbar(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setNavbar(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/gallery" onClick={() => setNavbar(false)}>
              Gallery
            </Link>
          </li>
          <button className="bg-accent text-white px-6 py-2 rounded-3xl">
            Menu
          </button>
        </ul>
      </div>

      {/* Overlay */}
      {navbar && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => setNavbar(false)}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
