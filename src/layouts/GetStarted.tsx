import { inter, montserrat } from "@/assets/fonts";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

const ExploreButton = () => {
  const t = useTranslations("homePage");

  return (
    <button
      className={`exploreButton ${inter.className} cursor-pointer mt-6 w-48 h-8 rounded-2xl bg-white text-black`}
    >
      {t("getStarted.button")}
    </button>
  );
};

export default function GetStarted() {
  const t = useTranslations("homePage");

  return (
    <section
      className={`getStartedSection w-full px-4 py-12 flex flex-col items-center`}
    >
      <CodeBracketIcon className="text-white w-12" />
      <div className={`getStartedSecText flex flex-col max-sm:items-center`}>
        <h1
          className={`${montserrat.className} sm:text-4xl text-3xl font-semibold mt-4 text-center`}
        >
          {t("getStarted.h1")}
        </h1>
        <h2 className={`${montserrat.className} text-gray-400 sm:text-2xl text-xl`}>
          {t("getStarted.h2")}
        </h2>
      </div>
      <ExploreButton />
    </section>
  );
}
