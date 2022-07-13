import { StaticImageData } from "next/image";

export type Project = {
  type: string;
  logo: StaticImageData;
  name: string;
  description: string;
  href?: string;
};
