import Head from "next/head";
import Heading from "@/components/Heading";
import React from "react";
import Image from "next/image";
import AboutKangaroo from "@/public/imgs/kangaroo-about.svg";
import { generatePageMetadata } from '@/app/utils/metadata';

export const metadata = generatePageMetadata({
  title: 'About Our Services | Mobilekangaroo',
  description: "Mobile Kangaroo has been repairing devices and solving problems since 2003 and initially started to 'hop data' between phones (hence the Kangaroo in our name).",
  keywords: 'mobilekangaroo services, about mobilekangaroo company, about our device repair services',
  canonicalUrl: 'https://www.mobilekangaroo.com/about',
});
export default function Page() {
  return (
    <>
      <section className="_repairScreen grow py-6 px-4 text-gray-800 text-center bg-gray-100">
        <article className="pb-6">
          <Heading
            heading="About mobilekangaroo"
            subheading="Mobile Kangaroo has been repairing devices and solving problems since 2003. Initially started to 'hop data' between phones (hence the Kangaroo in our name) we quickly expanded to repair a wide variety of electronics."
          />
          <Image
            alt="A happy kangaroo holding a screwdriver while looking at the camera"
            src={AboutKangaroo}
            className="mx-auto my-8"
          />
          <details>
            <summary className="mx-auto w-48 text-mk-green-600 px-4 py-1 border-2 border-mk-green-600 rounded-full font-medium hover:border-mk-green-900 hover:text-mk-green-900 mb-8">
              Read More
            </summary>
            <p className="text-gray-500 max-w-[40rem] mx-auto text-left">
              Fully-trained, friendly technicians and easy access to our
              locations make Mobile Kangaroo the most convenient place to repair
              your computer, phone, tablet or RC car. Our diagnostic tools and
              access to genuine parts enable our technicians to perform repairs
              properly, saving you time and expense. As one of the oldest repair
              shops in the nation, we are proficient and take great pride in our
              work.
            </p>
          </details>
        </article>
      </section>
    </>
  );
}