import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/CreateCategoryUseCase";
import { listCategoryController } from "../modules/cars/useCases/ListCategoryUseCase";
import { importCategoryController } from "../modules/cars/useCases/ImportCategoryUseCase";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.post('/', (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
    return listCategoryController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
});

export { categoriesRoutes }; 