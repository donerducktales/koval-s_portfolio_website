"use client";

import { Translations } from "@/types/types";
import { useLocale } from "next-intl";
import Link from "next/link";

interface FooterButton {
  id: number;
  title: Translations;
  href: string;
}

const footerButtons: FooterButton[] = [
  {
    id: 0,
    title: {
      en: "About",
      uk: "Про мене",
    },
    href: "#about",
  },
  {
    id: 1,
    title: {
      en: "Works",
      uk: "Роботи",
    },
    href: "#works",
  },
  {
    id: 2,
    title: {
      en: "Skills",
      uk: "Навички",
    },
    href: "#skills",
  },
];

export default function Footer() {
  const locale = useLocale();

  return (
    <footer className="w-full flex flex-col items-center border-t border-white/10 mt-16">
      <div className="max-w-[1280px] w-full px-4 h-20 flex flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white">
          <span className="text-lg font-semibold">Koval</span>
          <span className="text-white/60 text-sm">Portfolio</span>
        </div>

        {/* Nav */}
        <nav className="flex flex-row gap-6 text-white sm:text-base text-sm">
          {footerButtons.map((button) => (
            <Link key={button.id} href={button.href} className="hover:text-white/80">
              {button.title[locale]}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

