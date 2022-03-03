import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

import { paths } from "../../data/data";
import { MouseContext } from "../../MouseContext";

const Arrows = () => {
  const router = useRouter();

  const nextIndex =
    router.route === "/404"
      ? 0
      : paths.indexOf(router.route) === paths.length - 1
      ? 0
      : paths.indexOf(router.route) + 1;

  const prevIndex =
    router.route === "/404"
      ? paths.length - 1
      : paths.indexOf(router.route) === 0
      ? paths.length - 1
      : paths.indexOf(router.route) - 1;

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <div className="w-full h-[7vh] flex flex-row justify-evenly items-center">
      <div className="bg-mainLight dark:bg-mainDark w-1/2 h-full flex items-center justify-center">
        <Link href={paths[prevIndex]}>
          <a
            className="flex items-center justify-center `w-full h-full text-white dark:text-black cursor-none"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <IoIosArrowBack />
          </a>
        </Link>
      </div>
      <div className="bg-mainLight dark:bg-mainDark w-1/2 h-full flex items-center justify-center">
        <Link href={paths[nextIndex]}>
          <a
            className="flex items-center justify-center `w-full h-full text-white dark:text-black cursor-none"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <IoIosArrowForward />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Arrows;
