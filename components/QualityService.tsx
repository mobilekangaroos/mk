import React from "react";
import { IoShieldCheckmark } from "react-icons/io5";

export default function QualityService() {
  return (
    <article className="_qualityService text-left font-semibold pt-6 max-w-[40rem] mx-auto">
      <h4 className="text-xl text-center font-semibold md:text-2xl py-4 pb-10">
        Quality Service
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center space-y-6 md:space-y-0">
        <div className="_service space-y-2 flex flex-col items-center text-center text-mk-green-500">
          <IoShieldCheckmark className="scale-150" />
          <p>Apple Trained Technicians</p>
        </div>
        <div className="_service space-y-2 flex flex-col items-center text-center text-mk-green-500">
          <IoShieldCheckmark className="scale-150" />
          <p>90-day worldwide Apple warranty</p>
        </div>
        <div className="_service space-y-2 flex flex-col items-center text-center text-mk-green-500">
          <IoShieldCheckmark className="scale-150" />
          <p>Swift turnaround times</p>
        </div>
        <div className="_service space-y-2 flex flex-col items-center text-center text-mk-green-500">
          <IoShieldCheckmark className="scale-150" />
          <p>Original repair parts</p>
        </div>
      </div>
    </article>
  );
}
