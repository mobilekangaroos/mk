import Heading from "@/components/Heading";
import React from "react";
import Image from "next/image";
import BrandCard from "@/components/BrandCard";
import ImgAppleServiceProviderMobileBlackInline from "@/public/imgs/apple-inline-text.svg";
import ImgAppleScreenRepair from "@/public/imgs/apple-screen-repair.png";
import HeroPhones from "@/public/imgs/hero-phones.png";
import AppleCard from "@/components/AppleCard";
import RepairService from "@/components/RepairService";
import Link from "next/link";
import QualityService from "@/components/QualityService";
import CTABanner from "@/components/CTABanner";

export default function Page() {
  return (
    <>
      <section className="_repairScreen grow py-6 px-4 text-gray-800 text-center bg-gray-100">
        <article className="pb-6">
          <Heading
            heading="Phone Repairs"
            subheading="Trust us with your phone repairs, and we’ll ensure it's fixed swiftly and reliably with the highest quality service."
          />
          <Image
            alt="Woman wearing a mobileKangaroo shirt, using a laptop and pointing upwards with both hands to a text that says TEXT (855) FIX-THAT"
            className="mx-auto"
            src={HeroPhones}
          />
        </article>
      </section>

      <section className="bg-gray-100 px-4 py-6 text-center">
        <article className="flex flex-col md:space-y-0 gap-4 md:grid grid-cols-2 auto-rows-min align-start md:max-w-[40rem] mx-auto">
          <AppleCard device="iPhone" url="/" type="phones" />
          <BrandCard
            iconWidth={24}
            device="Samsung"
            url="https://mobilekangaroo.com/phone_repairs"
            type="phones"
            imgRef="icon-phone-samsung.svg"
          />
          <BrandCard
            iconWidth={24}
            device="Pixel"
            url="https://mobilekangaroo.com/phone_repairs"
            type="phones"
            imgRef="icon-phone-pixel.svg"
          />
          <BrandCard
            device="Other"
            iconWidth={24}
            url="https://mobilekangaroo.com/phone_repairs"
            type="phones"
            imgRef="icon-phone-other.svg"
          />
        </article>

        <article className="flex flex-col justify-center items-center gap-6 pt-6 md:bg-white mx-auto md:mt-10 md:rounded-xl">
          <div className="flex flex-col items-center max-w-[40rem] pt-8 pb-4">
            <h4 className="text-xl text-center font-semibold md:text-2xl pb-4">
              Same-day iPhone Screen Repair.
            </h4>
            <Image
              alt="Repaired iPhone screen"
              src={ImgAppleScreenRepair}
              className="mix-blend-multiply"
            />
            <p className="text-gray-700 font-light leading-5 text-base pb-6 pt-6">
              We offer same-day iPhone screen repairs. Bring your iPhone to us
              by 4PM local time, and we’ll have it ready for pickup the same
              day.*
            </p>
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
