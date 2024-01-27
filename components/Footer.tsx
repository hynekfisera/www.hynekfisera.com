/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Logo from "/public/assets/hf_indigo.svg";
import { faBehance, faGithub, faInstagram, faLinkedinIn, faTwitch, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const icons = [
  {
    name: "LinkedIn",
    icon: faLinkedinIn,
    href: "https://linkedin.com/in/hynekfisera/",
  },
  {
    name: "GitHub",
    icon: faGithub,
    href: "https://github.com/hynekfisera",
  },
  {
    name: "Behance",
    icon: faBehance,
    href: "https://behance.net/hynekfisera",
  },
  {
    name: "Twitch",
    icon: faTwitch,
    href: "https://twitch.tv/arfilive",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    href: "https://instagram.com/hynekfisera",
  },
  {
    name: "X (formerly Twitter)",
    icon: faXTwitter,
    href: "https://x.com/hynekfisera",
  },
];

export default function Footer() {
  const { t } = useTranslation("footer");

  const sections = [
    {
      name: t("sections.content.name"),
      links: [
        {
          type: "internal",
          name: "Portfolio",
          href: "/",
        },
        {
          type: "internal",
          name: t("about", { ns: "header" }),
          href: "/about-me",
        },
        {
          type: "internal",
          name: t("contact", { ns: "header" }),
          href: "/contact",
        },
      ],
    },
    {
      name: t("sections.projects.name"),
      links: [
        {
          type: "external",
          name: "Arfi",
          href: "https://arfi.cz/",
        },
        {
          type: "external",
          name: "VWA",
          href: "https://vwa.cz/",
        },
        {
          type: "external",
          name: "Flairleap",
          href: "https://flairleap.com/?force_landing=1",
        },
        {
          type: "external",
          name: "interactiveASMR",
          href: "https://asmr.hynekfisera.com/",
        },
      ],
    },
    {
      name: t("sections.other.name"),
      links: [
        {
          type: "internal",
          name: t("sections.other.links.top"),
          href: "#top",
        },
        {
          type: "external",
          name: "Notion",
          href: "https://notion.hynekfisera.cz/",
          nofollow: true,
        },
        {
          type: "external",
          name: "VPS",
          href: "https://antalya.hynekfisera.com/",
          nofollow: true,
        },
      ],
    },
  ];

  return (
    <footer className="max-w-screen-lg mx-auto p-8 py-12 flex flex-col items-center gap-12">
      <section className="w-full grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <div className="md:col-span-2 flex flex-col items-start gap-4">
          <Image src={Logo} alt="Logo" className="w-full max-w-[72px] h-auto" />
          <div className="flex justify-start flex-wrap gap-4">
            {icons.map((icon) => (
              <a className="text-lg text-gray-600 hover:text-indigo-500 transition duration-200" key={icon.href} href={icon.href} aria-label={icon.name} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={icon.icon} />
              </a>
            ))}
          </div>
        </div>
        {sections.map((section) => (
          <div key={section.name} className="flex flex-col gap-1.5">
            <h3 className="text-lg font-medium text-indigo-500">{section.name}</h3>
            <ul className="flex flex-col gap-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  {link.type === "internal" ? (
                    <Link href={link.href} className="text-gray-600 hover:text-indigo-500 transition duration-200">
                      {link.name}
                    </Link>
                  ) : (
                    <a className="text-gray-600 hover:text-indigo-500 transition duration-200" href={link.href} target="_blank" rel={`noopener noreferrer ${link.nofollow ? "nofollow" : ""}`}>
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <div className="text-sm text-center text-gray-500 flex flex-col items-center justify-center gap-2.5">
        <div>&copy; Hynek Fišera 2017-{new Date().getFullYear()}</div>
        <a href="https://www.buymeacoffee.com/hynekfisera" target="_blank" rel="noreferrer noopener" className="inline-block h-6">
          <img className="h-full w-auto" src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hynekfisera&button_colour=6366f1&font_colour=f1f5f9&font_family=Inter&outline_colour=000000&coffee_colour=f1f5f9" alt="Buy Me a Coffee" />
        </a>
      </div>
    </footer>
  );
}
