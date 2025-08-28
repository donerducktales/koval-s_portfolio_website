import { montserrat } from "@/assets/fonts";
import { skillsList, type SkillsList } from "@/assets/skillsList";
import Image from "next/image";

type SkillsListCardProps = Omit<SkillsList, "id">;

const SkillsListCard = ({
  imgHref,
  imgAlt,
  imgWidth,
  imgHeight,
  caption,
}: SkillsListCardProps) => {
  return (
    <div className={`skillsListCard flex flex-col items-center gap-6`}>
      <Image src={imgHref} alt={imgAlt} width={imgWidth} height={imgHeight} />
      <h1 className={`${montserrat.className} text-white text-2xl text-center`}>
        {caption}
      </h1>
    </div>
  );
};

export default function SkillsList() {
  return (
    <div
      className={`skillsList max-w-[1280px] w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] justify-center gap-4 gap-y-12 mt-6`}
    >
      {skillsList.map((el) => (
        <SkillsListCard
          key={el.id}
          imgHref={el.imgHref}
          imgAlt={el.imgAlt}
          imgWidth={el.imgWidth}
          imgHeight={el.imgHeight}
          caption={el.caption}
        />
      ))}
    </div>
  );
}
