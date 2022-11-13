import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    text: "Portfolio",
    href: "/",
  },
  {
    text: "Social",
    href: "/links",
  },
  {
    text: "Contact",
    href: "mailto:hynek@flairleap.com",
  },
];

export default function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <header className="max-w-screen-xl mx-auto p-8 flex justify-between items-center">
      <Link href="/" onClick={() => setVisible(false)} className="select-none text-lg font-semibold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-purple-600">
        Hynek Fišera
      </Link>
      <FontAwesomeIcon icon={faBars} className={`text-xl p-1 text-slate-700 sm:!hidden cursor-pointer`} onClick={() => setVisible((v) => !v)} />
      <div className={`${visible ? "flex" : "hidden"} absolute sm:static bg-gray-50 sm:bg-transparent top-0 left-0 right-0 mt-20 sm:mt-0 pl-8 pb-8 sm:p-0 border-b sm:border-none sm:!flex flex-col sm:flex-row gap-2 sm:gap-6`}>
        {links.map((link) => (
          <Link href={link.href} key={link.href} onClick={() => setVisible(false)} className="select-none uppercase tracking-wider hover:underline decoration-gray-500">
            {link.text}
          </Link>
        ))}
      </div>
    </header>
  );
}
