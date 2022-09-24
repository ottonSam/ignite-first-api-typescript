import { ListCategoryController } from "../controllers/ListCategoryController";
import { CreateCategoryService } from "../services/CreateCategoryService";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoryController = new ListCategoryController(categoriesRepository);

export { listCategoryController };