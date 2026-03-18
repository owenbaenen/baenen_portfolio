"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full p-4 hover:text-xl transition-all duration-300 ease-out text-[#0d1224] bg-gradient-to-b from-[#1af5b6] to-[#10c78f] shadow-[0_6px_14px_rgba(22,242,179,0.18)] ring-1 ring-[#16f2b3]/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] hover:-translate-y-[1px] hover:shadow-[0_8px_18px_rgba(22,242,179,0.22)] active:translate-y-[1px] active:shadow-none";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setBtnCls(DEFAULT_BTN_CLS.replace(" hidden", ""));
      } else {
        setBtnCls(DEFAULT_BTN_CLS + " hidden");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);

  const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button className={btnCls} onClick={onClickBtn}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
