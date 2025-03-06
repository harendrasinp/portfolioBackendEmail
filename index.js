import express from "express";
import homeRouter from "./src/home/Home.Router.js";
import emailRounter from "./src/email/email.router.js";
import cors from "cors";

const server= express();

server.use(express.json());

server.use(cors());


server.use("/api/home",homeRouter)
server.use("/api/email",emailRounter)

export default server