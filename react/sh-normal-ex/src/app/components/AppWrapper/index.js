// クライアントコンポーネントで layout.js に metadata を書いても反映されない問題の対応
// https://github.com/vercel/next.js/discussions/47547

"use client";

import React, { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// component
import Header from "@/components/Header/index.js";
import Footer from "@/components/Footer/index.js";
import ReserveModal from "@/components/ReserveModal/index.js";

export default function AppWrapper({ children }) {
  const [openReserveModalFlag, setOpenReserveModalFlag] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  const onClickReserveModal = useCallback(() => {
    setOpenReserveModalFlag((prevState) => !prevState);
  }, [setOpenReserveModalFlag]);

  const hideReserveModal = useCallback(() => {
    setOpenReserveModalFlag(false);
  }, [setOpenReserveModalFlag]);

  return (
    <>
      <Header isTopPage={pathname === "/"} onClickReserveModal={onClickReserveModal}/>
      {children}
      <Footer />
      {openReserveModalFlag && <ReserveModal hideReserveModal={hideReserveModal}/>}
    </>
  );
}
