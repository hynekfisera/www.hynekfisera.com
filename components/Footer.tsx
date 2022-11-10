import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-screen-xl mx-auto p-8 flex flex-col md:flex-row gap-2 justify-between items-center">
      <div className="text-center">&copy; Hynek Fišera 2022</div>
      <div className="text-center">
        Built {"&"} deployed using{" "}
        <Link href="https://nextjs.org/" className="text-indigo-600 hover:text-indigo-400">
          Next.js
        </Link>
        ,{" "}
        <Link href="https://tailwindcss.com/" className="text-indigo-600 hover:text-indigo-400">
          Tailwind
        </Link>{" "}
        and{" "}
        <Link href="https://vercel.com/" className="text-indigo-600 hover:text-indigo-400">
          Vercel
        </Link>
      </div>
    </footer>
  );
}
