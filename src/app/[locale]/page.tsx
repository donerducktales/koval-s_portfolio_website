import { inter } from "@/assets/fonts";
import GetStarted from "@/layouts/GetStarted";

export default function Home() { 
  return (
    <main className={`main ${inter.className} h-[5600px] flex flex-col items-center text-white w-full`}>
      <GetStarted />  
    </main>
  );
}
