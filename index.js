import express from "express";
import homeRouter from "./src/home/Home.Router.js";
import emailRounter from "./src/email/email.router.js";
import cors from "cors";

const server = express();

server.use(express.json());

server.use(cors());

setInterval(async () => {
   try{
    const ping = await fetch("https://portfoliobackendemail.onrender.com/api/email/send")
    console.log(ping.status)
   }catch(err){
        console.log(err.message)
   }
}, 5 * 60 * 1000)

server.use("/api/home", homeRouter)
server.use("/api/email", emailRounter)

export default server