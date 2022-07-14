import { StaticImageData } from "next/image";

export type Project = {
  image?: StaticImageData;
  type: string;
  logo: StaticImageData;
  name: string;
  description: string;
  href?: string;
};
