import {Request, Response} from "express";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

class ListSpecificationController {

    constructor(private specificationsRepository: SpecificationsRepository) {}

    handle(request: Request, response: Response): Response {
        const allSpecifications = this.specificationsRepository.list();

        return response.json(allSpecifications);
    }
}

export {ListSpecificationController}