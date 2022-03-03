import { useEffect, useState, forwardRef, useContext } from "react";
import { MouseContext } from "../MouseContext";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return mousePosition;
};

// eslint-disable-next-line react/display-name
export const CustomButton = forwardRef(
  ({ onClick, href, children, className }, ref) => {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);

    return (
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        className={`cursor-none ${className}`}
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        {children}
      </a>
    );
  }
);
