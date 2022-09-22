import { request, Router } from "express";
import { CreateCategoryController } from "../modules/cars/controllers/CreateCategoryController";
import { ListCategoryController } from "../modules/cars/controllers/ListCategoryController";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();
const createCategoryService = new CreateCategoryService(categoriesRepository);

const createCategoryController = new CreateCategoryController(createCategoryService);
const listCategoryController = new ListCategoryController(categoriesRepository);

categoriesRoutes.post('/', (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
    return listCategoryController.handle(request, response);

});

export { categoriesRoutes }; 