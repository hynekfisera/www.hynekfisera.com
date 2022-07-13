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
    <header className="max-w-screen-2xl mx-auto p-8 flex justify-between items-center">
      <Link href="/">
        <a className="select-none text-lg font-semibold uppercase tracking-wider">Hynek Fišera</a>
      </Link>
      <div className="hidden sm:flex gap-6">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            <a className="select-none uppercase tracking-wider hover:opacity-75">{link.text}</a>
          </Link>
        ))}
      </div>
    </header>
  );
}
