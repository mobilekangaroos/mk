"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImgAppleServiceProviderMobileBlack from "@/public/imgs/apple-service-provider-mobile-black.svg";
import { IoChevronForward } from "react-icons/io5";

interface AppleCardProps {
  device: string;
  url: string;
  type?: string;
}
export default function AppleCard({ device, url }: AppleCardProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleClick = () => {
    setIsActive((p) => !p);
  };

  return (
    <div
      className="_gradientContainer group rounded-lg p-[2px] bg-gradient-to-b from-mk-green-600 to-mk-green-200 hover:-translate-y-2 hover:shadow-md hover:cursor-pointer transition-all duration-300 "
      onClick={handleClick}
    >
      <div className="_brandCard w-full  h-24 leading-[20px] text-center px-6 bg-white rounded-lg shadow-sm group:hover:-translate-y-2 hover:shadow-md hover:cursor-pointer flex">
        <h4
          className={`grow h-min relative top-1/2 -translate-y-1/2 text-md text-left font-semibold ${isActive ? "hidden" : "block"}`}
        >
          {device}
        </h4>
        <Image
          alt="Apple Authorized Service Provider"
          src={ImgAppleServiceProviderMobileBlack}
          height={24}
          className={`${isActive ? "hidden" : "block"}`}
        ></Image>
        <a
          href="https://repairkangaroo.com/welcome"
          className={`${!isActive ? "hidden" : "block w-full"}`}
        >
          <div
            className={`text-gray-400 text-sm group ${isActive ? "flex items-center  h-full justify-center gap-4" : "hidden"}`}
          >
            <h5 className="group-hover:text-gray-700">
              Click here to start repair
            </h5>
            <IoChevronForward className="scale-[200%] ml-auto text-mk-green-500 group-hover:scale-[250%] group-hover:translate-x-1 transition-all duration-300 group-hover:text-blue-400" />
          </div>
        </a>
      </div>
    </div>
  );
}
