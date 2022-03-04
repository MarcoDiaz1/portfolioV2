const colors = require("tailwindcss/colors");

module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 0 10px black",
      },
    },
    colors: {
      mainLight: "#42313a",
      mainDark: "#faebd7",
      backDark: "#282727",
      accentLight: "#c9184a",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      slate: colors.slate,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
    },
    fontFamily: {
      main: "Libre Baskerville",
      title: "Saturdate Serif",
      subTitle: "Constantine",
      alternative: "Cinzel",
      bars: "Code128",
      handW: "Cartier",
    },
    backgroundImage: {
      linearGradient:
        "linear-gradient(180deg, transparent 2%, crimson 20%, transparent)",
      transMd: "none",
      bars: "linear-gradient(40deg,transparent 6.9%,#42313a 6.9%,#42313a 20.69%,transparent 20.69%,transparent 27.59%,#42313a 27.59%,#42313a 50%,transparent 50%,transparent 56.9%,#42313a 56.9%,#42313a 70.69%,transparent 70.69%,transparent 77.59%,#42313a 77.59%,#42313a 100%)",
      barsDark:
        "linear-gradient(40deg,transparent 6.9%,#faebd7 6.9%,#faebd7 20.69%,transparent 20.69%,transparent 27.59%,#faebd7 27.59%,#faebd7 50%,transparent 50%,transparent 56.9%,#faebd7 56.9%,#faebd7 70.69%,transparent 70.69%,transparent 77.59%,#faebd7 77.59%,#faebd7 100%)",
      blueLine: "linear-gradient(to right, cadetblue 29%, transparent)",
    },
    backgroundSize: {
      barsSize: " 225.58px 189.28px",
    },
    keyframes: {
      backgroundPos: {
        "0%": { backgroundPosition: "0vw 0" },
        "100%": { backgroundPosition: "72vw 0" },
      },
      scroll: {
        "0%": { opacity: 0 },
        "10%": { transform: "translateY(0)", opacity: 1 },
        "100%": { transform: "translateY(15px)", opacity: 0 },
      },
      infiniteText: {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(50%)" },
      },
      infiniteTextY: {
        "0%": { transform: "translateY(-100%)" },
        "100%": { transform: "translateY(180%)" },
      },
      rotateText: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
      pulse: {
        "0%": { boxShadow: "0 0 0 0 #42313a" },
        "100%": { boxShadow: "0 0 0 6vw transparent" },
      },
      confetiOne: {
        "0%": {
          background: "#01ef92",
          transform: "translate(40%, 40%) rotate(0deg)",
        },
        "100%": {
          background: "transparent",
          transform: "translate(750%, -150%) rotate(180deg)",
        },
      },
      confetiTwo: {
        "0%": {
          background: "#ffff00",
          transform: "translate(50%, 50%) rotate(0deg)",
        },
        "100%": {
          background: "transparent",
          transform: "translate(0%, -560%)",
        },
      },
      confetiThree: {
        "0%": {
          borderColor: "transparent transparent crimson transparent",
          transform: "translate(50%, 50%) rotate(0deg)",
        },
        "100%": {
          borderColor: "transparent",
          transform: "translate(-800%, -100%) rotate(180deg)",
        },
      },
    },
    animation: {
      backgroundPos: "backgroundPos 30s linear infinite",
      scroll: "scroll 2.2s cubic-bezier(.15,.41,.69,.94) infinite",
      infiniteOne: "infiniteText 21s linear infinite",
      infiniteY: "infiniteTextY 20s linear infinite",
      rotateText: "rotateText 40s linear infinite",
      pulse: "pulse 1s linear 1",
      confetiOne: "confetiOne 1s linear 1",
      confetiTwo: "confetiTwo 1s linear 1",
      confetiThree: "confetiThree 1s linear 1",
    },
  },
  plugins: [],
};
