import express from "express"
import { EmailController } from "./email.controller.js";

const emailRounter=express.Router();
const enailcontroller=new EmailController()

emailRounter.post("/send",(req,res)=>{
    enailcontroller.emaildata(req,res)
})

export default emailRounter

