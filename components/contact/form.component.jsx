import { TextField, Button } from "@mui/material/";
import { useRouter } from "next/router";
import { useState, useRef, useContext } from "react";
import emailjs from "@emailjs/browser";

import lang from "../../lang/lang.index";
import { MouseContext } from "../../MouseContext";

const FormContact = () => {
  const { locale } = useRouter();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const form = useRef();
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  console.log(error);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || msg === "" || subject === "") {
      setError(lang[locale].contact.error.empty);
    } else {
      emailjs
        .sendForm(
          "EricHallerPortfolio",
          "template_uh8bnvc",
          form.current,
          "LyxPTaef74s78a_Ke"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <form
      className="md:rounded-none rounded-md m-10 md:m-0 dark:bg-backDark md:bg-transparent bg-mainDark p-5 md:p-10 w-full md:w-1/2 h-full text-xl relative z-20"
      onSubmit={handleSubmit}
      ref={form}
    >
      <div className="font-main  h-1/6 w-full flex flex-col justify-evenly mb-7 xl:mb-10 2xl:mb-0 dF">
        <p className=" hidden md:flex text-4xl 2xl:text-5xl xl:text-4xl  md:text-left text-center">
          {lang[locale].nav.content[2]}
        </p>
        <p className="md:text-left text-center text-md md:text-xl  2xl:text-2xl mt-5">
          {lang[locale].contact.subTitle}
        </p>
      </div>
      <div className="h-4/6 w-full font-main flex flex-col justify-center">
        <p>{lang[locale].contact.email}</p>
        <TextField
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          value={email}
          type="email"
          className="w-full my-4 md:my-6 dark:text-white"
          variant="standard"
          name="from_name"
          sx={{
            "& .MuiInput-root": {
              color: "inherit",
              "& input": { color: "inherit", cursor: "none" },
              "&::before": {
                borderBottom: "#face65 solid 2px",
              },
              "&::after": {
                borderBottom: "#021837 solid 2px",
              },
            },
          }}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        />
        <p>{lang[locale].contact.subject}</p>
        <TextField
          onChange={(e) => {
            setSubject(e.target.value);
            setError("");
          }}
          value={subject}
          variant="standard"
          className="w-full my-4 md:my-6 dark:text-white "
          name="subject"
          sx={{
            "& .MuiInput-root": {
              color: "inherit",
              "& input": { color: "inherit", cursor: "none" },
              "&::before": {
                borderBottom: "#face65 solid 2px",
              },
              "&::after": {
                borderBottom: "#021837 solid 2px",
              },
            },
          }}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        />
        <p>{lang[locale].contact.message}</p>
        <TextField
          onChange={(e) => {
            setMsg(e.target.value);
            setError("");
          }}
          value={msg}
          className="w-full my-6 dark:text-white"
          multiline
          rows={4}
          name="message"
          sx={{
            "& .MuiOutlinedInput-root fieldset": {
              border: "#face65 solid 2px",
            },
            "& .MuiOutlinedInput-root.Mui-focused fieldset": {
              borderColor: "#021837 !important",
            },
            "& .MuiOutlinedInput-root": {
              color: "inherit",
              cursor: "none",
              "& textarea": {
                color: "inherit",
                cursor: "none",
              },
            },
          }}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        />
        <p className="text-center text-red-500">{error}</p>
      </div>
      <div className="h-1/6 w-full flex justify-evenly">
        <Button
          variant="outlined"
          className="w-1/3 h-1/2 bg-[#face65] text-[#021837] border-[#021837] border-2 cursor-none"
          type="submit"
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          {lang[locale].contact.send}
        </Button>
        <Button
          variant="outlined"
          className="w-1/3 h-1/2 bg-[#face65] text-[#021837] border-[#021837] border-2 cursor-none"
          onClick={() => setMsg("")}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          {lang[locale].contact.clean}
        </Button>
      </div>
    </form>
  );
};

export default FormContact;
