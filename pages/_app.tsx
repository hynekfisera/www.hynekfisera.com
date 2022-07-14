import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "../components/Footer";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
