import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { StaticImageData } from "next/image";

export type Section = {
  title: string;
  icon: IconDefinition;
  links: Array<SectionLink>;
  className?: string;
};

export type SectionLink = {
  type: "internal" | "external" | "copy";
  title: string;
  description?: string;
  href: string;
  image?: StaticImageData;
};
