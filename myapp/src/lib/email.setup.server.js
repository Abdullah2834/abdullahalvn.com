//import {GOOGLE_MAIL,PASSWORD} from "$env/static/private"
import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "contact@abdullahalvn.com",
    pass: "spuxspwistqudeyt",
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