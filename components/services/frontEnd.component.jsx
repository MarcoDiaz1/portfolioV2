import Image from "next/image";
import { useRouter } from "next/router";
import { useParallax } from "react-scroll-parallax";

import modelOne from "../../public/img/parallaxTwo.jpg";
import modelTwo from "../../public/img/parallax2.2.jpg";
import lang from "../../lang/lang.index";

const FrontendServices = () => {
  const { locale } = useRouter();

  const parallax = useParallax({
    scale: [1.8, 0.8],
    translateY: [0, 20],
  });

  const parallaxTwo = useParallax({
    scale: [2, 1.5],
    translateY: [20, -20],
  });

  return (
    <div className="w-full h-screen flex relative">
      <div className="h-full w-1/2 xl:w-2/6  flex flex-col font-alternative text-lg justify-between">
        <div className=" w-full h-1/2 xl:h-4/6 flex items-center  overflow-hidden">
          <p className="animate-infiniteOne text-slate-400 dark:text-mainLight font-title text-7xl md:text-9xl whitespace-nowrap">
            Front-End
          </p>
        </div>
        <div className=" w-full h-1/2 md:h-1/3 xl:h-1/6 flex items-center">
          <div className="flex h-full text-sm md:text-lg flex-col md:flex-row">
            <p className="p-2 md:p-5 bg-[#3f3735] text-[#f8f8ff] h-full w-full md:w-1/2 xl:text-[2vh] md:text-sm">
              {lang[locale].services.frontEnd}
            </p>
            <p className="w-full md:w-1/2 h-full flex p-2 md:p-5 bg-[#a52a2a]">
              React Native /<br /> JS / SEO
              <br /> Wordpress
            </p>
          </div>
        </div>
      </div>
      <div className="h-full w-1/2 xl:w-4/6 flex relative flex-wrap">
        <div className="w-full xl:w-1/2 h-1/2 xl:h-full  bg-mainLight relative overflow-hidden">
          <div className="absolute w-full h-full z-20" ref={parallax.ref}>
            <Image
              src={modelOne}
              alt="model"
              layout="fill"
              objectFit="fill"
              className="contrast-75"
            />
          </div>
        </div>
        <div className="w-full xl:w-1/2 h-1/2 xl:h-full bg-mainLight relative  overflow-hidden">
          <div className="absolute w-full h-full z-20" ref={parallaxTwo.ref}>
            <Image
              src={modelTwo}
              alt="modelTwo"
              layout="fill"
              objectFit="fill"
              className="contrast-75"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontendServices;
