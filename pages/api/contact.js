import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function handler(req, res) {
  const { email, subject, msg } = req.body;

  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: email, // Your email where you'll receive emails
      from: "just.another.pen1995@gmail.com", // your website email address here
      subject: subject,
      text: msg,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default handler;
