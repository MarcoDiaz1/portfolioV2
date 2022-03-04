import { MdMarkEmailRead } from "react-icons/md";
import { useRouter } from "next/router";

import lang from "../../lang/lang.index";

const EmailSend = () => {
  const { locale } = useRouter();

  return (
    <div className="w-full md:w-1/2 h-full flex flex-col font-main items-center justify-center text-3xl text-center">
      <div className="relative">
        <div className="absolute rounded-[50%] w-[1%] h-[1%] left-[50%] top-[50%] animate-pulse z-10"></div>
        <span className="square absolute h-[15%] w-[15%] animate-confetiOne z-10"></span>
        <span className="circle rounded-[50%] absolute  h-[15%] w-[15%] z-10 animate-confetiTwo"></span>
        <span className="triangle absolute border-solid border-b-[1.5vh] border-l-[1vh] border-r-[1vh] animate-confetiThree"></span>
        <MdMarkEmailRead className="text-9xl relative z-50 rounded-[50%] bg-white text-[#01ef92]" />
      </div>
      <p className="my-5">{lang[locale].contact.emailSend.title}</p>
      <p>{lang[locale].contact.emailSend.desc}</p>
    </div>
  );
};

export default EmailSend;
