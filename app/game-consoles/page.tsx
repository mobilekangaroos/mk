import Heading from "@/components/Heading";
import React from "react";
import Image from "next/image";
import BrandCard from "@/components/BrandCard";
import HeroConsoles from "@/public/imgs/hero-gameconsoles.png";
import RepairService from "@/components/RepairService";
import CTABanner from "@/components/CTABanner";
import QualityService from "@/components/QualityService";

export default function page() {
  return (
    <>
      <section className="_repairScreen grow py-6 px-4 text-gray-800 text-center bg-gray-100">
        <article className="pb-6">
          <Heading
            heading="Game Console Repairs"
            subheading="Don't go another day without making it to the next level. Experience uninterrupted fun by staying in control."
          />
          <Image
            alt="Woman wearing a mobileKangaroo shirt, using a laptop and pointing upwards with both hands to a text that says TEXT (855) FIX-THAT"
            className="mx-auto"
            src={HeroConsoles}
          ></Image>
        </article>
      </section>
      <section className="bg-gray-100 px-4 py-6 text-center">
        <article className="flex flex-col md:space-y-0 gap-4 md:grid grid-cols-2 auto-rows-min align-start md:max-w-[40rem] mx-auto">
          <BrandCard
            iconWidth={60}
            imgRef="icon-xbox.svg"
            device="Xbox"
            url="https://mobilekangaroo.com/phone_repairs"
          />
          <BrandCard
            iconWidth={60}
            imgRef="icon-nintendo.svg"
            device="Nintendo"
            url="https://mobilekangaroo.com/phone_repairs"
          />
          <BrandCard
            iconWidth={60}
            imgRef="icon-playstation.svg"
            device="PlayStation"
            url="https://mobilekangaroo.com/phone_repairs"
          />
          <BrandCard
            iconWidth={60}
            imgRef="icon-gameconsole-other.svg"
            device="Other"
            url="https://mobilekangaroo.com/phone_repairs"
          />
        </article>

        <QualityService />
      </section>
      <CTABanner />
      <RepairService />
    </>
  );
}
