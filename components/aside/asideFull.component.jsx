import Arrows from "./arrows.component";
import Logo from "./logo.component";
import AsideContent from "./asideContent.component";
import ThemeSelect from "./theme.component";
import LangSelect from "./langSelect.component";

const AsideFull = () => {
  return (
    <div className="h-full w-full flex-col justify-between hidden md:flex dark:bg-backDark">
      <Logo />
      <AsideContent />
      <div className="h-2/6 w-full flex flex-col justify-end font-bold items-center font-title ">
        <ThemeSelect />
        <LangSelect />
      </div>
    </div>
  );
};

export default AsideFull;
