import React from "react";
interface HeadingProps {
  heading: string;
  subheading: string;
}
export default function HeadingH1({ heading, subheading }: HeadingProps) {
  return (
    <div className="_sectionHeading px-2 py-6 col-start-1 col-span-full shrink mx-auto text-center">
      <h1 className="text-2xl font-semibold text-gray-800 pb-2 lg:text-4xl">
        {heading}
      </h1>
      <p className="text-gray-600 font-light max-w-[60ch] mx-auto">
        {subheading}
      </p>
    </div>
  );
}
