"use client";

import { montserrat } from "@/assets/fonts";
import SkillsList from "@/components/SkillsList";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations("homePage");

  return (
    <section
      id={"skills"}
      className={`skills w-full mt-8 py-12 flex flex-col items-center`}
    >
      <motion.div
        className={`skillsWrapper flex flex-col items-center px-4 max-w-[1280px] w-full text-white`}
        initial={{ translateX: 1000 }}
        whileInView={{ translateX: 0, transition: { duration: 0.6 } }}
      >
        <div
          className={`skillsTextWrapper ${montserrat.className} px-8 py-4 border-4 mb-6 border-white`}
        >
          <h1 className="sm:text-4xl text-3xl font-semibold">
            {t("skills.h1")}
          </h1>
        </div>
        <ChevronDownIcon className="w-7" />
        <SkillsList />
      </motion.div>
    </section>
  );
}
