"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { IoChevronForward } from "react-icons/io5";

export default function BrandCard({
  device = "Samsung",
  url = "https://mobilekangaroo.com/phone_repairs",
  type,
  imgRef,
  iconWidth,
}: {
  device: string;
  url: string;
  type?: string;
  imgRef: string;
  iconWidth: number;
}) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleClick = () => {
    setIsActive((p) => !p);
  };
  const handleMouseLeave = () => {
    setIsActive(false);
  };
  return (
    <div
      className={`_brandCard w-full  h-24 leading-[20px] text-center px-6 bg-white rounded-lg shadow-sm hover:-translate-y-2 hover:shadow-md hover:cursor-pointer transition-all duration-300 flex`}
      onClick={handleClick}
    >
      <Image
        alt="Samsung Phone"
        src={`/imgs/${imgRef}`}
        width={iconWidth}
        height={28}
        className={`${isActive ? "hidden" : "block"}`}
      />
      <h4
        className={`grow h-min relative top-1/2 -translate-y-1/2 text-md font-semibold ${isActive ? "hidden" : "block"}`}
      >
        {device}
      </h4>
      <a
        href="https://repairkangaroo.com/welcome"
        className={`${!isActive ? "hidden" : "block w-full"}`}
      >
        <div
          className={`text-gray-400 text-sm group ${isActive ? "flex items-center h-full justify-center gap-4" : "hidden"}`}
        >
          <h5 className="group-hover:text-gray-700 text-md">
            Click here to start repair
          </h5>
          <IoChevronForward className="scale-[200%]  text-mk-green-500 group-hover:scale-[250%] group-hover:translate-x-1 transition-all ml-auto duration-300 group-hover:text-blue-400" />
        </div>
      </a>
    </div>
  );
}
