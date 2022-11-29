import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className="max-w-screen-xl mx-auto p-8 pt-12 flex flex-col gap-2">
      <div className="text-center text-gray-600 font-medium">
        &copy; Hynek Fišera 2017-{new Date().getFullYear()} |{" "}
        <Link href="https://www.buymeacoffee.com/hynekfisera" className="text-yellow-500 font-normal hover:underline">
          Buy Me a Coffee
        </Link>
      </div>
      <div className="text-center text-gray-500">
        {t("built_deployed")}{" "}
        <Link href="https://nextjs.org/" className="text-indigo-400 hover:underline">
          Next.js
        </Link>
        ,{" "}
        <Link href="https://tailwindcss.com/" className="text-indigo-400 hover:underline">
          TailwindCSS
        </Link>{" "}
        {t("and")}{" "}
        <Link href="https://vercel.com/" className="text-indigo-400 hover:underline">
          Vercel
        </Link>
      </div>
    </footer>
  );
}
