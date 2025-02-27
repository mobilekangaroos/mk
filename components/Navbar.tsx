"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import mobileKangaroo from "@/public/imgs/mobileKangaroo-logo.svg";
import menuIcon from "@/public/imgs/mobile-menu-outline-3.svg";
import curveDivider from "@/public/imgs/curves-divider.svg";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleDropdownMenu = () => {
    setShowDropdown((n) => !n);
  };

  const NavDropdown = () => {
    return (
      <div
        className="absolute top-0 -translate-x-1/2 -translate-y-10 pt-20 left-1/2 w-40 flex flex-col"
        onMouseLeave={() => setShowDropdown(false)}
      >
        <div className="shadow-md px-4 h-2/5 py-8 bg-mk-green-500 w-40 mt-auto rounded-md">
          <ul className="flex flex-col gap-2 text-center">
            <Link href="/phones">
              <li className="text-white/75 hover:underline hover:cursor-pointer hover:text-white">
                Phones
              </li>
            </Link>
            <Link href="/tablets">
              <li className="text-white/75 hover:underline hover:cursor-pointer hover:text-white">
                Tablets
              </li>
            </Link>
            <Link href="/computers">
              <li className="text-white/75 hover:underline hover:cursor-pointer hover:text-white">
                Computers
              </li>
            </Link>
            <Link href="/game-consoles">
              <li className="text-white/75 hover:underline hover:cursor-pointer hover:text-white">
                Game Consoles
              </li>
            </Link>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <nav className="relative flex justify-between w-full pt-2 h-8 md:py-2 md:h-12 bg-mk-green-500 px-6 z-30">
      <section
        className={`_mobile-menu md:hidden absolute w-svw h-svh z-20 top-0 left-0 -translate-y-full bg-mk-green-400  flex flex-col items-center justify-start py-2 transition-all duration-500 ${showDropdown ? "translate-y-0" : "-translate-y-full"}`}
      >
        <article className="w-full px-6 flex justify-between">
          <Image
            alt="mobileKangaroo logo image"
            src={mobileKangaroo}
            onClick={() => (window.location.href = "/")}
            className="h-6 hover:cursor-pointer"
          ></Image>
          <IoCloseOutline
            className="h-8 w-8 text-white"
            onClick={handleDropdownMenu}
          ></IoCloseOutline>
        </article>
        <ul className="h-full my-40 grid grid-rows-5 content-center place-content-center text-white gap-8 text-center text-lg">
          <Link
            onClick={handleDropdownMenu}
            href="/#repairs"
            className="px-2 hover:cursor-pointer hover:-translate-y-[2px] hover:font-medium hover:underline underline-offset-8 transition-all duration-300 uppercase my-auto "
          >
            <li>repairs</li>
          </Link>
          <Link
            onClick={handleDropdownMenu}
            href="/business"
            className="px-2 hover:cursor-pointer hover:-translate-y-[2px] hover:font-medium hover:underline underline-offset-8 transition-all duration-300 uppercase my-auto "
          >
            <li>businesses</li>
          </Link>
          <Link
            onClick={handleDropdownMenu}
            href="/education"
            className="px-2 hover:cursor-pointer hover:-translate-y-[2px] hover:font-medium hover:underline underline-offset-8 transition-all duration-300 uppercase my-auto"
          >
            <li>schools</li>
          </Link>
          <Link
            onClick={handleDropdownMenu}
            href="/stores"
            className="px-2 hover:cursor-pointer hover:-translate-y-[2px] hover:font-medium hover:underline underline-offset-8 transition-all duration-300 uppercase my-auto"
          >
            <li>Stores</li>
          </Link>
          <Link
            onClick={handleDropdownMenu}
            href="/about"
            className="px-2 hover:cursor-pointer hover:-translate-y-[2px] hover:font-medium hover:underline underline-offset-8 transition-all duration-300 uppercase my-auto"
          >
            <li className="hover:cursor-pointer ">About</li>
          </Link>
        </ul>
      </section>
      <Image
        alt="mobileKangaroo logo image"
        src={mobileKangaroo}
        onClick={() => (window.location.href = "/")}
        className="hover:cursor-pointer"
      ></Image>
      <ul className="hidden md:grid grid-cols-5 content-center place-content-center text-white gap-4 text-center text-sm">
        <div
          className="_dropdown relative w-[100px]
     underline-offset-8 transition-all duration-300 uppercase my-auto"
        >
          <li onMouseEnter={() => setShowDropdown(true)}>repairs</li>
          {showDropdown && <NavDropdown />}
        </div>
        <Link
          href="/business"
          className="px-2 hover:cursor-pointer hover:-translate-y-[2px] hover:font-medium hover:underline underline-offset-8 transition-all duration-300 uppercase my-auto "
        >
          <li>businesses</li>
        </Link>
        <Link
          href="/education"
          className="px-2 hover:cursor-pointer hover:-translate-y-[2px] hover:font-medium hover:underline underline-offset-8 transition-all duration-300 uppercase my-auto"
        >
          <li>schools</li>
        </Link>
        <Link
          href="/stores"
          className="px-2 hover:cursor-pointer hover:-translate-y-[2px] hover:font-medium hover:underline underline-offset-8 transition-all duration-300 uppercase my-auto"
        >
          <li>Stores</li>
        </Link>
        <Link
          href="/about"
          className="px-2 hover:cursor-pointer hover:-translate-y-[2px] hover:font-medium hover:underline underline-offset-8 transition-all duration-300 uppercase my-auto"
        >
          <li className="hover:cursor-pointer ">About</li>
        </Link>
      </ul>
      <div className="flex space-x-2">
        <Image
          alt="mobileKangaroo logo image"
          src={menuIcon}
          className="md:hidden"
          onClick={handleDropdownMenu}
        ></Image>
      </div>
      <Image
        alt="mobileKangaroo logo image"
        src={curveDivider}
        className="md:hidden absolute outline w-[calc(100%+4px)] top-full left-0 "
      ></Image>
    </nav>
  );
}
