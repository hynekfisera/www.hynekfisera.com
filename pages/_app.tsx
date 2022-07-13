import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
