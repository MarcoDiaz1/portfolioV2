import Link from "next/link";
import { MdCodeOff } from "react-icons/md";
import { useContext } from "react";

import { MouseContext } from "../../MouseContext";

const Logo = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <div className="h-1/6 w-full flex justify-center font-bold items-center font-title text-2xl md:text-4xl text-mainLight dark:text-mainDark">
      <Link href="/">
        <a
          className="cursor-none"
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <MdCodeOff />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
