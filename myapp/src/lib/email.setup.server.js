//import {GOOGLE_MAIL,PASSWORD} from "$env/static/private"
import nodemailer from "nodemailer";



const transporter = nodemailer.createTransport({
  host: "live.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: "smtp@mailtrap.io",
    pass: "2ec2f25bee8047fc34cb2902ecc578c8",
  }
});

transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  export default transporter