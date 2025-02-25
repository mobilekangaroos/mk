import React from "react";
import { IoLogInOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

interface RepairCardProps {
  device: string;
  alt: string;
  description: string;
  url: string;
  img: string;
}
export default function RepairCard({
  device,
  description,
  alt,
  url = "/phones",
  img = "/imgs/device-mobile-icon.png",
}: RepairCardProps) {
  return (
    <Link href={url}>
      <div className="_repairCard relative shadow-sm bg-white rounded-2xl grid grid-rows-[24px,96px,36px,auto] py-2 px-3 place-items-center text-center h-auto pb-6 hover:shadow-md hover:-translate-y-2 transition-all duration-500 [&_path]:text-blue-500 hover:[&_path]:text-blue-700">
        <span className="w-full">
          <IoLogInOutline className="ml-auto scale-150" />
        </span>
        <span className="relative w-full h-full grid place-items-center">
          <Image
            alt={alt}
            src={img}
            style={{ objectFit: "contain" }}
            width={190}
            height={80}
          ></Image>
        </span>
        <h5 className="text-gray-900 font-semibold border-b-2 border-green-600 pb-2">
          {device}
        </h5>
        <p className="pt-4 self-start leading-6 text-base text-gray-500 ">
          {description}
        </p>
      </div>
    </Link>
  );
}
