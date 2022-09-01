import React from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faInstagram, faLinkedin, faSpotify, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

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

export default function Links() {
  return (
    <>
      <NextSeo
        title="Links"
        description="Here are links to my GitHub, LinkedIn and other social media profiles"
        canonical="https://www.hynekfisera.com/links"
        openGraph={{
          type: "website",
          url: "https://www.hynekfisera.com/links",
          title: "Links - Hynek Fišera | Web Development & UX Design",
          description: "Here are links to my GitHub, LinkedIn and other social media profiles",
          site_name: "Hynek Fišera",
        }}
      />
      <main>
        <h1 className="text-center text-3xl font-semibold mb-8 hidden sm:block">Links</h1>
        <div className="max-w-sm mx-auto px-4 sm:px-0">
          {links.map((link, i) => (
            <Link href={link.href} key={i}>
              <a
                className={`mb-4 flex justify-center items-center gap-1 w-full text-lg font-medium text-center border rounded-md py-2 transition duration-200 hover:text-white ${
                  link.type === "primary" ? "border-indigo-600 text-indigo-600 hover:bg-indigo-500" : "border-slate-600 text-slate-600 hover:bg-slate-600"
                }`}
              >
                {link.icon && <FontAwesomeIcon icon={link.icon} className="h-4" />} {link.title}
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
