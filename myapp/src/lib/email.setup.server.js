//import {GOOGLE_MAIL,PASSWORD} from "$env/static/private"
import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "1f2e064f748e82",
    pass: "ea30623c30c4f9",
  },
});

transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  export default transporter