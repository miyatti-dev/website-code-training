// クライアントコンポーネントで layout.js に metadata を書いても反映されない問題の対応
// https://github.com/vercel/next.js/discussions/47547

"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// component
import Header from "@/components/Header/index.js";
import Footer from "@/components/Footer/index.js";

export default function AppWrapper({ children }) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  const pathname = usePathname();

  return (
    <>
      <Header isTopPage={pathname === "/"} />
      {children}
      <Footer />
    </>
  );
}
