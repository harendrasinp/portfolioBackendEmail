import { homeRepository } from "./Home.Repository.js";


export class homController{
    constructor(){
        this.homerepository=new homeRepository()
    }

    async detail(req,res){
        const {name,phone,email}=req.body;
        const data=await this.homerepository.detailRepo(name,phone,email);
        if(data){
            res.status(200).send(data)
        }
    }
}

