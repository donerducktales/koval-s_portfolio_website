import { inter } from "@/assets/fonts";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function ExploreButton({
  bg,
  textColor,
}: {
  bg: string;
  textColor: string;
}) {
  const t = useTranslations("homePage");

  return (
    <Link href={'/#works'}>
      <button
        className={`exploreButton ${inter.className} cursor-pointer mt-6 px-6 h-8 rounded-2xl`}
        style={{
          backgroundColor: bg,
          color: textColor,
        }}
      >
        {t("getStarted.button")}
      </button>
    </Link>
  );
}
