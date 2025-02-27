import Heading from "@/components/Heading";
import React from "react";
import Image from "next/image";
import BrandCard from "@/components/BrandCard";
import ImgAppleServiceProviderCover from "@/public/imgs/apple-service-provider-cover.png";
import ImgAppleServiceProviderMobileBlackInline from "@/public/imgs/apple-inline-text.svg";
import HeroTablets from "@/public/imgs/hero-tablets.png";
import AppleCard from "@/components/AppleCard";
import RepairService from "@/components/RepairService";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";
import QualityService from "@/components/QualityService";
import { generatePageMetadata } from '@/app/utils/metadata';
import HeadingH1 from "@/components/HeadingH1";

export const metadata = generatePageMetadata({
  title: 'Tablet Repair Services Near me | Mobilekangaroo',
  description: "Experience uninterrupted productivity and creativity with our reliable solutions for tablet malfunctions. We've got you covered!",
  keywords: 'tablet repair services at mobilekangaroo, iPad repair at same day, reliable solution for tablet malfunctions, samsung tablet repair, android tablet repair services, repair all brand tablets',
  canonicalUrl: 'https://www.mobilekangaroo.com/tablets',
});

export default function page() {
  return (
    <>
      <section className="_repairScreen grow py-6 px-4 text-gray-800 text-center bg-gray-100">
        <article className="pb-6">
          <HeadingH1
            heading="Tablet Repairs"
            subheading="Experience uninterrupted productivity and creativity with our reliable solutions for tablet malfunctions. We've got you covered!"
          />
          <Image
            alt="Tablet Repair Services at mobileKangaroo stores."
            className="mx-auto"
            src={HeroTablets}
          ></Image>
        </article>
      </section>
      <section className="bg-gray-100 px-4 py-6 text-center">
        <article className="flex flex-col md:space-y-0 gap-4 md:grid grid-cols-2 auto-rows-min align-start md:max-w-[40rem] mx-auto">
          <AppleCard device="iPad" url="/" />
          <BrandCard
            imgRef="icon-tablet-samsung.svg"
            iconWidth={50}
            device="Samsung"
            url="https://mobilekangaroo.com/phone_repairs"
          />
          <BrandCard
            imgRef="icon-tablet-google.svg"
            iconWidth={50}
            device="Google"
            url="https://mobilekangaroo.com/phone_repairs"
          />
          <BrandCard
            imgRef="icon-tablet-lg.svg"
            iconWidth={50}
            device="LG"
            url="https://mobilekangaroo.com/phone_repairs"
          />
          <BrandCard
            imgRef="icon-tablet-other.svg"
            iconWidth={50}
            device="Other"
            url="https://mobilekangaroo.com/phone_repairs"
          />
        </article>

        <article className="flex flex-col justify-center items-center gap-6 pt-6 md:bg-white mx-auto md:mt-10 md:rounded-xl">
          <div className="flex flex-col items-center max-w-[40rem] pt-8 pb-4">
            <h4 className="text-xl text-center font-semibold md:text-2xl pb-4">
              We’re an Apple Authorized Service Provider.
            </h4>
            <Image
              alt="Repaired iPhone screen"
              className="max-w-[24rem] mix-blend-multiply"
              src={ImgAppleServiceProviderCover}
            />

            <Link href="/about"></Link>
            <Image
              alt="Apple Authorized Service Provider"
              src={ImgAppleServiceProviderMobileBlackInline}
              height={36}
              className="mix-blend-multiply"
            />
          </div>
        </article>
        <QualityService />
      </section>
      <CTABanner />
      <RepairService />
    </>
  );
}
