import React from "react";
interface CardProps {
  title: string;
  description: string;
}
export default function EducationCard({ title, description }: CardProps) {
  return (
    <article className="_educationCard px-4 py-6 shadow-sm rounded-lg min-h-24 grid grid-cols-[2fr,3fr] gap-2 bg-white md:grid-rows-2 md:grid-cols-none md:grid-rows-[1fr,3fr] md:max-w-60 md:h-60 self-stretch md:gap-0 hover:shadow-md hover:-translate-y-2 transition-all duration-200 md:pb-4">
      <h5 className="font-semibold text-left md:text-left self-start">
        {title}
      </h5>
      <p className="text-left md:text-left text-gray-500 text-sm">
        {description}
      </p>
    </article>
  );
}
