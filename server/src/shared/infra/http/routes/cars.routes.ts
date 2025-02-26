import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/CreateCar/CreateCarController";
import { ListaAvailableCarsController } from "@modules/cars/useCases/ListAvailableCars/LIstAvailableCarsController";
import { ensureAdmin } from "@shared/infra/http/middleware/ensureAdmin";
import { ensureAuthenticated } from "@shared/infra/http/middleware/ensureAuthenticated";

const carsRouter = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListaAvailableCarsController();

carsRouter.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

carsRouter.get("/available", listAvailableCarsController.handle);

export default carsRouter;
