import { FaBars } from "react-icons/fa";
import { SwipeableDrawer } from "@mui/material/";
import { useState } from "react";

import Logo from "./logo.component";
import ThemeSelect from "./theme.component";
import AsideContent from "./asideContent.component";
import LangSelect from "./langSelect.component";

const AsideSmall = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex px-2 items-center justify-evenly md:hidden bg-[#fffff0] dark:bg-[#2e2e2e] w-full h-[10vh] shadow-lg rounded-b-md">
      <FaBars
        className="text-2xl w-[30vw] text-mainLight dark:text-mainDark "
        onClick={() => setOpen(!open)}
      />
      <Logo />
      <ThemeSelect />
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        classN
      >
        <div className="flex flex-col justify-between w-[50vw] py-10 h-full bg-[#fffff0] dark:bg-[#2e2e2e]">
          <div className="w-full flex justify-center">
            <p className="font-handW text-black dark:text-mainDark text-2xl dark:bg-[crimson] bg-[#d8bfd8] text-center p-7 font-bold">
              Eric Haller <br />
              Portfolio
            </p>
          </div>
          <div className="w-full flex items-start justify-center">
            <AsideContent />
          </div>
          <div className="w-full flex justify-center">
            <LangSelect />
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default AsideSmall;
