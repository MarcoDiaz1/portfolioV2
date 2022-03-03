import { useRouter } from "next/router";

import Aside from "../components/aside/aside.index";
import SEO from "../SEO";
import lang from "../lang/lang.index";
import { paths } from "../data/data";

const Layout = ({ children }) => {
  const { locale, pathname } = useRouter();
  const currentPath = paths.indexOf(pathname);

  return (
    <div className="flex flex-col md:flex-row md:cursor-none">
      <SEO
        title={
          currentPath === 0
            ? "Eric Haller Portfolio"
            : lang[locale].nav.content[currentPath]
        }
        url={pathname}
        description={lang[locale].pages.desc[currentPath]}
      />
      <Aside />

      <div className="w-full md:pl-[18vw] xl:pl-[15vw] md:w-[100vw] h-screen pt-[8vh] md:pt-0">
        {children}
      </div>
    </div>
  );
};

export default Layout;
