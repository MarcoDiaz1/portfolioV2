import React, { useContext } from "react";
import { useMousePosition } from "../utils/tools";
import { MouseContext } from "../MouseContext";

const CustomMouse = () => {
  // 1.
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  return (
    <>
      {/* 2. */}
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={`${
          cursorType === "hovered"
            ? "w-[2.5vw] h-[2.5vw] border-4 border-slate-400"
            : " w-[2vw] h-[2vw] border-2 border-black"
        } fixed border-solid  dark:border-white rounded-[100%] z-[2000] pointer-events-none translate-y-[-50%] translate-x-[-50%] duration-100 ease-out will-change-transform`}
      ></div>
      {/* 3. */}
      <div
        className={`${
          cursorType === "hovered" ? "hidden" : "hidden md:flex"
        } dot fixed  w-[.8vw] h-[.8vw] bg-black dark:bg-white rounded-[100%] z-[2000] pointer-events-none translate-y-[-50%] translate-x-[-50%]`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default CustomMouse;
