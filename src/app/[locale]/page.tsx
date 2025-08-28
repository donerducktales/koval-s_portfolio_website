import { inter } from "@/assets/fonts";
import About from "@/layouts/About";
import GetStarted from "@/layouts/GetStarted";
import Skills from "@/layouts/Skills";

export default function Home() { 
  return (
    <main
      className={`main ${inter.className} flex flex-col items-center text-white w-full`}
    >
      <GetStarted />
      <About />
      <Skills />
    </main>
  );
}
