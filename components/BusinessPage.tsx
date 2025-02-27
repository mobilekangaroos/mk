"use client";
import Heading from "@/components/Heading";
import React from "react";
import {
  IoStarOutline,
  IoStorefront,
  IoBag,
  IoListCircle,
} from "react-icons/io5";
import Image from "next/image";
import DevicePortal from "@/public/imgs/affiliate-skeleton.svg";
import BusinessesBubbles from "@/public/imgs/bubbles-businesses.svg";
import { useState, useRef } from "react";
import UserForm from "@/components/UserForm";
import HeadingH1 from "./HeadingH1";

export default function BusinessPage() {
  const steps = [
    "Choose your preferred service: in-store drop off or device pickup",
    "Find your nearest store and select your desired device delivery date",
    "Receive notifications when your device is ready for pickup",
  ];
  const [display, setDisplay] = useState<string | number>(steps[0]);
  const [step, setStep] = useState(1);
  const coinsRef = useRef<HTMLDivElement>(null);

  const handleHover = (num: number) => {
    if (coinsRef.current) {
      for (let i = 0; i < coinsRef.current.childElementCount - 1; i++) {
        coinsRef.current.children[i].classList.remove("active");
      }
      coinsRef.current.children[num].classList.add("active");
    }
    setDisplay(steps[num]);
    setStep(num + 1);
  };

  return (
    <>
      <section>
        <div className="flex flex-col overflow-hidden">
          <HeadingH1
            heading="Businesses"
            subheading="We help your business grow and function efficiently with our repair service."
          />
          <div className="relative w-full lg:w-2/3 mx-auto">
            <img
              src="imgs/business-hero.webp"
              alt="A group of tech members engaged in their work while discussing and exchanging ideas"
              srcSet=""
            />
          </div>
          <div className="bg-[#E8F4E3] px-2 w-[100svw] text-mk-green-800 py-4 flex flex-col justify-between">
            <p className="text-center">
              Our exceptional technicians bring unparalleled knowledge and skill
              to every repair and service.
            </p>
          </div>
        </div>
        <Heading
          heading="Quick turn-around service"
          subheading="Boost your business efficiency with our rapid device repair services, ensuring quick turn-around times to minimize downtime and keep your operations running seamlessly."
        />
        <Image
          alt="Four bubbles floating with images inside them."
          src={BusinessesBubbles}
          className="mx-auto"
        ></Image>
        <Heading
          heading="Support"
          subheading="We provide you with the essential equipment for your business to keep growing. We make sure all your technological needs are covered."
        />
        <article className="flex gap-4 mx-auto md:max-w-[40rem] justify-center max-w-full flex-wrap">
          <div className="flex gap-2 items-center ">
            <IoStarOutline className="outline-2 text-mk-green-700 h-8 w-8" />
            <h4 className="text-mk-green-800 font-medium">
              Apple Trained Technicians
            </h4>
          </div>
          <div className="flex gap-2 items-center">
            <IoStarOutline className="outline-2 text-mk-green-700 h-8 w-8" />
            <h4 className="text-mk-green-800 font-medium">
              20+ years&apos; experience
            </h4>
          </div>
          <div className="flex gap-2 items-center">
            <IoStarOutline className="outline-2 text-mk-green-700 h-8 w-8" />
            <h4 className="text-mk-green-800 font-medium">Pick-up service</h4>
          </div>
          <div className="flex gap-2 items-center">
            <IoStarOutline className="outline-2 text-mk-green-700 h-8 w-8" />
            <h4 className="text-mk-green-800 font-medium">
              Original Repair Parts
            </h4>
          </div>
          <div className="flex gap-2 items-center">
            <IoStarOutline className="outline-2 text-mk-green-700 h-8 w-8" />
            <h4 className="text-mk-green-800 font-medium">90 day warranty</h4>
          </div>
        </article>
        <section className="pb-8 md:max-w-[40rem] mx-auto">
          <Heading
            heading="Kangaroo Device Portal"
            subheading="By becoming an affiliate, you get access to our customized MobileKangaroo portal, where you manage and track your repairs"
          />
          <Image
            alt="A floating screen of the mobile kangaroo device portal."
            src={DevicePortal}
            className="mx-auto"
          ></Image>
          <article className="">
            <div
              ref={coinsRef}
              className="coins relative h-min w-80  flex gap-16 justify-center pt-6 mx-auto"
            >
              <div
                onMouseOver={() => handleHover(0)}
                className="group rounded-full h-16 w-16 grid place-items-center bg-gray-200 "
              >
                <IoBag className="h-10 w-10 text-gray-400 " />
              </div>
              <div
                onMouseOver={() => handleHover(1)}
                className="group rounded-full h-16 w-16 grid place-items-center   bg-gray-200"
              >
                <IoStorefront className="h-10 w-10 text-gray-400 " />
              </div>
              <div
                onMouseOver={() => handleHover(2)}
                className="group rounded-full h-16 w-16 grid place-items-center   bg-gray-200"
              >
                <IoListCircle className="h-10 w-10 text-gray-400 " />
              </div>
              <div className="absolute top-1/2 h-2 translate-y-[10px] w-80 -z-10 bg-gray-200"></div>
            </div>
            <h3 className="text-center text-2xl pt-4 text-gray-600 font-semibold">
              {step}.
            </h3>
            <h4 className="text-center text-gray-500 text-lg">{display}</h4>
          </article>
        </section>
        <UserForm />
      </section>
    </>
  );
}
