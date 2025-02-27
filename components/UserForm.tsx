import React from "react";
import {
  IoPerson,
  IoPhonePortrait,
  IoSchool,
  IoCheckmarkCircle,
  IoWarning,
} from "react-icons/io5";
import { useState } from "react";
import Waves from "@/public/imgs/cta-banner-bg.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function UserForm() {
  const [formSent, setFormSent] = useState<boolean>(false);
  const [formError, setFormError] = useState<boolean>(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const fName = (form.elements.namedItem("fName") as HTMLInputElement).value;
    const lName = (form.elements.namedItem("lName") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const org = (form.elements.namedItem("org") as HTMLInputElement).value;

    const userData = { fName, lName, email, phone, org };
    try {
      const response = await fetch(
        "https://d4.bubble.is/site/mkpos/api/1.1/wf/web_form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        },
      );

      const result = await response.json();

      if (response.ok) {
        setFormSent(true);
        console.log(result.body.message);
      } else {
        setFormError(true);
        setFormSent(false);
        console.error(result.body.message);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div>
      <article
        className="_ctaBanner relative px-4 mt-4 flex flex-col items-center gap-4 py-6 text-white"
        style={{ backgroundImage: `url('/imgs/cta-banner-bg.svg')` }}
      >
        <div>
          <Image
            alt=""
            src={Waves}
            className="absolute top-[2px] w-full left-0  right-0 -translate-y-full md:hidden object-fill"
          ></Image>
        </div>
        {!formSent && !formError && (
          <>
            <h4 className="text-2xl font-semibold text-center">
              Become a Kangaroo Supported Partner
            </h4>
            <p>
              Am I eligible for the program? Fill out the form to learn more
            </p>
          </>
        )}
        {!formSent && !formError && (
          <form
            className="space-y-4 h-full flex flex-col w-full md:max-w-[24rem]"
            onSubmit={handleSubmit}
          >
            <article className="flex gap-4">
              <div className="w-1/2 relative flex flex-col">
                <label htmlFor="fName">First Name</label>
                <input
                  required
                  type="text"
                  name="fName"
                  id="fName"
                  className="mt-[2px] w-full bg-white rounded-full h-8 pl-8 pr-4 text-gray-500 focus:ring-mk-green-700 focus:ring-4 focus:outline-none"
                />
                <IoPerson className="absolute left-2 top-1/2 -translate-y-[calc(50%-12px)] text-gray-400" />
              </div>
              <div className=" w-1/2 relative flex flex-col">
                <label htmlFor="lName">Last Name</label>
                <input
                  required
                  type="text"
                  name="lName"
                  id="lName"
                  className="mt-[2px] bg-white rounded-full h-8 pl-8 pr-4 text-gray-500 focus:ring-mk-green-700 focus:ring-4 focus:outline-none"
                />
                <IoPerson className="absolute left-2 top-1/2 -translate-y-[calc(50%-12px)] text-gray-400" />
              </div>
            </article>
            <div className="relative flex flex-col">
              <label htmlFor="org">School/Business*</label>
              <input
                required
                type="text"
                name="org"
                id="org"
                className="mt-[2px] bg-white rounded-full h-8 pl-8 pr-4 text-gray-500 focus:ring-mk-green-700 focus:ring-4 focus:outline-none"
              />
              <IoSchool className="absolute left-2 top-1/2 -translate-y-[calc(50%-12px)] text-gray-400" />
            </div>
            <div className="relative flex flex-col">
              <label htmlFor="email">Email*</label>
              <input
                required
                type="text"
                name="email"
                id="email"
                className="mt-[2px] bg-white rounded-full h-8 pl-8 pr-4 text-gray-500 focus:ring-mk-green-700 focus:ring-4 focus:outline-none"
              />
              <IoSchool className="absolute left-2 top-1/2 -translate-y-[calc(50%-12px)] text-gray-400" />
            </div>
            <div className="relative flex flex-col">
              <label htmlFor="phone">Phone*</label>
              <input
                required
                type="text"
                name="phone"
                id="phone"
                className="mt-[2px] bg-white rounded-full h-8 pl-8 pr-4 text-gray-500 focus:ring-mk-green-700 focus:ring-4 focus:outline-none"
              />
              <IoPhonePortrait className="absolute left-2 top-1/2 -translate-y-[calc(50%-12px)] text-gray-400" />
            </div>
            <button
              type="submit"
              className="mx-auto w-48 bg-black px-6 h-12 text-lg rounded-full !mt-8 hover:scale-105 transition-all duration-300"
            >
              Sign Up
            </button>
          </form>
        )}
        {formSent && (
          <div className="space-y-4 flex flex-col items-center *:w-full md:max-w-[24rem]">
            <h4 className="text-2xl font-semibold text-center">
              Your info has been sent!
            </h4>
            <IoCheckmarkCircle className="scale-[2]" />
            <p className="text-center">
              We will now assign you an expert to get in touch with you.
            </p>
            <button
              type="button"
              className="mx-auto mt-8 w-48 bg-black px-6 h-12 text-lg rounded-full hover:scale-105 transition-all duration-300"
              onClick={() => router.push("/")}
            >
              Go to main screen
            </button>
          </div>
        )}
        {!formSent && formError && (
          <div className="space-y-4 flex flex-col items-center *:w-full md:max-w-[24rem]">
            <h4 className="text-2xl font-semibold text-center">
              There was a problem sending your data
            </h4>
            <IoWarning className="scale-[2]" />
            <p className="text-center">
              Please refresh the page and try again. If the problem persists,
              please contact us directly.
            </p>
            <button
              type="button"
              className="mx-auto mt-8 w-48 bg-black px-6 h-12 text-lg rounded-full hover:scale-105 transition-all duration-300"
              onClick={() => window.location.reload()}
            >
              Refresh
            </button>
          </div>
        )}
      </article>
    </div>
  );
}
