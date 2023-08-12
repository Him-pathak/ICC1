const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_MAIL, // generated ethereal user
    pass: process.env.SMTP_PASSWORD, // generated ethereal password
  },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { name,regid,email, subject, complaint } = req.body;
  console.log(name,regid,email, subject, complaint);

  var mailOptions = {
    from: email,
    to: process.env.TO_EMAIL,
    subject: subject,
    text: `
    From: ${email}
    Name: ${name}
    RegId: ${regid}
    Subject : ${subject}
    Complaint : ${complaint}
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully!");
    }
  });
});

module.exports = { sendEmail };
