import Link from "next/link";
import { useState, useContext } from "react";
import Button from "@mui/material/Button";
import { FaLanguage } from "react-icons/fa";
import { useRouter } from "next/router";
import { MouseContext } from "../../MouseContext";

const LangeSelect = () => {
  const [showLang, setShowLang] = useState(false);
  const { pathname } = useRouter();
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <div className="my-6">
      {showLang ? (
        <div className=" text-mainLight w-[50vw] md:w-[20vw] flex justify-evenly">
          <Link href={pathname} locale="es-ES">
            <a
              className="cursor-none text-xs text-center w-[10vw] md:w-fit border-solid text-mainLight border-mainLight dark:border-mainDark dark:text-mainDark border-2 rounded-md p-2"
              onClick={() => setShowLang(false)}
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              ES
            </a>
          </Link>
          <Link href={pathname} locale="en-US">
            <a
              className=" cursor-none  odd:text-xs border-solid text-mainLight border-mainLight dark:border-mainDark dark:text-mainDark border-2 rounded-md p-2"
              onClick={() => setShowLang(false)}
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              ENG
            </a>
          </Link>
        </div>
      ) : (
        <Button
          onClick={() => setShowLang(true)}
          className={`dark:text-mainDark text-mainLight text-5xl cursor-none  ${
            showLang ? "invisible" : "flex"
          }`}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <FaLanguage />
        </Button>
      )}
    </div>
  );
};

export default LangeSelect;
