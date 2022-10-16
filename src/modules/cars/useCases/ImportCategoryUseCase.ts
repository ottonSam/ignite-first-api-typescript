import { ImportCategoryController } from "../controllers/ImportCategoryController";

class ImportCategoryUseCase {
    execute(file: any) {
        console.log(file);
    }
}

const importCategoryUseCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(
    importCategoryUseCase
);

export { importCategoryController, ImportCategoryUseCase }