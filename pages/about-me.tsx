import React from "react";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image, { StaticImageData } from "next/image";
import Photo from "/public/assets/photo.png";
import Kyberna from "/public/assets/kyberna.png";
import Fim from "/public/assets/fim.svg";
import Ccna1 from "/public/assets/ccna1_icon.png";
import Ccna2 from "/public/assets/ccna2_icon.png";
import Ccna3 from "/public/assets/ccna3_icon.png";
import Link from "next/link";
import ArfiIcon from "/public/assets/arfi_icon_small.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faArrowUpRightFromSquare, faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["header", "footer", "about-me", "index"])),
    },
  };
}

export default function AboutMe(props: any) {
  const { t }: any = useTranslation("about-me");

  return (
    <>
      <NextSeo
        title={t("title")}
        description={t("description")}
        // @ts-ignore
        canonical={props._nextI18Next.initialLocale === "en" ? "https://www.hynekfisera.com/about-me" : "https://www.hynekfisera.cz/about-me"}
        openGraph={{
          type: "website",
          // @ts-ignore
          url: props._nextI18Next.initialLocale === "en" ? "https://www.hynekfisera.com/about-me" : "https://www.hynekfisera.cz/about-me",
          title: t("title"),
          description: t("description"),
          site_name: "Hynek Fišera",
        }}
        languageAlternates={[
          {
            hrefLang: "en",
            href: "https://www.hynekfisera.com/about-me",
          },
          {
            hrefLang: "cs",
            href: "https://www.hynekfisera.cz/about-me",
          },
        ]}
      />
      <main className="max-w-screen-xl mx-auto px-8 py-2 sm:py-8">
        <h1 className="text-center text-3xl font-semibold mb-6 sm:mb-8">{t("heading")}</h1>
        <div className="grid gap-4">
          <section>
            <div className="grid grid-cols-5 grid-rows-2 gap-4">
              <Info label={t("name_label")} text="Hynek Fišera" double={true} />
              <Info label={t("location_label")} text={t("location")} double={true} />
              <Image src={Photo} alt={t("photo_alt")} className="rounded-3xl row-span-2" />
              <Info label={t("age_label")} text={t("age")} />
              <Info label={t("personality_label")} text="INFJ-T" />
              <Info label={t("education_label")} text={t("education")} double={true} />
            </div>
          </section>
          <section className="grid grid-cols-2 gap-4">
            <Section>
              <SectionHeading>{t("work_heading")}</SectionHeading>
              <div className="mt-1 text-lg text-gray-900">{t("work_description")}</div>
              <div className="flex gap-2.5 mt-2">
                <SectionLink fa={faCode} title="Portfolio" description={t("link_portfolio")} href="/" />
                <SectionLink fa={faGithub} title="GitHub" description={t("link_github")} href="https://github.com/hynekfisera" external={true} />
              </div>
            </Section>
            <Section>
              <SectionHeading>{t("content_heading")}</SectionHeading>
              <div className="mt-1 text-lg text-gray-900">{t("content_description")}</div>
              <div className="flex gap-2.5 mt-2">
                <SectionLink icon={ArfiIcon} title="Arfi" description={`700 ${t("subscribers")}`} href="https://youtube.com/@phpMyArfi" external={true} />
              </div>
            </Section>
          </section>
          <Section>
            <SectionHeading>{t("education_heading")}</SectionHeading>
            <SectionList>
              <SectionItem icon={Fim} title={t("uhk")} description={t("uhk_description")} year="2023 - 2026" />
              <SectionItem icon={Kyberna} title={t("kyberna")} description={t("kyberna_description")} year="2019 - 2023" />
            </SectionList>
          </Section>
          <Section>
            <SectionHeading>{t("certificates_heading")}</SectionHeading>
            <SectionList>
              <SectionItem icon={Ccna3} title="CCNA: Enterprise Networking, Security, and Automation" description={t("cisco")} year="2023" />
              <SectionItem icon={Ccna2} title="CCNA: Switching, Routing, and Wireless Essentials" description={t("cisco")} year="2022" />
              <SectionItem icon={Ccna1} title="CCNA: Introduction to Networks" description={t("cisco")} year="2021" />
            </SectionList>
          </Section>
        </div>
      </main>
    </>
  );
}

const Info = ({ label, text, double }: { label: string; text: string; double?: boolean }) => {
  return (
    <div className={`flex flex-col justify-center p-6 gap-1 bg-gray-100 rounded-3xl ${double ? "col-span-2" : ""}`}>
      <div className="uppercase text-gray-600">{label}</div>
      <div className="text-2xl font-semibold text-blue-500">{text}</div>
    </div>
  );
};

const Section = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <section className={`bg-gray-100 rounded-3xl p-6 ${className ?? ""}`}>{children}</section>;
};

const SectionHeading = ({ children }: { children: string }) => {
  return <h2 className="text-2xl text-gray-500 font-medium">{children}</h2>;
};

const SectionList = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-2.5 mt-2.5">{children}</div>;
};

const SectionItem = ({ icon, title, description, year }: { icon?: StaticImageData; title: string; description: string; year: string }) => {
  return (
    <div className="flex items-center gap-3">
      {icon && <Image src={icon} alt={`${title} logo`} className="w-full max-w-[2rem] h-auto" />}
      <div className="flex flex-col">
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <div className="text-sm text-gray-600">
          {year} | {description}
        </div>
      </div>
    </div>
  );
};

const SectionLink = ({ fa, icon, title, href, description, external }: { fa?: IconDefinition; icon?: StaticImageData; title: string; href: string; description?: string; external?: boolean }) => {
  return (
    <Link href={href} className="flex items-center gap-2 cursor-pointer bg-gray-50 border border-gray-300 hover:border-gray-500 rounded-lg py-2 px-2 sm:px-4" target={external ? "_blank" : ""} rel={external ? "noopener noreferrer" : ""}>
      {fa && <FontAwesomeIcon icon={fa} className="text-2xl text-gray-900" />}
      {icon && <Image src={icon} alt={`${title} icon`} className="h-full max-h-[2.5rem] w-auto rounded-full" />}
      <div className="flex flex-col">
        <h3 className="font-medium text-gray-700">
          {title} {external && <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm text-gray-600" />}
        </h3>
        {description && <div className="text-sm text-gray-600">{description}</div>}
      </div>
    </Link>
  );
};
