import { SpecificationsRepository } from "../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "../controllers/CreateSpecificationController";
import { CreateSpecificationService } from "../services/CreateSpecificationService";

const specificationsRepository = SpecificationsRepository.getInstance();
const createSpecificationService = new CreateSpecificationService(specificationsRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationService);

export { createSpecificationController };