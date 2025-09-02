"use client";

import { montserrat } from "@/assets/fonts";
import { Link } from "@/i18n/navigation";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface Contacts {
  id: number;
  imgHref: string;
  name: string;
  imgWidth: number;
  imgHeight: number;
  accountHref: string;
}

const contacts: Contacts[] = [
  {
    id: 0,
    imgHref: "/telegram-logo.svg",
    name: "Telegram",
    imgWidth: 100,
    imgHeight: 100,
    accountHref: "https://t.me/donerducktales",
  },
  {
    id: 1,
    imgHref: "/djinni-logo.jpeg",
    name: "Djinni",
    imgWidth: 100,
    imgHeight: 100,
    accountHref: "https://djinni.co/q/0a7191edfa/",
  },
  {
    id: 2,
    imgHref: "/linkedin-logo.svg",
    name: "Linkedin",
    imgWidth: 100,
    imgHeight: 100,
    accountHref: "https://linkedin.com/in/sviatoslav-koval-91362b321",
  },
  {
    id: 3,
    imgHref: "/github-mark.svg",
    name: "Github",
    imgWidth: 100,
    imgHeight: 100,
    accountHref: "https://github.com/donerducktales",
  },
];

const BackToTop = () => {
  const t = useTranslations("homePage");

  return (
    <Link href={"/#getStarted"}>
      <div
        className={`backToTopButton flex flex-col items-center gap-2 mt-12 ${montserrat.className}`}
      >
        <ChevronUpIcon className="text-black w-6" />
        <h1 className="text-sm text-black">{t("contact.backToTop")}</h1>
      </div>
    </Link>
  );
};

export default function Contact() {
  const t = useTranslations("homePage");

  return (
    <section
      className={`contact w-full mt-8 pt-12 pb-8 flex flex-col items-center text-black bg-white`}
    >
      <motion.div
        className={`contactWrapper flex flex-col items-center px-4 max-w-[1280px] w-full`}
        initial={{ translateY: 300 }}
        whileInView={{ translateY: 0 }}
        viewport={{ once: true }}
      >
        <div
          className={`contactTextWrapper ${montserrat.className} px-8 py-4 border-4 mb-8 border-black`}
        >
          <h1 className="sm:text-4xl text-3xl font-semibold">
            {t("contact.h1")}
          </h1>
        </div>
        <div
          className={`contactList w-full flex flex-row flex-wrap justify-center items-center sm:gap-32 gap-16`}
        >
          {contacts.map((el) => (
            <motion.div
              key={el.id}
              initial={{ scale: 1 }}
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 1.05 }}
              className={`contactListElem flex flex-col gap-2 items-center cursor-pointer ${montserrat.className}`}
            >
              <Link href={el.accountHref} target="_blank">
                <Image
                  src={el.imgHref}
                  alt={el.name}
                  width={el.imgWidth}
                  height={el.imgHeight}
                />
              </Link>
              <h1 className="text-xl">{el.name}</h1>
            </motion.div>
          ))}
        </div>
        <BackToTop />
      </motion.div>
    </section>
  );
}
