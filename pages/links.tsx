import React from "react";
import { NextSeo } from "next-seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faInstagram, faLinkedin, faSpotify, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import { Section, SectionLink } from "../types/Links";
import ArfiIcon from "/public/assets/arfi_icon_small.jpg";
import HynekIcon from "/public/assets/hynek_icon_small.jpg";
import TwitchIcon from "/public/assets/twitch_icon_small.png";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["header", "footer", "links", "index"])),
    },
  };
}

const links = [
  {
    title: "GitHub",
    icon: faGithub,
    href: "https://github.com/hynekfisera",
    type: "secondary",
  },
  {
    title: "LinkedIn",
    icon: faLinkedin,
    href: "https://linkedin.com/in/hynekfisera",
    type: "secondary",
  },
  {
    title: "Twitter",
    icon: faTwitter,
    href: "https://twitter.com/hynekfisera",
    type: "tertiary",
  },
  {
    title: "Instagram",
    icon: faInstagram,
    href: "https://instagram.com/hynekfisera",
    type: "tertiary",
  },
  {
    title: "Discord",
    icon: faDiscord,
    href: "https://arfi.cz/discord",
    type: "tertiary",
  },
  {
    title: "Spotify",
    icon: faSpotify,
    href: "https://open.spotify.com/user/hynekfisera",
    type: "tertiary",
  },
];

export default function Links(props: any) {
  const { t }: any = useTranslation("links");

  const sections: Section[] = [
    {
      title: t("websites"),
      icon: faGlobe,
      links: [
        { type: "internal", title: "Portfolio", description: t("working_on", { ns: "index" }), href: "/" },
        { type: "external", title: "Arfi.cz", description: t("website_arfi_description"), href: "https://arfi.cz/" },
      ],
      className: "bg-indigo-50/70 border-indigo-100",
    },
    {
      title: "YouTube",
      icon: faYoutube,
      links: [
        { type: "external", title: "Arfi", description: t("youtube_arfi_description"), href: "https://youtube.com/@phpMyArfi", image: ArfiIcon },
        { type: "external", title: "Hynek", description: t("youtube_hynek_description"), href: "https://youtube.com/@Haineku", image: HynekIcon },
      ],
      className: "bg-rose-50/70 border-rose-100",
    },
    { title: "Twitch", icon: faTwitch, links: [{ type: "external", title: "ArfiLive", description: t("twitch_description"), href: "https://twitch.tv/arfilive", image: TwitchIcon }], className: "bg-violet-50/70 border-violet-100" },
    { title: "Email", icon: faEnvelope, links: [{ type: "copy", title: "hynek@flairleap.com", description: t("email_description"), href: "hynek@flairleap.com" }], className: "bg-fuchsia-50/70 border-fuchsia-100" },
  ];

  return (
    <>
      <NextSeo
        title={t("title")}
        description={t("description")}
        // @ts-ignore
        canonical={props._nextI18Next.initialLocale === "en" ? "https://www.hynekfisera.com/links" : "https://www.hynekfisera.cz/links"}
        openGraph={{
          type: "website",
          // @ts-ignore
          url: props._nextI18Next.initialLocale === "en" ? "https://www.hynekfisera.com/links" : "https://www.hynekfisera.cz/links",
          title: t("title"),
          description: t("description"),
          site_name: "Hynek Fišera",
        }}
        languageAlternates={[
          {
            hrefLang: "en",
            href: "https://www.hynekfisera.com/links",
          },
          {
            hrefLang: "cs",
            href: "https://www.hynekfisera.cz/links",
          },
        ]}
      />
      <main className="py-2 sm:py-8">
        <h1 className="text-center text-3xl font-semibold mb-6 sm:mb-8">{t("heading")}</h1>
        <div className="max-w-sm mx-auto px-4 sm:px-0 flex flex-col gap-4">
          {sections.map((section) => (
            <div key={section.title} className={`rounded-xl border-2 p-5 ${section.className}`}>
              <h2 className="ml-1 text-lg text-gray-700 font-semibold">
                <FontAwesomeIcon icon={section.icon} /> {section.title}
              </h2>
              <div className="flex flex-col gap-2 mt-3">
                {section.links.map((link) => (
                  <LinkWrapper link={link} className="flex items-center gap-2 cursor-pointer border border-transparent hover:border-gray-700 rounded-lg py-1 px-1 sm:px-2" key={link.href}>
                    {link.image && <Image src={link.image} alt={`${link.title} icon`} className="h-full max-h-[2.5rem] w-auto rounded-full" />}
                    <div className="flex flex-col">
                      <h3 className="font-medium text-gray-700">
                        {link.title} {link.type === "external" && <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm text-gray-600" />}
                      </h3>
                      <div className="text-sm text-gray-600">{link.description}</div>
                    </div>
                  </LinkWrapper>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-sm mx-auto px-4 sm:px-0 flex flex-col gap-4 mt-4">
          {links.map((link) => (
            <a href={link.href} target="_blank" rel="noreferrer noopener" key={link.href} className="w-full text-lg font-medium border rounded-md px-5 py-2 text-gray-700 hover:border-slate-600 bg-gray-50/70 border-gray-200">
              {link.icon && <FontAwesomeIcon icon={link.icon} className="h-4" />} {link.title} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm text-gray-600" />
            </a>
          ))}
        </div>
      </main>
    </>
  );
}

const LinkWrapper = ({ link, children, className }: { link: SectionLink; children: React.ReactNode; className: string }) => {
  switch (link.type) {
    case "internal":
      return (
        <Link href={link.href} className={className}>
          {children}
        </Link>
      );
    case "external":
      return (
        <a href={link.href} target="_blank" rel="noreferrer noopener" className={className}>
          {children}
        </a>
      );
    case "copy":
      return (
        <div onClick={() => navigator.clipboard.writeText(link.href)} className={className}>
          {children}
        </div>
      );
  }
};
