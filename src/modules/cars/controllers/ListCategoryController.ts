import {Request, Response} from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

class ListCategoryController {

    constructor(private categoriesRepository: CategoriesRepository) {}

    handle(request: Request, response: Response): Response {
        const allCategories = this.categoriesRepository.list();

        return response.json(allCategories);
    }
}

export {ListCategoryController}