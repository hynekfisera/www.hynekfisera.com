import Link from "next/link";
import React from "react";

const links = [
  {
    text: "Portfolio",
    href: "/#portfolio",
  },
  {
    text: "About me",
    href: "/#about-me",
  },
  {
    text: "Contact",
    href: "mailto:hynek@flairleap.com",
  },
];

export default function Header() {
  return (
    <header className="max-w-screen-2xl mx-auto px-4 2xl:px-0 py-8 flex justify-between items-center">
      <span className="text-lg font-semibold uppercase tracking-wider">Hynek Fišera</span>
      <div className="flex gap-6">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            <a className="uppercase tracking-wider hover:opacity-75">{link.text}</a>
          </Link>
        ))}
      </div>
    </header>
  );
}
