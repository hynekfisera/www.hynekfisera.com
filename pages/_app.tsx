import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "../components/Footer";
config.autoAddCss = false;
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Inter } from "@next/font/google";
import { appWithTranslation } from "next-i18next";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} font-sans`}>
      <GoogleAnalytics trackPageViews />
      <DefaultSeo {...SEO} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default appWithTranslation(MyApp);
