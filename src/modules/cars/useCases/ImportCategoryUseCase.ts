import { parse } from "csv-parse";
import fs from "fs";

import { ImportCategoryController } from "../controllers/ImportCategoryController";

class ImportCategoryUseCase {
    execute(file: any) {
        const stream = fs.createReadStream(file.path);

        const parseFile = parse();

        stream.pipe(parseFile);

        parseFile.on("data", async (line) => {
            console.log(line);
        });

    }
}

const importCategoryUseCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController, ImportCategoryUseCase }