

export class homeRepository{

    async detailRepo(name,phone,email){
        const detailObject={
            name,
            phone,
            email
        }
        return detailObject
    }
}