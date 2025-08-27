import { inter } from "@/assets/fonts";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("homePage")
  
  return (
    <main className={`main ${inter.className} h-[5600px] flex flex-col items-center text-white w-full`}>
      {t("title")}      
    </main>
  );
}
