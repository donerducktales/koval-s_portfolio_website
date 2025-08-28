"use client"

import { inter, montserrat } from "@/assets/fonts";
import ExploreButton from "@/components/ExploreButton";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("homePage");
  return (
    <motion.section
      className={`about w-full mt-8 py-12 flex flex-col items-center bg-white`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      id="about"
    >
      <div
        className={`aboutWrapper text-black flex flex-col items-center px-4 max-w-[1280px] w-full`}
      >
        <div
          className={`aboutTextWrapper ${montserrat.className} px-8 py-4 border-4 mb-6 border-black`}
        >
          <h1 className="sm:text-4xl text-3xl font-semibold">
            {t("about.h1")}
          </h1>
        </div>
        <ChevronDownIcon className="w-7" />
        <p
          className={`aboutMe ${inter.className} sm:text-lg text-base mt-6 mb-2 max-w-5xl text-center`}
        >
          {t("about.p")}
        </p>
        <ExploreButton bg="black" textColor="white" />
      </div>
    </motion.section>
  );
}
