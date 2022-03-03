import { useTheme } from "next-themes";
import { useState, useContext } from "react";
import Button from "@mui/material/Button";
import { FaSun, FaRegSun } from "react-icons/fa";

import { MouseContext } from "../../MouseContext";

const ThemeSelect = () => {
  const { theme, setTheme } = useTheme();
  const [darkIcon, setDarkIcon] = useState(<FaRegSun />);
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <div>
      <Button
        className=" text-2xl md:text-4xl text-mainLight dark:text-mainDark cursor-none"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
          setDarkIcon(theme === "dark" ? <FaRegSun /> : <FaSun />);
        }}
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        {darkIcon}
      </Button>
    </div>
  );
};

export default ThemeSelect;
