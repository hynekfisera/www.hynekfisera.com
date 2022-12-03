import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className="max-w-screen-xl mx-auto p-8 pt-12 flex flex-col gap-2">
      <div className="text-center text-gray-600 font-medium">
        &copy; Hynek Fišera 2017-{new Date().getFullYear()} |{" "}
        <Link href="/donate" className="text-indigo-500 font-normal hover:underline">
          {t("donate")}
        </Link>
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
