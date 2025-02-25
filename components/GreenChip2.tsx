"use client";
import Link from "next/link";
import React from "react";

export default function GreenChip2({
  state,
}: {
  state: string;
  setActiveRegion?: any;
  activeRegion?: string;
}) {
  return (
    <Link
      href={{ pathname: "/stores", query: { state: state } }}
      className="my-1"
    >
      <span
        className={`min-w-20 bg-white border-2 border-mk-green-700 rounded-full px-2 py-1 text-mk-green-700 hover:cursor-pointer font-medium hover:bg-mk-green-700 hover:text-white transition-all duration-200`}
      >
        {state}
      </span>
    </Link>
  );
}
