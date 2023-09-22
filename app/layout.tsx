import "../styles/globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MotionWrapper from "../components/MotionWrapper";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin", "latin-ext"], display: "swap" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth bg-gray-50">
      <body className={inter.className}>
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
          <MotionWrapper>{children}</MotionWrapper>
          <Footer />
        </motion.div>
      </body>
    </html>
  );
}
