import { FaSadCry } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import { useContext } from "react";

import { MouseContext } from "../MouseContext";
import lang from "../lang/lang.index";

const Custom500 = () => {
  const { locale } = useRouter();
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-5xl font-main ">
      <FaSadCry className="text-9xl text-[#cfcfcf]" />
      <p className="my-5"> {lang[locale].fourCeroFour.title}</p>
      <Link href="/">
        <a
          className="text-2xl cursor-none"
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          {lang[locale].fourCeroFour.subTitle}
        </a>
      </Link>
    </div>
  );
};

export default Custom500;
