import { SpecificationsRepository } from "../repositories/SpecificationsRepository";
import { CreateSpecificationController } from "../controllers/CreateSpecificationController";
import { CreateSpecificationService } from "../services/CreateSpecificationService";

const specificationsRepository = new SpecificationsRepository();
const createSpecificationService = new CreateSpecificationService(specificationsRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationService);

export { createSpecificationController };