import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/CreateCar/CreateCarController";
import { ensureAdmin } from "@shared/infra/http/middleware/ensureAdmin";
import { ensureAuthenticated } from "@shared/infra/http/middleware/ensureAuthenticated";

const carsRouter = Router();

const createCarController = new CreateCarController();

carsRouter.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

export default carsRouter;
