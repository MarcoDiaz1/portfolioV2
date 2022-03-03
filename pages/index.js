import { useRouter } from "next/router";
import Image from "next/image";
import { Button } from "@mui/material/";
import { useContext } from "react";

import model from "../public/img/model.png";
import lang from "../lang/lang.index";
import { MouseContext } from "../MouseContext";

export default function Home() {
  const router = useRouter();
  const { locale } = useRouter();
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <div className="w-full h-full">
      <div className="absolute bg-gray-300 w-screen h-screen left-0 top-0 z-0 dark:bg-backDark"></div>
      <main className="flex flex-col-reverse md:flex-row z-[200] md:z-10 ">
        <div className="bg-[#d5cac2c9] md:bg-transparent w-screen md:w-2/4 xl:w-5/12 h-1/3 md:h-screen px-5 pt-5 xl:p-10 flex flex-col md:pb-20 md:justify-end xl:justify-center z-[200] md:z-10 text-mainLight dark:text-mainDark relative">
          <p className="font-title text-2xl md:text-4xl 2xl:text-7xl">
            {lang[locale].home.title}
          </p>
          <p className="text-xs xl:text-lg font-subTitle text-center my-7 border-solid border-2 md:border-4 border-mainLight dark:border-mainDark tracking-[1vw] md:tracking-[.5vw] font-bold">
            {lang[locale].home.subTitle}
          </p>
          <p className="font-alternative text-sm md:text-1xl xl:text-lg 2xl:text-2xl font-bold">
            {lang[locale].home.desc}
          </p>
          <div className="flex justify-between py-10 ">
            <Button
              variant="outlined"
              className="cursor-none text-[1vh] xl:text-sm  2xl:text-[1.5vh] h-[5vh] w-[40vw] md:w-[12vw] text-mainLight border-mainLight dark:text-mainDark dark:border-mainDark border-2 font-alternative font-bold"
              onClick={() => router.push("/contact")}
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              {lang[locale].nav.content[2]}
            </Button>
            <Button
              variant="outlined"
              className="cursor-none text-[1vh] xl:text-sm 2xl:text-[1.5vh]  h-[5vh] w-[40vw] md:w-[12vw] text-mainLight border-mainLight dark:text-mainDark dark:border-mainDark border-2 font-alternative font-bold"
              onClick={() => router.push("/services")}
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              {lang[locale].nav.content[1]}
            </Button>
          </div>
          <div className="bg-barsSize bg-bars dark:bg-barsDark w-[70vw] h-[7vh] absolute bottom-0 left-0 animate-backgroundPos will-change-[background-position] hidden md:flex"></div>
        </div>
        <div className="hidden xl:flex justify-center absolute h-screen  w-[20vw] xl:w-1/12 left-[50%]  items-end pb-40">
          <div className="flex items-start justify-center border-mainLight dark:border-mainDark border-2 border-solid xl:w-[3vw] xl:h-[10vh] rounded-3xl ">
            <div className="bg-mainLight dark:bg-mainDark xl:w-1 2xl:w-2 xl:h-5 2xl:h-7 rounded-3xl animate-scroll"></div>
          </div>
        </div>
        <div className="mb-[-5vh] md:mb-0 mt-[5vh] md:mt-0 w-full md:w-2/4 xl:w-[60%] h-1/3 md:h-screen flex flex-col justify-end items-end relative z-[100]">
          <div className="relative w-[85%] md:w-[35vw] md:h-[70%] h-[60vh] xl:h-[74vh] z-20">
            <Image
              src={model}
              alt="Picture of the author"
              layout="fill"
              objectFit="fill"
              className="first:grayscale"
              priority="true"
            />
          </div>
          <div className="hidden md:flex absolute right-0 h-screen  xl:w-[50vw]">
            <div className="z-30 absolute h-screen right-0">
              <p className="absolute top-5 right-0  font-title text-8xl xl:text-9xl text-gray-300 dark:text-[#3d405b]">
                01
              </p>
              <p className="absolute top-[20%] right-0  font-title text-4xl xl:text-6xl text-gray-300 dark:text-[#3d405b]">
                UX/UI
              </p>
              <p className="absolute bottom-0 right-0 font-bars text-black text-3xl xl:text-6xl bg-slate-300 p-2 rounded-md">
                1234567891011
              </p>
            </div>
            <div className="absolute right-0 h-screen md:w-[30vw] xl:w-[20vw] bg-accentLight/50 mix-blend-screen z-20"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
