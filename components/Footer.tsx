/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className="max-w-screen-xl mx-auto p-8 pt-12 flex flex-col items-center gap-2">
      <div className="text-center text-gray-600 font-medium flex flex-wrap items-center justify-center gap-3">
        &copy; Hynek Fišera 2017-{new Date().getFullYear()}
        <a href="https://www.buymeacoffee.com/hynekfisera" target="_blank" rel="noreferrer noopener" className="inline-block h-6">
          <img className="h-full w-auto" src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hynekfisera&button_colour=6366f1&font_colour=f1f5f9&font_family=Inter&outline_colour=000000&coffee_colour=f1f5f9" alt="Buy Me a Coffee" />
        </a>
      </div>
      <div className="text-center text-gray-500">
        {t("built_deployed")}{" "}
        <a href="https://nextjs.org/" className="text-indigo-400 hover:underline" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>
        ,{" "}
        <a href="https://tailwindcss.com/" className="text-indigo-400 hover:underline" target="_blank" rel="noopener noreferrer">
          TailwindCSS
        </a>{" "}
        {t("and")}{" "}
        <a href="https://vercel.com/" className="text-indigo-400 hover:underline" target="_blank" rel="noopener noreferrer">
          Vercel
        </a>
      </div>
    </footer>
  );
}
