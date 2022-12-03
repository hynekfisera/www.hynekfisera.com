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
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

function MyApp({ Component, pageProps, router }: AppProps) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className={`${inter.variable} font-sans`}>
      <GoogleAnalytics trackPageViews />
      <DefaultSeo {...SEO} />
      <motion.div
        transition={{ type: "linear" }}
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
      >
        <Header />
        <motion.div
          key={router.route}
          transition={{ type: "linear" }}
          initial="initial"
          animate="animate"
          variants={{
            initial: { opacity: 0, x: isMobile ? 0 : -10, y: 0 },
            animate: {
              opacity: 1,
              x: 0,
              y: 0,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
        <Footer />
      </motion.div>
    </div>
  );
}

export default appWithTranslation(MyApp);
