import { useState } from "react";
import FormContact from "../components/contact/form.component";
import FollowImg from "../components/contact/followImg.component";
import EmailSend from "../components/contact/emailSend.component";

const Contact = () => {
  const [formSend, setFormSend] = useState(false);

  return (
    <div className="w-full h-full flex">
      {formSend ? <EmailSend /> : <FormContact setFormSend={setFormSend} />}
      <FollowImg />
    </div>
  );
};

export default Contact;
