"use client";

import { Translations } from "@/types/types";
import { CommandLineIcon } from "@heroicons/react/24/outline";
import { useLocale } from "next-intl";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface NavButtons {
  id: number;
  title: Translations;
}

const navButtons: NavButtons[] = [
  {
    id: 0,
    title: {
      en: "About me",
      uk: "Про мене",
    },
  },
  {
    id: 1,
    title: {
      en: "Skills",
      uk: "Навички",
    },
  },
  {
    id: 2,
    title: {
      en: "Works",
      uk: "Роботи",
    },
  },
];

const NavButtons = () => {
  const locale = useLocale();

  return (
    <>
      <motion.div
        initial={{ translateX: -1000 }}
        animate={{ translateX: 0 }}
        className="m-0 p-0"
      >
        <CommandLineIcon className="text-white w-7 cursor-pointer" />
      </motion.div>
      <motion.nav
        className={`navButtons flex flex-row gap-8 text-white sm:text-base text-sm cursor-pointer`}
        initial={{ translateX: 1000 }}
        animate={{ translateX: 0 }}
      >
        {navButtons.map((el) => (
          <p key={el.id}>{el.title[locale]}</p>
        ))}
      </motion.nav>
    </>
  );
};

export default function Header() {
  const [headerBg, setHeaderBg] = useState(false);

  useEffect(() => {
    const changeHeaderBg = () => {
      if (window.scrollY >= 50) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }
    };

    window.addEventListener("scroll", changeHeaderBg);

    return () => {
      window.removeEventListener("scroll", changeHeaderBg);
    };
  }, []);

  return (
    <header
      className={`header w-full flex flex-col items-center sticky top-0 transition-colors duration-500 ${
        headerBg ? "bg-black" : "bg-transparent"
      }`}
    >
      <div
        className={`headerWrapper max-w-[1280px] w-full h-16 px-4 flex flex-row justify-between items-center`}
      >
        <NavButtons />
      </div>
    </header>
  );
}
