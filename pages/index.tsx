import { faArrowDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Image from "next/image";
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
import Arlb from "/public/portfolio/arlb.svg";
import ArlbPortfolio from "/public/portfolio/portfolioARLB.png";
import Nylium from "/public/portfolio/nylium.png";
import NyliumPortfolio from "/public/portfolio/portfolioNylium.png";
import Vrcc from "/public/portfolio/vrcc.png";
import VrccPortfolio from "/public/portfolio/portfolioVrcc.png";
import Arfi from "/public/portfolio/arfi.svg";
import ArfiPortfolio from "/public/portfolio/portfolioArfi.png";
import NekrPortfolio from "/public/portfolio/portfolioNekr.png";
import Helpdesk from "/public/portfolio/helpdesk.svg";
import HelpdeskPortfolio from "/public/portfolio/portfolioHelpdesk.png";
import KittisarusPortfolio from "/public/portfolio/portfolioKittisaurus.png";
import ArticlesPortfolio from "/public/portfolio/portfolioArticles.png";
import EkoPortfolio from "/public/portfolio/portfolioEko.png";
import UHrochu from "/public/portfolio/UHrochu.svg";
import UHrochuPortfolio from "/public/portfolio/portfolioUHrochu.png";
import ASMR from "/public/portfolio/asmr.svg";
import ASMRPortfolio from "/public/portfolio/portfolioAsmr.png";
import VWAPortfolio from "/public/portfolio/portfolioVwa.png";
import Batcore from "/public/portfolio/batcore.svg";
import BatcorePortfolio from "/public/portfolio/portfolioBatcore.png";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";
import { Category } from "../types/Category";
import SectionHeading from "../components/SectionHeading";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["header", "footer", "index"])),
    },
  };
}

