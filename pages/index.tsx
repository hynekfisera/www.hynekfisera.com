import { faArrowDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../types/Project";
import Flairleap from "/public/portfolio/flairleap.svg";
import FlairleapPortfolio from "/public/portfolio/portfolioFlairleap.png";
import Swiftpass from "/public/portfolio/swiftpass.svg";
import SwiftpassPortfolio from "/public/portfolio/portfolioSwiftpass.png";
import Acewill from "/public/portfolio/acewill.png";
import AcewillPortfolio from "/public/portfolio/portfolioAcewill.png";
import Garnet from "/public/portfolio/garnet.png";
import GarnetPortfolio from "/public/portfolio/portfolioGarnet.png";
import Eryes from "/public/portfolio/eryes.png";
import EryesPortfolio from "/public/portfolio/portfolioEryes.png";
import Nylium from "/public/portfolio/nylium.png";
import NyliumPortfolio from "/public/portfolio/portfolioNylium.png";
import Vrcc from "/public/portfolio/vrcc.png";
import Arfi from "/public/portfolio/arfi.svg";

const projects: Project[] = [
  {
    image: FlairleapPortfolio,
    type: "Social network",
    logo: Flairleap,
    name: "Flairleap",
    description: "Social network which helps creators with presenting projects, building brands and reaching target audiences",
    href: "https://flairleap.com/",
  },
  {
    image: SwiftpassPortfolio,
    type: "Web application",
    logo: Swiftpass,
    name: "Swiftpass",
    description: "Smart password generator which can generate not only strong, but also quick-to-enter passwords",
    href: "https://swiftpass.fisera.co/",
  },
  {
    image: AcewillPortfolio,
    type: "UX design",
    logo: Acewill,
    name: "Acewill",
    description: "I designed a prototype of the Acewill operating system distributed by Aprocle",
    href: "http://aprocle.com/",
  },
  {
    image: GarnetPortfolio,
    type: "Logo design",
    logo: Garnet,
    name: "Garnet",
    description: "I designed a logo for the Garnet operating system",
    href: "https://github.com/GarnetOS",
  },
  {
    image: EryesPortfolio,
    type: "Social media",
    logo: Eryes,
    name: "Eryes",
    description: "I created livestream overlays and social media posts for the Eryes league",
    href: "https://www.twitch.tv/eryesloleague",
  },
  {
    image: NyliumPortfolio,
    type: "Website",
    logo: Nylium,
    name: "Nylium",
    description: "I coded a website for the Nylium Survival minecraft server",
  },
  {
    type: "Website",
    logo: Vrcc,
    name: "VRCC",
    description: "I developed a website for the VR Component Constructor project",
  },
  {
    type: "YouTube channel",
    logo: Arfi,
    name: "Arfi",
    description: "The quickest and easiest way to learn web development online",
    href: "https://arfi.cz/",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <main className="max-w-screen-2xl mx-auto px-6">
        <section className="mt-8 sm:mt-12 lg:mt-16" id="about-me">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl max-w-[90%] font-bold !leading-snug text-gray-900">
            Full-stack web <span className="text-indigo-600">developer</span> and YouTube <span className="text-indigo-600">content creator</span> also interested in UI/UX design and digital art
          </h1>
          <h2 className="mt-4 sm:text-lg font-medium text-indigo-600">
            See what I{"'"}ve been working on <FontAwesomeIcon icon={faArrowDown} className="ml-1" />
          </h2>
        </section>
        <section className="my-12 sm:my-16 lg:my-20 grid place-items-center sm:grid-cols-2 xl:grid-cols-3" id="portfolio">
          {projects.map((project) => (
            <div key={project.name} className="flex flex-col items-center gap-3 py-8 px-6 sm:py-12 sm:px-8">
              {project.image && (
                <div className="w-full h-48 sm:h-64 relative -mb-3">
                  <Image src={project.image} alt={`${project.name} showcase`} layout="fill" objectFit="contain" />
                </div>
              )}
              <div className="text-sm sm:text-base uppercase tracking-wider text-gray-700">{project.type}</div>
              <div className="h-8 sm:h-12 sm:max-w-[50%] w-full relative">
                <Image src={project.logo} alt={`${project.name} logo`} layout="fill" objectFit="contain" />
              </div>
              <div className="text-center sm:text-lg font-medium text-gray-900">{project.description}</div>
              {project.href && (
                <Link href={project.href}>
                  <a className="select-none uppercase text-sm font-medium text-indigo-600 hover:text-indigo-400">
                    Learn more <FontAwesomeIcon icon={faChevronRight} />
                  </a>
                </Link>
              )}
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
