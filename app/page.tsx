"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ImgAppleBannerMobile from "@/public/imgs/apple-banner-img-mobile.png";
import ImgAppleBannerDesktop from "@/public/imgs/apple-service-provider-desktop.png";
import ImgAppleServiceProviderMobile from "@/public/imgs/apple-service-provider-mobile.png";
import RepairCard from "../components/RepairCard";
import Heading from "../components/Heading";
import EducationCard from "../components/EducationCard";
import EducationImg from "@/public/imgs/education-landing-img-mobile.png";
import EducationImgLg from "@/public/imgs/education-landing-img.png";
import LocationsImg from "@/public/imgs/locations-usa-map.svg";
import Link from "next/link";
import ImgKangarooCustomer from "@/public/imgs/woman-with-laptop 1.png";
import HeroImage from "@/public/imgs/mobilekangaroo-hero-illustration.svg";
import HeroImageSafari from "@/public/imgs/mk-hero-02.png";
import HeroImage4K from "@/public/imgs/hero-safari-4k.png";
import HeroImage4KSafari from "@/public/imgs/hero-safari-4k.png";
import GreenChip2 from "@/components/GreenChip2";

const userIsUsingSafari = () => {
  return "ApplePaySession" in window;
};

export default function Home() {
  const [isSafari, setIsSafari] = useState<boolean | undefined>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSafari(userIsUsingSafari());
      return;
    }
    console.error({ window });
  });

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between max-w-[100svw] overflow-hidden bg-gradient-to-b from-white to-gray-200 from-10%">
      <div className="_heroImg relative min-h-[20rem] md:min-h-[32rem] h-auto w-full overflow-visible">
        <Image
          alt="A big illustration of a mobilekangaroo store with two kangaroos repairing multiple devices."
          src={isSafari ? HeroImageSafari : HeroImage}
          className="xl:hidden transform object-cover object-bottom"
          fill={true}
          priority={true}
        />
        <Image
          alt="A big illustration of a mobilekangaroo store with two kangaroos repairing multiple devices."
          src={isSafari ? HeroImage4KSafari : HeroImage4K}
          priority={true}
          className="xl:block mx-auto"
        />
      </div>
      <section className="max-h-[95svh] flex flex-col items-center space-y-[auto] overflow-x-hidden text-center ">
        <div className="w-full"></div>
        <article className="_heroText text-center pt-8 lg:pt-0">
          <h1 className="text-mk-green-600 text-3xl font-semibold md:text-4xl">
            mobile
            <span className="text-gray-500 text-3xl md:text-4xl font-semibold">
              kangaroo
            </span>
          </h1>
          <h2 className="italic text-gray-400 font-medium py-2">
            Your neighborhood repair shop
          </h2>
          <article>
            <a
              href="#repairs"
              onClick={(e) => {
                e.preventDefault();
                const repairsSection = document.getElementById("repairs");
                if (repairsSection) {
                  repairsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <button className="w-auto px-6 md:px-8 text-white font-semibold md:text-xl bg-yellow-500 py-2 rounded-full hover:scale-105 transition-all duration-200">
                Repair My Device
              </button>
            </a>
          </article>
          <div className="grid-cols-2 space-x-4 w-full py-2">
            <Link
              href="/education"
              className="font-semibold underline underline-offset-2 text-mk-green-700 hover:text-mk-green-800 text-lg hover:cursor-pointer"
            >
              Schools
            </Link>
            <Link
              href="/business"
              className="font-semibold underline underline-offset-2 text-mk-green-700 hover:text-mk-green-800 text-lg hover:cursor-pointer"
            >
              Businesses
            </Link>
          </div>
          <div
            style={{
              backgroundImage: "url('imgs/banner-example.svg')",
              backgroundRepeat: "repeat",
            }}
            className="relative overflow-hidden bg-[#E8F4E3] w-[100svw] mt-8 text-mk-green-800 py-4 h-20 flex flex-col justify-between bg-repeat-x bg-center bg-[length:500px_100px] bg-opacity-40"
          >
            <div className="overlay-img absolute w-full h-full bg-[#E8F4E3] bg-opacity-60 top-0"></div>
          </div>
        </article>
      </section>
      <section className="_readyForRepair text-center px-4 md:max-w-[40rem]">
        <article className="flex flex-col justify-center items-center gap-6 mt-8">
          <h4 className="text-xl text-center font-semibold">
            We’re an Apple Authorized Service Provider.
          </h4>
          <p className="text-gray-700 font-light">
            Limited Warranty, AppleCare+ and Service Program repairs are
            available for all Apple devices.
          </p>
          <Image
            priority={true}
            alt="A collage of Apple products available for repair."
            src={ImgAppleBannerMobile}
            className="md:hidden"
          ></Image>
          <Image
            priority={true}
            alt="A collage of Apple products available for repair."
            className="hidden md:block mix-blend-multiply"
            src={ImgAppleBannerDesktop}
          ></Image>
          <Image
            priority={true}
            alt="Apple Authorized Service Provider Banner"
            src={ImgAppleServiceProviderMobile}
            className="mix-blend-multiply"
          ></Image>
        </article>
        <article
          className="_cards flex flex-col space-y-4 md:grid grid-cols-2  mx-auto gap-4 max-w-[40rem]"
          id="repairs"
        >
          <Heading
            heading="Ready for Repair"
            subheading="No need to buy new when we restore your device to look and feel brand new!"
          />

          <RepairCard
            description="We look after your most vital companion. Big or small, we attend to all problems that phones go through."
            device="Phones"
            url="/phones"
            img="/imgs/icon-device-phones.png"
            alt="Three high end mobile phones in portrait mode facing the user"
          />

          <RepairCard
            description="Don’t go without your favorite games and movies. Make the best of your creativity with a fully repaired tablet."
            device="Tablets"
            url="/tablets"
            img="/imgs/icon-device-tablets.png"
            alt="Two tablets side by side, working in landscape and portrait modes"
          />

          <RepairCard
            description="From hardware malfunctions to software glitches, we provide expert diagnostics and solutions tailored to your needs."
            device="Computers"
            url="/computers"
            img="/imgs/icon-device-computers.png"
            alt="A brand new laptop facing the user with attractive graphics showing"
          />
          <RepairCard
            description="We don’t let your fun be spoiled. Continue your adventures by treating any console issues you may encounter."
            device="Game Consoles"
            url="/game-consoles"
            img="/imgs/icon-device-gameconsoles.png"
            alt="A Nintendo Switch game controller with a freshly repaired screen"
          />
        </article>
      </section>
      <section className="w-full grid place-items-center mt-10 bg-gray-100">
        <Image
          priority={true}
          alt="A group of five children sitting right next to each other using their laptops."
          src={EducationImg}
          className="md:hidden w-full"
        />
        <Image
          priority={true}
          alt="A group of five children sitting right next to each other using their laptops."
          src={EducationImgLg}
          className="hidden md:block"
        />

        <section className="_educationProgram  max-w-full">
          <article className="_cards px-4 space-y-4 md:grid flex-wrap grid-cols-2 place-items-center max-w-[40rem] pb-8 md:space-y-none">
            <Heading
              heading="Education Program"
              subheading="Mobile Kangaroo works closely with school districts and universities, making the repair process easy and secure."
            />
            <EducationCard
              title="Fast diagnostics"
              description="We repair all types of electronics devices such as phones, computers, iPads, Chromebooks, you name it!"
            />
            <EducationCard
              title="Batch repairs"
              description="We offer complimentary diagnostic services and identify issues accurately to minimize downtime."
            />
            <EducationCard
              title="Pick-up and drop off"
              description="Enjoy added convenience with our complimentary pickup and drop-off services, designed to save you valuable time and effort."
            />
            <EducationCard
              title="Authorized Repairs "
              description="As an Apple Authorized Service Provider, we use genuine parts for repairs, and all our work is covered by a 90-day worldwide Apple warranty."
            />
            <div className="flex flex-col items-center col-start-1 col-end-3 w-full">
              <Link href="/education">
                <button
                  type="button"
                  className="w-full md:max-w-48 font-semibold px-8 py-1 bg-white border-2 text-mk-green-700  border-mk-green-700 rounded-lg hover:bg-mk-green-700 hover:text-white hover:scale-105 transition-all duration-200"
                >
                  Learn More
                </button>
              </Link>
            </div>
          </article>
        </section>
      </section>
      <div
        className="relative grid place-items-center pt-4 pb-12 bg-cover w-full"
        style={{ backgroundImage: "url('/imgs/locations-lading-img.svg')" }}
      >
        <Image
          priority={true}
          alt="Mobilekangaroo stores map Pins on California, Arizona, New Jersey, and more."
          src={LocationsImg}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="top-0 w-4/5 left-1/2 md:w-3/5 md:py-6 max-w-[36rem]"
        />
      </div>
      <section className="_locations text-center md:max-w-[40rem]">
        <article className="px-4 pb-6">
          <Heading
            heading="Locations"
            subheading="Find your nearest Kangaroo store. We are active in over 10 states!"
          />
          <article className="flex flex-wrap gap-2 justify-center pb-4">
            <GreenChip2 state="California" />
            <GreenChip2 state="Arizona" />
            <GreenChip2 state="New Jersey" />
            <GreenChip2 state="Oregon" />
            <GreenChip2 state="Tennessee" />
            <GreenChip2 state="Texas" />
            <GreenChip2 state="New York" />
            <GreenChip2 state="New Mexico" />
            <GreenChip2 state="Utah" />
            <GreenChip2 state="Pennsylvania" />
          </article>
          <Link
            className="text-blue-400 underline-2 underline-offset-2  hover:underline"
            href="/stores"
          >
            See complete list
          </Link>

          <article className="_cards space-y-4 md:grid-cols-2 md:grid md:space-y-0 mt-4">
            <Heading
              heading="Pick-up & Delivery"
              subheading="We offer the convenience of having your device picked up and delivered back once repaired. Reach out!"
            />
            <EducationCard
              title="All models supported"
              description="We can diagnose and repair a wide range of devices from any manufactures."
            />
            <EducationCard
              title="Pick-up and drop off"
              description="For your convenience, we provide pickup and drop-off services, saving you time and effort."
            />
          </article>
        </article>
      </section>
      <article
        className="_ctaBanner relative px-4 flex flex-col items-center gap-4 pt-6 text-white text-center w-full"
        style={{
          backgroundImage: `url('/imgs/cta-banner-bg.svg')`,
        }}
      >
        <h4 className="text-2xl font-semibold md:text-3xl">
          Don’t spend another day without your device!
        </h4>
        <p>Leave the hassle in our hands!</p>
        <a
          href="#repairs"
          onClick={(e) => {
            e.preventDefault();
            const repairsSection = document.getElementById("repairs");
            if (repairsSection) {
              repairsSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <button className="w-64 px-10 text-white font-semibold text-xl bg-yellow-500 py-2 rounded-full hover:scale-105">
            Repair My Device
          </button>
        </a>
        <Link href="stores">
          <button className="w-64 px-10 font-normal text-lg py-1 border-white border-2 rounded-full">
            Find Nearest Store
          </button>
        </Link>
        <div className="relative w-auto h-full max-w-[20rem]">
          <Image
            priority={true}
            alt="Woman offering mobileKangaroo services, laptop and Smartphone repair etc."
            className="mx-auto md:translate-x-0 z-100"
            src={ImgKangarooCustomer}
          ></Image>
        </div>
      </article>
    </main>
  );
}
