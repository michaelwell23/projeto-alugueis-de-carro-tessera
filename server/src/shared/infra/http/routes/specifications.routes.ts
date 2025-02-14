import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/CreateSpecification/CreateSpecificationController";

import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const createSpecificationController = new CreateSpecificationController();

const SpecificationsRoutes = Router();

SpecificationsRoutes.use(ensureAuthenticated);
SpecificationsRoutes.post("/", createSpecificationController.handle);

export default SpecificationsRoutes;
