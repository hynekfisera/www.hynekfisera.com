import React from "react";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["header", "footer", "donate"])),
    },
  };
}

export default function Donate(props: any) {
  const { t }: any = useTranslation("donate");
  const { locale } = useRouter();

  return (
    <>
      <NextSeo
        title={t("title")}
        description={t("description")}
        // @ts-ignore
        canonical={props._nextI18Next.initialLocale === "en" ? "https://www.hynekfisera.com/links" : "https://www.hynekfisera.cz/links"}
        openGraph={{
          type: "website",
          // @ts-ignore
          url: props._nextI18Next.initialLocale === "en" ? "https://www.hynekfisera.com/links" : "https://www.hynekfisera.cz/links",
          title: t("title"),
          description: t("description"),
          site_name: "Hynek Fišera",
        }}
        languageAlternates={[
          {
            hrefLang: "en",
            href: "https://www.hynekfisera.com/links",
          },
          {
            hrefLang: "cs",
            href: "https://www.hynekfisera.cz/links",
          },
        ]}
      />
      <main className="py-8">
        <h1 className="text-center text-3xl font-semibold mb-4">{t("heading")}</h1>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-0">
          <p className="text-center sm:text-lg">{t("description")}</p>
          <section className="mt-8">
            <h2 className="text-xl font-medium text-slate-700">{t("subscriptions")}</h2>
            <p className="text-slate-500 mt-0.5">{t("subscriptions_description")}</p>
            <ul className="list-inside list-disc mt-1.5">
              <li>
                <a className="text-indigo-500 hover:underline" href="https://patreon.com/hynekfisera" target="_blank" rel="noopener noreferrer">
                  Patreon
                </a>
              </li>
            </ul>
          </section>
          <section className="mt-6">
            <h2 className="text-xl font-medium text-slate-700">{t("one_time")}</h2>
            <p className="text-slate-500 mt-0.5">{t("one_time_description")}</p>
            <ul className="list-inside list-disc mt-1.5">
              <li>
                <a className="text-indigo-500 hover:underline" href="https://www.buymeacoffee.com/hynekfisera" target="_blank" rel="noopener noreferrer">
                  Buy Me a Coffee
                </a>
              </li>
              <li>
                <a className="text-indigo-500 hover:underline" href="https://streamelements.com/arfilive/tip" target="_blank" rel="noopener noreferrer">
                  StreamElements (PayPal)
                </a>
              </li>
              <li>
                <a className="text-indigo-500 hover:underline" href="https://revolut.me/hynekfisera" target="_blank" rel="noopener noreferrer">
                  Revolut
                </a>
              </li>
            </ul>
          </section>
          <section className="mt-6">
            <h2 className="text-xl font-medium text-slate-700">{t("affiliate")}</h2>
            <p className="text-slate-500 mt-0.5">{t("affiliate_description")}</p>
            <ul className="list-inside list-disc mt-1.5">
              <li>
                <a className="text-indigo-500 hover:underline" href="https://www.alza.cz/?idp=16529&banner_id=45040" target="_blank" rel="noopener noreferrer">
                  Alza.cz
                </a>
              </li>
              <li>
                <a className="text-indigo-500 hover:underline" href={locale === "en" ? "https://www.wedos.com/?ap=10WER2" : "https://www.wedos.cz/?ap=10WER2"} target="_blank" rel="noopener noreferrer">
                  WEDOS Internet
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
