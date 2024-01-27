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
import { IconDefinition, faArrowUpRightFromSquare, faCode, faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
      <main className="max-w-lg xl:max-w-screen-xl mx-auto px-8 py-2 sm:py-8">
        <h1 className="text-center text-2xl sm:text-3xl font-medium mb-6 sm:mb-8 text-gray-800">{t("heading")}</h1>
        <div className="grid gap-4">
          <Section className="bg-gray-100 rounded-3xl max-sm:py-8 sm:max-xl:py-12">
            <div className="w-full max-w-[16rem] xl:max-w-5xl mx-auto flex flex-col-reverse xl:flex-row xl:justify-between items-center gap-6 xl:gap-0">
              <div className="w-full flex flex-col justify-center xl:py-4 gap-6 xl:gap-8">
                <div className="flex flex-col">
                  <div className="text-gray-500 sm:text-lg lg:text-lg">{t("intro")}</div>
                  <div className="text-2xl sm:text-3xl xl:text-4xl font-bold text-indigo-600">Hynek Fišera</div>
                  <div className="uppercase text-gray-700 font-medium text-xs sm:text-sm lg:text-lg">
                    {process.env.NEXT_PUBLIC_AGE}, <a>INFJ-T</a>
                  </div>
                </div>
                <div className="grid xl:grid-cols-3 gap-4 xl:gap-12">
                  <Info label={t("location_label")} text={t("location")} />
                  <Info label={t("education_label")} text={t("education")} double />
                </div>
              </div>
              <Image src={Photo} alt={t("photo_alt")} priority placeholder="blur" className="w-full max-w-[8rem] xl:max-w-[11rem] h-auto rounded-2xl" />
            </div>
          </Section>
          <section className="grid xl:grid-cols-5 gap-4">
            <Section className="xl:col-span-3">
              <SectionHeading>{t("work_heading")}</SectionHeading>
              <SectionDescription>{t("work_description")}</SectionDescription>
              <LinkGroup>
                <SectionLink fa={faCode} title="Portfolio" description={t("link_portfolio")} href="/" />
                <SectionLink fa={faGithub} title="GitHub" description={t("link_github")} href="https://github.com/hynekfisera" external={true} />
              </LinkGroup>
            </Section>
            <Section className="xl:col-span-2">
              <SectionHeading>{t("content_heading")}</SectionHeading>
              <SectionDescription>{t("content_description")}</SectionDescription>
              <LinkGroup>
                <SectionLink icon={ArfiIcon} title="Arfi" description={`700 ${t("subscribers")}`} href="https://youtube.com/@phpMyArfi" external={true} />
              </LinkGroup>
            </Section>
          </section>
          <Section>
            <SectionHeading>{t("education_heading")}</SectionHeading>
            <SectionList>
              <SectionItem href="https://uhk.cz/" icon={Fim} title={t("uhk")} description={t("uhk_description")} year="2023 - 2026" />
              <SectionItem href="https://kyberna.cz/" icon={Kyberna} title={t("kyberna")} description={t("kyberna_description")} year="2019 - 2023" />
            </SectionList>
          </Section>
          <Section>
            <SectionHeading>{t("certificates_heading")}</SectionHeading>
            <SectionList>
              <SectionItem href="https://www.credly.com/badges/5cadbc5e-34d9-4680-ac8d-80bbddef8d04/public_url" icon={Ccna3} title="CCNA: Enterprise Networking, Security, and Automation" description={t("cisco")} year="2023" />
              <SectionItem href="https://www.credly.com/badges/97100691-f076-4bdc-9be9-2b1ac9f8d364/public_url" icon={Ccna2} title="CCNA: Switching, Routing, and Wireless Essentials" description={t("cisco")} year="2022" />
              <SectionItem href="https://www.credly.com/badges/05ff75ff-625e-4af4-a1bb-fafd738e4597/public_url" icon={Ccna1} title="CCNA: Introduction to Networks" description={t("cisco")} year="2021" />
            </SectionList>
          </Section>
          <Section>
            <SectionHeading>{t("contact_heading")}</SectionHeading>
            <LinkGroup>
              <SectionLink fa={faLink} title={t("links")} description={t("links_description")} href="/contact" />
              <SectionLink fa={faLinkedin} title="LinkedIn" description={t("linkedin")} href="https://linkedin.com/in/hynekfisera" external={true} />
              <SectionLink fa={faEnvelope} title="Email" description="hynek@flairleap.com" href="mailto:hynek@flairleap.com" external={true} />
            </LinkGroup>
          </Section>
        </div>
      </main>
    </>
  );
}

const Info = ({ label, text, double, className }: { label: string; text: string; double?: boolean; className?: string }) => {
  return (
    <div className={`flex flex-col justify-center gap-1 ${double ? "col-span-2" : ""} ${className ?? ""}`}>
      <div className="uppercase text-gray-500 text-sm sm:text-base">{label}</div>
      <div className="text-lg max-w-[14rem] xl:max-w-none sm:text-xl xl:text-2xl font-semibold text-indigo-600">{text}</div>
    </div>
  );
};

const Section = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <section className={`pt-6 md:p-6 xl:bg-gray-100 xl:rounded-3xl ${className ?? ""}`}>{children}</section>;
};

const SectionHeading = ({ children }: { children: string }) => {
  return <h2 className="mb-1.5 md:mb-0 text-xl lg:text-2xl text-gray-500 font-medium">{children}</h2>;
};

const SectionList = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-2.5 mt-2.5">{children}</div>;
};

const SectionItem = ({ icon, title, description, year, href }: { icon?: StaticImageData; title: string; description: string; year: string; href: string }) => {
  return (
    <a href={href} className="group mr-auto flex items-center gap-3" target="_blank" rel="noopener noreferrer">
      {icon && <Image src={icon} alt={`${title} logo`} className="w-full max-w-[2rem] h-auto" />}
      <div className="flex flex-col">
        <h3 className="sm:text-lg font-medium text-gray-800 group-hover:underline">{title}</h3>
        <div className="text-sm text-gray-600">
          {year} | {description}
        </div>
      </div>
    </a>
  );
};

const SectionLink = ({ fa, icon, title, href, description, external }: { fa?: IconDefinition; icon?: StaticImageData; title: string; href: string; description?: string; external?: boolean }) => {
  const Tag = external ? "a" : Link;

  return (
    <Tag href={href} className="w-full md:w-auto flex items-center gap-2.5 cursor-pointer bg-gray-50 border border-gray-300 hover:border-gray-500 rounded-lg py-1.5 md:py-2 px-3 md:px-4" target={external ? "_blank" : ""} rel={external ? "noopener noreferrer" : ""}>
      {fa && <FontAwesomeIcon icon={fa} className="text-2xl max-w-[1.25rem] sm:max-w-none text-indigo-600" />}
      {icon && <Image src={icon} alt={`${title} icon`} className="h-full max-h-[2.5rem] w-auto rounded-full" />}
      <div className="flex flex-col">
        <h3 className="font-medium text-gray-700">
          {title} {external && <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm text-gray-600" />}
        </h3>
        {description && <div className="text-sm text-gray-600">{description}</div>}
      </div>
    </Tag>
  );
};

const SectionDescription = ({ children }: { children: React.ReactNode }) => {
  return <div className="my-1 sm:text-lg text-gray-900">{children}</div>;
};

const LinkGroup = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full flex flex-wrap gap-2.5 mt-2">{children}</div>;
};
