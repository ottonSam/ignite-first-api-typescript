import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { CategoriesRepository } from "../repositories/implementations/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryService = new CreateCategoryService(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryService);

export { createCategoryController };