"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function MotionWrapper({ children }: Props) {
  const [isMobile, setIsMobile] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <motion.div
      key={pathname}
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
      {children}
    </motion.div>
  );
}
