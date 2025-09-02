"use client";

import { montserrat } from "@/assets/fonts";
import ExploreButton from "@/components/ExploreButton";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function GetStarted() {
  const t = useTranslations("homePage");

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: {duration: 1} }}
        className={`getStartedSection w-full px-4 py-12 flex flex-col items-center`}
        id={'getStarted'}
      >
        <CodeBracketIcon className="text-white w-12" />
        <div className={`getStartedSecText flex flex-col max-sm:items-center`}>
          <h1
            className={`${montserrat.className} sm:text-4xl text-3xl font-semibold mt-4 text-center`}
          >
            {t("getStarted.h1")}
          </h1>
          <h2
            className={`${montserrat.className} text-gray-400 sm:text-2xl text-xl`}
          >
            {t("getStarted.h2")}
          </h2>
        </div>
        <ExploreButton bg={"white"} textColor={"black"} />
      </motion.section>
    </>
  );
}
