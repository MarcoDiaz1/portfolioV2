import Image from "next/image";
import { useRouter } from "next/router";
import { BsArrowDown } from "react-icons/bs";
import { useParallax } from "react-scroll-parallax";

import mountains from "../../public/img/parallaxOne.jpg";
import lang from "../../lang/lang.index";

const WelcomeServices = () => {
  const { locale } = useRouter();

  const parallax = useParallax({
    scale: [0.5, 1.5],
  });

  return (
    <div className="w-full h-screen flex  relative">
      <div className="w-full h-full absolute z-10 overflow-hidden">
        <div className="absolute w-full h-full z-10" ref={parallax.ref}>
          <Image
            src={mountains}
            alt="mountains"
            layout="fill"
            objectFit="fill"
            className="contrast-75"
          />
        </div>
      </div>
      <div className="w-full h-full absolute z-20 flex justify-between flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 h-full flex items-end">
          <div className="w-full h-[20vh] md:h-1/5 flex p-0 md:p-5 2xl:p-10  text-sm md:text-md">
            <div className="w-1/2 h-full bg-white dark:bg-backDark flex justify-center items-center font-alternative p-5 md:p-2 bold">
              <p className="font-semibold">{lang[locale].services.desc}</p>
              <BsArrowDown className="text-4xl" />
            </div>
            <div className="w-1/2 h-full backdrop-blur-sm md:text-xs 2xl:text-lg bg-[#6b88bd75] flex flex-col items-start justify-center text-left pl-5 md:p-2 font-alternative text-white">
              <p>React Native / JS / Wordpress / SEO</p>
              <p>PHP / MongoDB / NodeJS </p>
              <p>Photoshop / Illustrator / Blender</p>
            </div>
          </div>
        </div>
        <div className=" w-[70%] md:w-[40vw] xl:w-1/3 h-2/3 md:h-[60vh] bg-[#6b88bd75] backdrop-blur-sm text-right flex justify-center items-center rounded-b-lg text-[#f8f8ff] flex-col  self-end md:self-auto">
          <p className="font-title text-[1.5rem] md:text-[2rem] 2xl:text-[3.5rem] ">
            Full
            <br /> Stack Developer
          </p>
          <p className="font-main text-xs md:text-lg xl:text-2xl">
            {lang[locale].services.subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeServices;
