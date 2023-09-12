import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { LinkWrapper } from "../pages/links";
import { Link as LinkType } from "../types/HeaderLink";

export default function Header() {
  const { t } = useTranslation("header");
  const { locale, asPath } = useRouter();

  const links: Array<LinkType> = [
    {
      type: "internal",
      text: "Portfolio",
      href: "/",
    },
    {
      type: "internal",
      text: t("about"),
      href: "/about-me",
    },
    {
      type: "internal",
      text: t("links"),
      href: "/links",
    },
    {
      type: "external",
      text: t("contact"),
      href: "mailto:hynek@flairleap.com",
      button: true,
      icon: faEnvelope,
    },
  ];

  const [visible, setVisible] = useState(false);

  return (
    <header className={`max-w-screen-xl mx-auto p-8 flex justify-between items-center ${visible && "bg-white"} sm:bg-none`}>
      <Link href="/" onClick={() => setVisible(false)} className="select-none text-lg font-semibold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-purple-600">
        Hynek Fišera
      </Link>
      <div className="flex gap-4">
        <div className="flex sm:flex-row-reverse gap-2 sm:gap-4">
          <div className="grid place-items-center">
            <Link
              href={asPath}
              onClick={() => setVisible(false)}
              locale={locale === "en" ? "cs" : "en"}
              title={locale === "en" ? "Switch language" : "Změnit jazyk"}
              className="text-[0.6rem] bg-slate-100 border border-slate-200 rounded-xl font-semibold group text-slate-600 select-none uppercase tracking-wider px-2.5 py-1"
            >
              <span className="text-slate-400 group-hover:text-slate-600">{locale === "en" ? "cs" : "en"} | </span>
              {locale === "en" ? "en" : "cs"}
            </Link>
          </div>
          <div className={`${visible ? "flex" : "hidden"} items-end sm:items-center absolute sm:static bg-white sm:bg-transparent top-0 left-0 right-0 mt-20 sm:mt-0 px-10 pb-8 sm:p-0 border-b sm:border-none sm:!flex flex-col sm:flex-row gap-3 sm:gap-6`}>
            {links.map((link) => {
              if (link.button) {
                return (
                  <LinkWrapper link={link} key={link.href} onClick={() => setVisible(false)} className="btn btn-primary">
                    {link.text} {link.icon && <FontAwesomeIcon icon={link.icon} className="text-sm" />}
                  </LinkWrapper>
                );
              } else {
                return (
                  <LinkWrapper link={link} key={link.href} onClick={() => setVisible(false)} className="select-none font-medium tracking-wide text-slate-600 hover:underline decoration-gray-500">
                    {link.text}
                  </LinkWrapper>
                );
              }
            })}
          </div>
        </div>
        <FontAwesomeIcon icon={faBars} className={`text-xl p-1 text-slate-700 sm:!hidden cursor-pointer`} onClick={() => setVisible((v) => !v)} />
      </div>
    </header>
  );
}
