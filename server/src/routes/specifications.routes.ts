import { Router } from "express";

import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/CreateSpecification/CreateSpecificationController";

const createSpecificationController = new CreateSpecificationController();

const SpecificationsRoutes = Router();

SpecificationsRoutes.use(ensureAuthenticated);
SpecificationsRoutes.post("/", createSpecificationController.handle);

export default SpecificationsRoutes;
