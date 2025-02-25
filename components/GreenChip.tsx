"use client";
import React from "react";

export default function GreenChip({
  state,
  setActiveRegion,
  activeRegion,
}: {
  state: string;
  setActiveRegion: any;
  activeRegion: string;
}) {
  return (
    <span
      className={`min-w-20  border-2 border-mk-green-700 rounded-full px-2 py-1 text-mk-green-700 hover:cursor-pointer font-medium hover:bg-mk-green-700 hover:text-white transition-all duration-200 ${activeRegion === state ? "bg-mk-green-700 text-white" : "bg-white"}`}
      onClick={() => setActiveRegion(state)}
    >
      {state}
    </span>
  );
}
