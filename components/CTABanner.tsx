import Link from "next/link";
import React from "react";

export default function CTABanner() {
  return (
    <article
      className="_ctaBanner px-4 flex flex-col items-center gap-4 py-6 text-white text-center"
      style={{
        backgroundImage: `url('/imgs/cta-banner-bg.svg')`,
      }}
    >
      <h4 className="text-2xl font-semibold">
        Don’t spend another day without your device
      </h4>
      <p>Our quick return service drastically decreases your waiting time</p>
      <a href="https://repairkangaroo.com/welcome">
        <button className="w-auto text-base px-10 py-1 text-mk-green-600 font-semibold bg-white border-white border-2 rounded-full hover:scale-105 transition-all duration-300">
          Repair Options
        </button>
      </a>
      <Link href="/stores">
        <button className="w-auto text-base px-6 py-1 border-white border-2 rounded-full hover:scale-105 transition-all duration-300">
          Find Nearest Store
        </button>
      </Link>
    </article>
  );
}
