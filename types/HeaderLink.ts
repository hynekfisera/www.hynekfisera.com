import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type Link = {
  type: "internal" | "external" | "copy";
  text: string;
  href: string;
  button?: boolean;
  icon?: IconDefinition;
};
