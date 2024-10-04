import transporter from "../lib/email.setup.server";
import { fail } from '@sveltejs/kit';

export const actions = {
  default: async ({request})=>{
      
      const formData = await request.formData()
      const userMail = formData.get("email")
      const name = formData.get("name")
      const message = formData.get("message")
      
      if(!userMail || !name || !message){
        return fail(400, {message:"Emtpy field(s)",name,userMail,message})
      }

      transporter.sendMail({
      from: userMail,
      to: "contact@abdullahalvn.com",
      name: name,
      subject: "Merhaba",
      html: message,
    })
    
    return{
      email: userMail,
      name: name,
      message: message
    }
  }
  
}