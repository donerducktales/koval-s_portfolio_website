"use client";

import { montserrat } from "@/assets/fonts";
import { Link } from "@/i18n/navigation";
import { Works } from "@/layouts/Works";
import { ObjectId, WithId } from "mongodb";
import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

const WorkCard = ({
  _id,
  name,
  imgHref,
  description,
  projectLink,
}: WithId<Works>) => {
  const [hover, setHover] = useState<null | ObjectId>(null);
  const [isClient, setIsClient] = useState<boolean>(false);
  const t = useTranslations("homePage");
  const locale = useLocale();
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  function handleHoverEnter(prop: ObjectId) {
    if (window.innerWidth > 1024) {
      setHover(prop);
    } else {
      return
    }
  }

  function handleHoverLeave() {
     if (window.innerWidth > 1024) {
       setHover(null);
     } else {
       return;
     }
  }


  return (
    <div
      key={_id.toString()}
      onMouseEnter={() => handleHoverEnter(_id)}
      onMouseLeave={() => handleHoverLeave()}
      className={`workCard w-full flex flex-col items-center relative max-[420px]:w-[300px]`}
      onClick={() => setHover(_id)}
    >
      <Image
        src={imgHref}
        alt={name}
        width={1326}
        height={828}
        className={`w-full`}
      />
      {isClient && (hover === _id || window.innerWidth < 1024) ? (
        <motion.div
          className="workCardText bg-linear-to-t from-black to-transparent h-full w-full text-white absolute bottom-0 flex flex-col justify-end items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
        >
          <div
            className={`workCardTextWrapper flex flex-col items-center gap-4 p-4`}
          >
            <div className="flex flex-col items-start gap-0.5">
              <h1 className={`text-lg ${montserrat.className}`}>{name}</h1>
              <p className="text-sm">{description[locale]}</p>
            </div>
            <Link href={projectLink}>
              <button className="px-4 bg-white text-black rounded-3xl cursor-pointer">
                {t("works.exploreButton")}
              </button>
            </Link>
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </div>
  );
};

export default function WorksWrapper({
  parsedData,
}: {
  parsedData: WithId<Works>[];
}) {
  const t = useTranslations("homePage");
  
  return (
    <motion.div
      className={`worksWrapper flex flex-col items-center px-4 max-w-[1280px] w-full text-white`}
      initial={{ translateX: -1000 }}
      whileInView={{ translateX: 0, transition: { duration: 0.6 } }}
      viewport={{ once: true }}
    >
      <div
        className={`skillsTextWrapper ${montserrat.className} px-8 py-4 border-4 mb-6 border-white`}
      >
        <h1 className="sm:text-4xl text-3xl font-semibold">{t("works.h1")}</h1>
      </div>
      <div
        className={`worksList max-w-[1280px] w-full grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] justify-items-center justify-center gap-4 gap-y-4 mt-6`}
      >
        {parsedData.map((el) => (
          <WorkCard
            key={el._id.toString()}
            _id={el._id}
            name={el.name}
            imgHref={el.imgHref}
            description={el.description}
            projectLink={el.projectLink}
          />
        ))}
      </div>
    </motion.div>
  );
}
