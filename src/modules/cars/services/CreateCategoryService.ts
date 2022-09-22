import { response } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { ICategoryRepository } from "../repositories/ICategoriesRepository";
interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesRepository: ICategoryRepository) {}

    execute({name, description}: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if(categoryAlreadyExists){
            throw new Error(`Category ${name} already exists`);    
        }

        this.categoriesRepository.create({name, description});
    }
}

export { CreateCategoryService };