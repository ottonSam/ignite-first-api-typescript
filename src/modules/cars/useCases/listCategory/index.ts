import { ListCategoryController } from "./ListCategoryController";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

const categoriesRepository = new CategoriesRepository();
const listCategoryController = new ListCategoryController(categoriesRepository);

export { listCategoryController };