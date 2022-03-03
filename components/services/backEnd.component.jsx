import Image from "next/image";
import { useRouter } from "next/router";
import { useParallax } from "react-scroll-parallax";

import model from "../../public/img/parallaxThree.jpg";
import lang from "../../lang/lang.index";

const BackendServices = () => {
  const { locale } = useRouter();

  const parallax = useParallax({
    scale: [3, 1],
    translateY: [20, -20],
  });

  return (
    <div className="w-full h-screen flex relative">
      <div className="w-1/2 h-full relative ">
        <div className="h-full w-full bg-mainLight ">
          <div className="w-full md:w-1/2 h-full flex flex-col text-white relative">
            <svg
              viewBox="0 0 100 100"
              width="100"
              height="100"
              className="absolute right-[15%] md:left-0 xl:left-[20%] top-[25%] w-[25vh] h-[25vh] animate-rotateText rounded-[50%] font-title"
            >
              <defs>
                <path
                  id="circle"
                  d="
                    M 50, 50
                    m -37, 0
                    a 37,37 0 1,1 74,0
                    a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text fontSize="7">
                <textPath xlinkHref="#circle" style={{ fill: "#5a5564" }}>
                  PHP / MongoDB / NextJS / NodeJS
                </textPath>
              </text>
            </svg>
            <div
              className="h-5/6 w-full flex items-center font-title text-6xl text-[#5a5564] overflow-hidden"
              style={{ writingMode: "vertical-lr" }}
            >
              <p className="animate-infiniteY  whitespace-nowrap">
                Back End / Back End
              </p>
            </div>
            <div className="h-1/6 w-full flex justify-center font-main text-4xl pt-[2vh]">
              <p>Back End</p>
            </div>
          </div>
        </div>
        <div className="absolute w-full md:w-2/3 h-1/2 md:h-5/6 z-10 top-0 md:top-[10vh] right-[-100%] md:right-[unset] md:left-[20vw] overflow-hidden">
          <div className="relative w-full h-full" ref={parallax.ref}>
            <Image
              src={model}
              alt="model"
              layout="fill"
              objectFit="fill"
              className="contrast-75"
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 md:w-3/6 h-full relative flex justify-end md:justify-center flex-col p-2 md:p-10 md:pl-[10vw] xl:p-36 2xl:px-52 font-main text-sm md:text-lg xl:text-2xl">
        <p className="mb-5 md:mb-10 text-xl md:text-3xl">
          {lang[locale].services.backEnd.title}
        </p>
        <p className="">{lang[locale].services.backEnd.desc}</p>
      </div>
    </div>
  );
};

export default BackendServices;
