import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

import { paths } from "../../data/data";
import lang from "../../lang/lang.index";
import { MouseContext } from "../../MouseContext";

const AsideContent = () => {
  const { pathname, locale } = useRouter();
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <div className="h-3/6 w-full flex flex-col justify-start md:justify-center font-bold items-center font-main dark:text-mainDark">
      {paths.map((e, i) => (
        <Link href={e} key={i}>
          <a
            className={`my-4 text-sm cursor-none ${
              e === pathname && "ml-8"
            } text-mainLight dark:text-mainDark`}
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            {lang[locale].nav.content[i]}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default AsideContent;
