export interface SkillsList {
  id: number;
  imgHref: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  caption: string;
}

export const skillsList: SkillsList[] = [
  {
    id: 0,
    imgHref: "/html-logo.svg",
    imgAlt: "html logotype",
    imgWidth: 84,
    imgHeight: 100,
    caption: "HTML",
  },
  {
    id: 1,
    imgHref: "/css-logo.svg",
    imgAlt: "css logotype",
    imgWidth: 84,
    imgHeight: 100,
    caption: "CSS",
  },
  {
    id: 2,
    imgHref: "/sass-logo.svg",
    imgAlt: "sass logotype",
    imgWidth: 126,
    imgHeight: 100,
    caption: "SASS",
  },
  {
    id: 3,
    imgHref: "/js-logo.svg",
    imgAlt: "js logotype",
    imgWidth: 96,
    imgHeight: 100,
    caption: "Javascript",
  },
  {
    id: 4,
    imgHref: "/typescript-logo.svg",
    imgAlt: "ts logotype",
    imgWidth: 96,
    imgHeight: 100,
    caption: "Typescript",
  },
  {
    id: 5,
    imgHref: "/react-logo.svg",
    imgAlt: "react logotype",
    imgWidth: 100,
    imgHeight: 100,
    caption: "React",
  },
  {
    id: 6,
    imgHref: "/responsive-icon.svg",
    imgAlt: "responsive logo",
    imgWidth: 100,
    imgHeight: 100,
    caption: "Responsive design",
  },
  {
    id: 7,
    imgHref: "/redux-logo.svg",
    imgAlt: "redux logo",
    imgWidth: 100,
    imgHeight: 100,
    caption: "Redux Toolkit",
  },
  {
    id: 8,
    imgHref: "/zustand-logo.svg",
    imgAlt: "zustand logo",
    imgWidth: 100,
    imgHeight: 100,
    caption: "Zustand",
  },
  {
    id: 9,
    imgHref: "/nextjs-logo.svg",
    imgAlt: "nextjs logo",
    imgWidth: 99,
    imgHeight: 100,
    caption: "NextJS",
  },
  {
    id: 10,
    imgHref: "/mongodb-logo.svg",
    imgAlt: "Mongodb logotype",
    imgWidth: 42,
    imgHeight: 100,
    caption: "MongoDB",
  },
]; 