import React, { useState } from "react";
import { NextSeo } from "next-seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArtstation, faBehanceSquare, faDeviantart, faDiscord, faDribbble, faFacebook, faGithub, faInstagram, faLinkedin, faPatreon, faReddit, faSpotify, faTiktok, faTwitch, faTwitter, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faChevronDown, faEnvelope, faGlobe, faLink } from "@fortawesome/free-solid-svg-icons";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import { Section, SectionLink } from "../types/Links";
import ArfiIcon from "/public/assets/arfi_icon_small.png";
import HynekIcon from "/public/assets/hynek_icon_small.jpg";
import TwitchIcon from "/public/assets/twitch_icon_small.jpg";
import { Link as LinkType } from "../types/HeaderLink";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["header", "footer", "contact", "index"])),
    },
  };
}

const links = [
  {
    title: "GitHub",
    icon: faGithub,
    href: "https://github.com/hynekfisera",
    priority: 2,
  },
  {
    title: "LinkedIn",
    icon: faLinkedin,
    href: "https://linkedin.com/in/hynekfisera",
    priority: 3,
  },
  {
    title: "Behance",
    icon: faBehanceSquare,
    href: "https://behance.net/hynekfisera",
    priority: 1,
  },
  {
    title: "Twitch",
    icon: faTwitch,
    href: "https://twitch.tv/arfilive",
  },
  {
    title: "Instagram",
    icon: faInstagram,
    href: "https://instagram.com/hynekfisera",
  },
  {
    title: "X (formerly Twitter)",
    icon: faXTwitter,
    href: "https://x.com/hynekfisera",
  },
];

links.sort((a, b) => {
  if ((a.priority ?? 0) > (b.priority ?? 0)) return -1;
  if ((a.priority ?? 0) < (b.priority ?? 0)) return 1;
  return a.title.localeCompare(b.title);
});

export default function Links(props: any) {
  const { t }: any = useTranslation("contact");
  const [copied, setCopied] = useState("");
  const [viewMore, setViewMore] = useState(false);

  const sections: Section[] = [
    { title: "Email", icon: faEnvelope, links: [{ type: "copy", title: "hynek@flairleap.com", description: t("email_description"), href: "hynek@flairleap.com" }], className: "bg-purple-50/70 border-purple-100" },
    { title: "Discord", icon: faDiscord, links: [{ type: "copy", title: "@hynekfisera", description: t("email_description"), href: "hynekfisera" }], className: "bg-indigo-50/70 border-indigo-100" },
  ];

  const onCopy = (href: string): void => {
    navigator.clipboard.writeText(href).catch((e) => console.error(e));
    setCopied(href);
    setTimeout(() => setCopied(""), 800);
  };

  return (
    <>
      <NextSeo
        title={t("title")}
        description={t("description")}
        // @ts-ignore
        canonical={props._nextI18Next.initialLocale === "en" ? "https://www.hynekfisera.com/contact" : "https://www.hynekfisera.cz/contact"}
        openGraph={{
          type: "website",
          // @ts-ignore
          url: props._nextI18Next.initialLocale === "en" ? "https://www.hynekfisera.com/contact" : "https://www.hynekfisera.cz/contact",
          title: t("title"),
          description: t("description"),
          site_name: "Hynek Fišera",
        }}
        languageAlternates={[
          {
            hrefLang: "en",
            href: "https://www.hynekfisera.com/contact",
          },
          {
            hrefLang: "cs",
            href: "https://www.hynekfisera.cz/contact",
          },
        ]}
        nofollow={true}
      />
      <main className="py-2 sm:py-8">
        <h1 className="text-center text-3xl font-medium mb-6 sm:mb-8 text-gray-800 hidden sm:block">{t("heading")}</h1>
        <div className="max-w-sm mx-auto px-4 sm:px-0 flex flex-col gap-4">
          {sections.map((section) => (
            <div key={section.title} className={`rounded-xl border-2 p-5 ${section.className}`}>
              <h2 className="ml-1 text-lg text-gray-700 font-semibold">
                <FontAwesomeIcon icon={section.icon} /> {section.title}
              </h2>
              <div className="flex flex-col gap-2 mt-3">
                {section.links.map((link) => (
                  <LinkWrapper link={link} className="flex items-center gap-2 cursor-pointer border border-transparent hover:border-gray-500 rounded-lg py-1 px-1 sm:px-2" key={link.href} onCopy={onCopy}>
                    {link.image && <Image src={link.image} alt={`${link.title} icon`} className="h-full max-h-[2.5rem] w-auto rounded-full" />}
                    <div className="flex flex-col">
                      <h3 className="font-medium text-gray-700">
                        {link.title} {link.type === "external" && <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm text-gray-600" />}
                      </h3>
                      <div className="text-sm text-gray-600">{copied === link.href ? t("copied") : link.description}</div>
                    </div>
                  </LinkWrapper>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-sm mx-auto px-4 sm:px-0 flex flex-col gap-4 mt-4">
          {links
            .filter((link) => (viewMore ? true : (link.priority ?? 0) > 0))
            .map((link) => (
              <a href={link.href} target="_blank" rel="noreferrer noopener" key={link.href} className="w-full text-lg font-medium border rounded-md px-5 py-2 text-gray-700 hover:border-gray-500 bg-gray-50/70 border-gray-200">
                {link.icon && <FontAwesomeIcon icon={link.icon} className="h-4" />} {link.title} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm text-gray-600" />
              </a>
            ))}
          {!viewMore && (
            <button onClick={() => setViewMore(true)} className="block mx-auto text-sm text-gray-500 hover:underline font-medium text-center">
              {t("view_more")} <FontAwesomeIcon icon={faChevronDown} />
            </button>
          )}
        </div>
      </main>
    </>
  );
}

export const LinkWrapper = ({ link, children, className, onCopy, onClick }: { link: SectionLink | LinkType; children: React.ReactNode; className: string; onCopy?: (href: string) => void; onClick?: () => void }) => {
  switch (link.type) {
    case "internal":
      return (
        <Link href={link.href} className={className} onClick={onClick ?? (() => {})}>
          {children}
        </Link>
      );
    case "external":
      return (
        <a href={link.href} target="_blank" rel="noreferrer noopener" className={className} onClick={onClick ?? (() => {})}>
          {children}
        </a>
      );
    case "copy":
      return (
        <button onClick={() => (onCopy ? onCopy(link.href) : () => {})} className={`${className} text-left`}>
          {children}
        </button>
      );
  }
};
