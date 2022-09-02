import { v4 as uuidV4 } from "uuid";

interface ICategory {
    id: string;
    name: string;
    description: string;
    created_at: Date;
};

class Category {
    id?: string;
    name: string;
    description: string;
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuidV4();
        }
        this.name = "";
        this.description = "";
        this.created_at = new Date();
    }
}

export {Category}