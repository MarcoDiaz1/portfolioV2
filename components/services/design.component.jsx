import Image from "next/image";
import { useRouter } from "next/router";
import { BsArrowDown } from "react-icons/bs";

import clouds from "../../public/img/parallax4.1.jpg";
import modelOnYellow from "../../public/img/parallax4.2.jpg";
import modelContrast from "../../public/img/parallax4.3.jpg";
import drops from "../../public/img/parallax4.6.jpg";
import modelOnRed from "../../public/img/parallax4.5.jpg";
import { CustomButton } from "../../utils/tools";
import lang from "../../lang/lang.index";
const DesignServices = () => {
  const { locale } = useRouter();

  return (
    <div className="w-full h-screen relative flex flex-row md:flex-col flex-wrap">
      <div className="w-full h-1/2 flex flex-wrap">
        <div className="w-1/2 md:w-1/4 h-1/2 md:h-full overflow-hidden">
          <div className="relative w-full h-full duration-700 hover:scale-150">
            <Image
              src={clouds}
              alt="clouds"
              layout="fill"
              objectFit="fill"
              className="contrast-75"
            />
          </div>
        </div>
        <div className="w-1/2 md:w-1/4 h-1/2 md:h-full overflow-hidden">
          <div className="relative w-full h-full duration-700 hover:scale-150">
            <Image
              src={modelOnYellow}
              alt="modelOnYellow"
              layout="fill"
              objectFit="fill"
              className="contrast-75"
            />
          </div>
        </div>
        <div className="w-1/2 md:w-1/4 h-1/2 md:h-full bg-mainLight font-title text-lg md:text-4xl text-white p-2 md:p-10 writingMode md:writingModeNormal">
          <p>{lang[locale].services.design.title}</p>
        </div>
        <div className="w-1/2 md:w-1/4 h-1/2 md:h-full overflow-hidden">
          <div className="relative w-full h-full duration-700 hover:scale-150 hover:translate-y-16">
            <Image
              src={modelContrast}
              alt="modelContrast"
              layout="fill"
              objectFit="fill"
              className="contrast-75"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-1/2 flex flex-wrap">
        <div className="w-1/2 md:w-1/4 h-1/2 md:h-full overflow-hidden">
          <div className="relative w-full h-full duration-700 hover:scale-150">
            <Image
              src={drops}
              alt="drops"
              layout="fill"
              objectFit="fill"
              className="contrast-75"
            />
          </div>
        </div>
        <div className="w-1/2 md:w-1/4 h-1/2 md:h-full bg-mainLight font-main text-md text-white p-10 flex items-end">
          <p>{lang[locale].services.design.desc}</p>
        </div>
        <div className="w-1/2 md:w-1/4 h-1/2 md:h-full overflow-hidden relative">
          <div className="relative w-full h-full duration-700 hover:scale-150">
            <Image
              src={modelOnRed}
              alt="modelOnRed"
              layout="fill"
              objectFit="fill"
              className="contrast-75"
            />
          </div>
        </div>
        <CustomButton
          className=" w-1/2 md:w-1/4 h-1/2 md:h-full bg-mainLight text-white font-main text-2xl flex items-end p-10"
          href="/contact"
        >
          <p>{lang[locale].nav.content[2]}</p>
          <BsArrowDown className="ml-5 text-3xl" />
        </CustomButton>
      </div>
    </div>
  );
};

export default DesignServices;
