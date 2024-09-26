//import {GOOGLE_MAIL,PASSWORD} from "$env/static/private"
import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: "abdullahalvan2002@gmail.com",
    pass: "mwmmfbgfdmycgfoq",
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