const Home: NextPage = (props) => {
  const { t }: any = useTranslation("index");
  const [isMobile, setIsMobile] = useState<null | boolean>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const categories: Category[] = [
    {
      name: t("category_webapp"),
      projects: [
        {
          image: FlairleapPortfolio,
          logo: Flairleap,
          name: "Flairleap",
          description: t("portfolio_flairleap"),
          href: "https://flairleap.com/?force_landing=1",
        },
        {
          image: ASMRPortfolio,
          logo: ASMR,
          name: "interactiveASMR",
          description: t("portfolio_asmr"),
          href: "https://asmr.hynekfisera.com/",
        },
        {
          image: HelpdeskPortfolio,
          logo: Helpdesk,
          name: "HelpDesk",
          description: t("portfolio_helpdesk"),
          href: "https://kyberna.cz/",
        },
        {
          image: ArticlesPortfolio,
          name: "Article remover",
          description: t("portfolio_articles"),
          href: "https://odstraneni-clenu.hynekfisera.com/",
        },
        {
          image: KittisarusPortfolio,
          name: "Kittisaurus",
          description: t("portfolio_kittisarus"),
          href: "https://kittisaurus.hynekfisera.com/",
        },
        {
          image: SwiftpassPortfolio,
          logo: Swiftpass,
          name: "Swiftpass",
          description: t("portfolio_swiftpass"),
          href: "https://swiftpass.hynekfisera.com/",
        },
      ],
    },
    {
      name: t("category_website"),
      projects: [
        {
          image: ArfiPortfolio,
          logo: Arfi,
          name: "Arfi",
          description: t("portfolio_arfi"),
          href: "https://arfi.cz/",
        },
        {
          image: VWAPortfolio,
          name: "VWA",
          description: t("portfolio_vwa"),
          href: "https://vwa.cz/",
        },
        {
          image: NekrPortfolio,
          name: "HNK NEKR",
          description: t("portfolio_nekr"),
          href: "https://hnk-nekr.cz/",
        },
      ],
    },
    {
      name: t("category_design_and_other"),
      projects: [
        {
          image: BatcorePortfolio,
          logo: Batcore,
          name: "BatCore.eu",
          description: t("portfolio_batcore"),
          href: "https://www.behance.net/gallery/188816001/Responsive-logo-for-BatCoreeu",
        },
        {
          image: EryesPortfolio,
          logo: Eryes,
          name: "Eryes",
          description: t("portfolio_eryes"),
          href: "https://www.twitch.tv/eryesloleague",
        },
        {
          image: GarnetPortfolio,
          logo: Garnet,
          name: "Garnet",
          description: t("portfolio_garnet"),
          href: "https://github.com/GarnetOS",
        },
        {
          image: UHrochuPortfolio,
          logo: UHrochu,
          name: "Roubenka U Hrochů",
          description: t("portfolio_uhrochu"),
          href: "https://www.roubenkauhrochu.cz/",
        },
      ],
    },
    {
      name: t("category_retired_projects"),
      projects: [
        {
          image: EkoPortfolio,
          name: "EKO odpisy",
          description: t("portfolio_eko"),
          href: "https://eko-odpisy.hynekfisera.com/",
        },
        {
          image: NyliumPortfolio,
          logo: Nylium,
          name: "Nylium",
          description: t("portfolio_nylium"),
          href: "https://dev.hynekfisera.com/nylium/",
        },
        {
          image: VrccPortfolio,
          logo: Vrcc,
          name: "VRCC",
          description: t("portfolio_vrcc"),
          href: "https://dev.hynekfisera.com/vrcc/",
        },
        {
          image: AcewillPortfolio,
          logo: Acewill,
          name: "Acewill",
          description: t("portfolio_acewill"),
        },
        {
          image: ArlbPortfolio,
          logo: Arlb,
          name: "AR Living Book",
          description: t("portfolio_arlb"),
        },
      ],
    },
  ];

  return (
    <>
      <NextSeo
        title={t("title")}
        description={t("description")}
        // @ts-ignore
        canonical={props._nextI18Next.initialLocale === "en" ? "https://www.hynekfisera.com/" : "https://www.hynekfisera.cz/"}
        openGraph={{
          type: "website",
          // @ts-ignore
          url: props._nextI18Next.initialLocale === "en" ? "https://www.hynekfisera.com/" : "https://www.hynekfisera.cz/",
          title: t("title"),
          description: t("description"),
          site_name: "Hynek Fišera",
        }}
        languageAlternates={[
          {
            hrefLang: "en",
            href: "https://www.hynekfisera.com/",
          },
          {
            hrefLang: "cs",
            href: "https://www.hynekfisera.cz/",
          },
        ]}
      />
      <main className="max-w-screen-xl mx-auto px-8">
        <section className="mt-8 sm:mt-12 lg:mt-16" id="about-me">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold !leading-snug text-gray-900">
            <Trans t={t} i18nKey="intro" components={[<span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-purple-600" key={0}></span>, <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-purple-600" key={1}></span>]} />
          </h1>
          <p className="mt-4 sm:text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            {t("working_on")} <FontAwesomeIcon icon={faArrowDown} className="ml-1 text-purple-500" />
          </p>
        </section>
        <section className="my-12 sm:my-16 lg:my-20 flex flex-col gap-24" id="portfolio">
          {categories.map((category, i) => (
            <div key={i}>
              <SectionHeading>{category.name}</SectionHeading>
              <hr className="mb-8 max-w-[60%] sm:max-w-[40%] md:max-w-[25%] border-gray-300" />
              <div className="grid place-items-center sm:grid-cols-2 xl:grid-cols-3 gap-12 sm:gap-16">
                {category.projects.map((project, i) => (
                  <WaitForAnimation key={project.name} i={i} className="flex flex-col items-center gap-3" isMobile={isMobile}>
                    {project.image && (
                      <div className="w-full max-w-[90%] sm:max-w-[80%] h-auto -mb-2">
                        <Image src={project.image} alt={`${project.name} showcase`} />
                      </div>
                    )}
                    <div className={`flex items-center justify-center h-8 sm:h-9 ${!project.logo ? "-my-1" : "max-w-[60%]"}`}>
                      {project.logo && <Image src={project.logo} alt={`${project.name} logo`} className="h-full w-auto" />}
                      <h2 className={`text-gray-800 font-semibold text-2xl sm:text-3xl text-center ${project.logo && "hidden"}`}>{project.name}</h2>
                    </div>
                    <div className="text-center sm:text-lg font-medium text-gray-800">{project.description}</div>
                    {project.href && (
                      <a href={project.href} className="select-none uppercase text-sm font-medium text-indigo-600 hover:text-indigo-400" rel="noopener noreferrer" target="_blank">
                        {t("learn_more")} <FontAwesomeIcon icon={faChevronRight} />
                      </a>
                    )}
                  </WaitForAnimation>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;

const WaitForAnimation = ({ children, i, className, isMobile }: { children: ReactNode; i: number; className: string; isMobile: boolean | null }) => {
  if (isMobile === null) return <></>;
  if (i < 3) {
    return (
      <motion.div
        className={className}
        initial="initial"
        animate="animate"
        variants={{
          initial: { opacity: 0, x: 0, y: isMobile ? 0 : -20 },
          animate: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              delay: 0.15 + 0.07 * i,
            },
          },
        }}
      >
        {children}
      </motion.div>
    );
  } else if (i < 6) {
    return (
      <motion.div
        className={className}
        initial="initial"
        animate="animate"
        variants={{
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: {
              delay: 0.25,
            },
          },
        }}
      >
        {children}
      </motion.div>
    );
  } else {
    return <div className={className}>{children}</div>;
  }
};
