import React from "react";

type Props = {
  children: string;
};

export default function SectionHeading({ children }: Props) {
  return <h2 className="mb-2 text-lg sm:text-xl lg:text-2xl capitalize font-medium text-gray-700">{children}</h2>;
}
