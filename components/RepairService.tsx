import React from "react";
import Image from "next/image";
import ImgKangarooCustomer from "@/public/imgs/woman-with-laptop 1.png";

export default function RepairService() {
  return (
    <article className="_repairServiceBanner px-4 pt-6 pb-2 bg-gray-200 text-center space-y-4">
      <h2 className="text-xl text-center font-semibold md:text-2xl">
        Mobile Kangaroo Repair Service
      </h2>
      <p className="text-gray-700 font-light max-w-[60ch] mx-auto">
        Our repair team offers exceptional service, backed by extensively
        trained technicians and over 20 years of industry experience.
      </p>
      <h6 className="font-extrabold text-lg uppercase text-gray-900">
        Text (855) FIX-THAT
      </h6>
      <a
        href="/stores"
        className="text-blue-500 underline"
      >
        Start a repair
      </a>
      <div className="w-full ">
        <Image
          alt="Woman offering mobileKangaroo services, laptop and Smartphone repair etc."
          className="mx-auto w-72"
          src={ImgKangarooCustomer}
        ></Image>
      </div>
    </article>
  );
}
