import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../types/Project";
import Flairleap from "../public/portfolio/flairleap.svg";
import Swiftpass from "../public/portfolio/swiftpass.svg";
import Acewill from "../public/portfolio/acewill.png";
import Garnet from "../public/portfolio/garnet.png";
import Eryes from "../public/portfolio/eryes.png";
import Vrcc from "../public/portfolio/vrcc.png";
import Nylium from "../public/portfolio/nylium.png";

const projects: Project[] = [
  {
    type: "Social network",
    logo: Flairleap,
    name: "Flairleap",
    description: "Social network which helps creators with presenting projects, building brands and reaching target audiences",
    href: "https://flairleap.com/",
  },
  {
    type: "Web application",
    logo: Swiftpass,
    name: "Swiftpass",
    description: "Smart password generator which can generate not only strong, but also quick-to-enter passwords",
    href: "https://swiftpass.fisera.co/",
  },
  {
    type: "UX design",
    logo: Acewill,
    name: "Acewill",
    description: "I designed a prototype of the Acewill operating system distributed by Aprocle",
    href: "http://aprocle.com/",
  },
  {
    type: "Logo design",
    logo: Garnet,
    name: "Garnet",
    description: "I designed a logo for the Garnet operating system",
    href: "https://github.com/GarnetOS",
  },
  {
    type: "Social media",
    logo: Eryes,
    name: "Eryes",
    description: "I created livestream overlays and social media posts for the Eryes league",
    href: "https://www.twitch.tv/eryesloleague",
  },
  {
    type: "Logo design",
    logo: Vrcc,
    name: "VRCC",
    description: "I developed a website for the VR Component Constructor project",
  },
  {
    type: "Website",
    logo: Nylium,
    name: "Nylium",
    description: "I coded a website for the Nylium Survival minecraft server",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <main className="max-w-screen-2xl mx-auto px-4 2xl:px-0">
        <section className="mt-8 sm:mt-12 lg:mt-16" id="about-me">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl max-w-[90%] font-bold !leading-snug text-gray-900">
            Full-stack web <span className="text-indigo-600">developer</span> and YouTube <span className="text-indigo-600">content creator</span> also interested in UI/UX design and digital art
          </h1>
          <h2 className="mt-4 sm:text-lg font-medium text-indigo-600">
            See what I{"'"}ve been working on <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
          </h2>
        </section>
        <section className="my-12 sm:my-16 lg:my-20 grid sm:grid-cols-2 xl:grid-cols-3" id="portfolio">
          {projects.map((project) => (
            <div key={project.name} className="flex flex-col items-center gap-3 py-8 px-6 sm:py-12 sm:px-8 hover:bg-gray-50">
              <div className="uppercase tracking-wider text-gray-700">{project.type}</div>
              <div className="h-12 w-full relative">
                <Image src={project.logo} alt={`${project.name} logo`} layout="fill" objectFit="contain" />
              </div>
              <div className="text-center text-lg font-medium text-gray-900">{project.description}</div>
              {project.href && (
                <Link href={project.href}>
                  <a className="uppercase text-sm font-medium text-indigo-600 hover:text-indigo-500">
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
