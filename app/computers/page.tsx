import Heading from "@/components/Heading";
import React from "react";
import Image from "next/image";
import BrandCard from "@/components/BrandCard";
import ImgAppleServiceProviderCover from "@/public/imgs/apple-service-provider-cover.png";
import ImgAppleServiceProviderMobileBlackInline from "@/public/imgs/apple-inline-text.svg";
import HeroComputers from "@/public/imgs/hero-computers-mobile.svg";
import HeroComputersDesktop from "@/public/imgs/hero-computers.svg";
import AppleCard from "@/components/AppleCard";
import RepairService from "@/components/RepairService";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";
import QualityService from "@/components/QualityService";

export default function page() {
  return (
    <>
      <section className="_repairScreen grow py-6 px-4 text-gray-800 text-center bg-gray-100">
        <article className="pb-6">
          <Heading
            heading="Computer Repairs"
            subheading="Experience uninterrupted productivity and creativity with our reliable solutions for computer malfunctions. We've got you covered!"
          />
          <Image
            alt="Woman wearing a mobileKangaroo shirt, using a laptop and pointing upwards with both hands to a text that says TEXT (855) FIX-THAT"
            className="mx-auto md:hidden"
            src={HeroComputers}
          ></Image>
          <Image
            alt="Woman wearing a mobileKangaroo shirt, using a laptop and pointing upwards with both hands to a text that says TEXT (855) FIX-THAT"
            className="hidden md:block mx-auto"
            src={HeroComputersDesktop}
          ></Image>
        </article>
      </section>
      <section className="bg-gray-100 px-4 py-6 text-center">
        <article className="flex flex-col md:space-y-0 gap-4 md:grid grid-cols-2 auto-rows-min align-start md:max-w-[40rem] mx-auto">
          <AppleCard device="MacBook/iMac" url="/" />
          <BrandCard
            iconWidth={60}
            url="https://mobilekangaroo.com/phone_repairs"
            device="DELL"
            imgRef="icon-computer-dell.svg"
          />
          <BrandCard
            iconWidth={60}
            url="https://mobilekangaroo.com/phone_repairs"
            device="HP"
            imgRef="icon-computer-hp.svg"
          />
          <BrandCard
            iconWidth={60}
            url="https://mobilekangaroo.com/phone_repairs"
            device="Lenovo"
            imgRef="icon-computer-lenovo.svg"
          />
          <BrandCard
            iconWidth={60}
            url="https://mobilekangaroo.com/phone_repairs"
            device="Other"
            imgRef="icon-computer-other.svg"
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
