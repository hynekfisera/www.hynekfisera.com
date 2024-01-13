import { StaticImageData } from "next/image";
import { Link } from "./Link";

export type Project = {
  image?: StaticImageData;
  logo?: StaticImageData;
  name: string;
  description: string;
  links?: Link[];
};
