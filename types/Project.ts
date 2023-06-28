import { StaticImageData } from "next/image";

export type Project = {
  image?: StaticImageData;
  logo?: StaticImageData;
  name: string;
  description: string;
  href?: string;
};
