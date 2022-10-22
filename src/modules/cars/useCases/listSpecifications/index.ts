import { ListSpecificationController } from "./ListSpecificationController";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

const specificationsRepository = SpecificationsRepository.getInstance();
const listSpecificationController = new ListSpecificationController(specificationsRepository);

export { listSpecificationController };