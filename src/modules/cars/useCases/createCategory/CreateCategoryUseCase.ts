import { response } from "express";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ICategoryRepository } from "../../repositories/ICategoriesRepository";
interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoryRepository) {}

    async execute({name, description}: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

        if(categoryAlreadyExists){
            throw new Error(`Category ${name} already exists`);    
        }

        this.categoriesRepository.create({name, description});
    }
}

export { CreateCategoryUseCase };