import express from "express"
import { homController } from "./HomeController.js";

const homeRouter= express.Router();

const homecontroller=new homController();

homeRouter.post("/detail",(req,res,next)=>{
    homecontroller.detail(req,res,next)
})

export default homeRouter;