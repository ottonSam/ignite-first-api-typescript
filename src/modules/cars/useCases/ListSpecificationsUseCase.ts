import { ListSpecificationController } from "../controllers/ListSpecificationController";
import { SpecificationsRepository } from "../repositories/implementations/SpecificationsRepository";

const specificationsRepository = SpecificationsRepository.getInstance();
const listSpecificationController = new ListSpecificationController(specificationsRepository);

export { listSpecificationController };