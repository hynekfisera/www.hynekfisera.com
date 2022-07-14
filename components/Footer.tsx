import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-screen-2xl mx-auto p-8 flex flex-col md:flex-row gap-2 justify-between items-center">
      <div className="text-center">&copy; Hynek Fišera 2022</div>
      <div className="text-center">
        Built {"&"} deployed using{" "}
        <Link href="https://nextjs.org/">
          <a className="text-indigo-600 hover:text-indigo-400">Next.js</a>
        </Link>
        ,{" "}
        <Link href="https://tailwindcss.com/">
          <a className="text-indigo-600 hover:text-indigo-400">Tailwind</a>
        </Link>{" "}
        and{" "}
        <Link href="https://vercel.com/">
          <a className="text-indigo-600 hover:text-indigo-400">Vercel</a>
        </Link>
      </div>
    </footer>
  );
}
