import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/CreateSpecification/CreateSpecificationController";

const createSpecificationController = new CreateSpecificationController();

const SpecificationsRoutes = Router();

SpecificationsRoutes.post("/", createSpecificationController.handle);

export default SpecificationsRoutes;
