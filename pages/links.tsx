import React from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faInstagram, faLinkedin, faSpotify, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["header", "footer", "links"])),
    },
  };
}

const links = [
  {
    title: "Portfolio",
    icon: faGlobe,
    href: "/",
    type: "primary",
  },
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
    title: "YouTube",
    icon: faYoutube,
    href: "https://youtube.com/phpmyarfi",
    type: "secondary",
  },
  {
    title: "Twitch",
    icon: faTwitch,
    href: "https://twitch.tv/arfilive",
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
      <main>
        <h1 className="text-center text-3xl font-semibold mb-8 hidden sm:block">{t("heading")}</h1>
        <div className="max-w-sm mx-auto px-4 sm:px-0">
          {links.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className={`mb-4 flex justify-center items-center gap-1 w-full text-lg font-medium text-center border rounded-md py-2 transition duration-200 hover:text-white ${
                link.type === "primary" ? "border-indigo-600 text-indigo-600 hover:bg-indigo-500" : "border-slate-600 text-slate-600 hover:bg-slate-600"
              }`}
            >
              {link.icon && <FontAwesomeIcon icon={link.icon} className="h-4" />} {link.title}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
