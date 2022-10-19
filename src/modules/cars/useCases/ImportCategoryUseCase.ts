import { parse } from "csv-parse";
import fs from "fs";

import { ImportCategoryController } from "../controllers/ImportCategoryController";
import { ICategoryRepository } from "../repositories/ICategoriesRepository";
import { CategoriesRepository } from "../repositories/implementations/CategoriesRepository";

interface IImporteCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private categoriesRepository: ICategoryRepository) { }

    loadCategories(file: any): Promise<IImporteCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categories: IImporteCategory[] = [];

            const parseFile = parse();

            stream.pipe(parseFile);

            parseFile.on("data", async (line) => {
                const [name, description] = line;
                categories.push({ 
                    name, 
                    description 
                });
            })
            .on("end", () => {
                fs.promises.unlink(file.path);
                resolve(categories);
            })
            .on("error", (err) => {
                reject(err);
            });
        });
    }

    async execute(file: any): Promise<void> {
        const categories = await this.loadCategories(file);
        
        categories.map( async (category) => {
            const {name, description}= category;
            
            const existCategory = this.categoriesRepository.findByName(name);

            if(!existCategory) {
                this.categoriesRepository.create({
                    name,
                    description
                });
            }
        });
    }
}

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController, ImportCategoryUseCase }