"use client";
import Image from "next/image";
import React from "react";
import mobileKangaroo from "@/public/imgs/mobileKangaroo-logo.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="relative bg-black text-white pt-6 px-4 pb-6 rounded-t-3xl text-center flex flex-col items-center gap-y-6">
      <section
        className={`_appleLegend text-center ${pathname === "/" ? "visible" : "hidden"} flex flex-col items-center space-y-4`}
      ></section>
      <section className="w-full gap-2 md:gap-8">
        <div className="flex justify-around md:justify-center text-left text-sm text-gray-500 font-light py-4 md:px-12 space-x-2 md:space-x-8 md:gap-20">
          <ul className="text-gray-400 space-y-1">
            <li>
              <Link href="/phones">Phones</Link>
            </li>
            <li>
              <Link href="/tablets">Tablets</Link>
            </li>
            <li>
              <Link href="/computers">Computers</Link>
            </li>
            <li>
              <Link href="/game-consoles">Game Consoles</Link>
            </li>
          </ul>
          <ul className="text-gray-400 space-y-1">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/stores">Stores</Link>
            </li>
            <li>
              <Link href="/business">Businesses</Link>
            </li>
            <li>
              <Link href="/education">Education</Link>
            </li>
          </ul>
        </div>
        <article className="_brandFooter pt-6">
          <div className="w-full grid place-items-center">
            <Image alt="mobileKangaroo logo image" src={mobileKangaroo}></Image>
          </div>
          <h6>mobilekangaroo</h6>
          <p className="text-gray-400 font-light text-xs">2003 - 2024</p>
          <p className="text-gray-400 font-light text-xs">
            ® All Rights Reserved
          </p>
        </article>
      </section>
    </footer>
  );
}
