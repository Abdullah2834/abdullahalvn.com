//import {GOOGLE_MAIL,PASSWORD} from "$env/static/private"
import nodemailer from "nodemailer";
import { isProd } from "../constant/url";


const transporter = nodemailer.createTransport({
  host: isProd === true ? "live.smtp.mailtrap.io" : "sandbox.smtp.mailtrap.io" ,
  port: 587,
  auth: {
    user: isProd === true ? "api" : "e15ec673d95cc4",
    pass: isProd === true ? "2ec2f25bee8047fc34cb2902ecc578c8" : "b5685be57ca1cb",
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