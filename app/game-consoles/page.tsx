import Heading from "@/components/Heading";
import React from "react";
import Image from "next/image";
import BrandCard from "@/components/BrandCard";
import HeroConsoles from "@/public/imgs/hero-gameconsoles.png";
import RepairService from "@/components/RepairService";
import CTABanner from "@/components/CTABanner";
import QualityService from "@/components/QualityService";
import { generatePageMetadata } from '@/app/utils/metadata';
import HeadingH1 from "@/components/HeadingH1";

export const metadata = generatePageMetadata({
  title: 'Expert Game Console Repairs | Mobilekangaroo',
  description: "Get your game console repair today from mobilekangaroo. Our experts can repair your game consoles quickly and in affordable prices.",
  keywords: 'game console repair services at mobilekangaroo, expert game console repair technicians, fix dead battery issue, fix broken screen of game console, fix damaged speaker, repair faulty camera, game console repair near me, exceptional game console repair services',
  canonicalUrl: 'https://www.mobilekangaroo.com/game-consoles',
});

export default function page() {
  return (
    <>
      <section className="_repairScreen grow py-6 px-4 text-gray-800 text-center bg-gray-100">
        <article className="pb-6">
          <HeadingH1
            heading="Game Console Repairs"
            subheading="Don't go another day without making it to the next level. Experience uninterrupted fun by staying in control."
          />
          <Image
            alt="Expert Game Console Repairs at mobileKangaroo stores."
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
