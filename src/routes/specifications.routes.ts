import { Router } from 'express';
import { createSpecificationController } from '../modules/cars/useCases/CreateSpecificationsUseCase';
import { listSpecificationController } from '../modules/cars/useCases/ListSpecificationsUseCase';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
    return createSpecificationController.handle(request, response);
});

specificationsRoutes.get('/', (request, response) => {
    return listSpecificationController.handle(request, response);
});

export { specificationsRoutes };