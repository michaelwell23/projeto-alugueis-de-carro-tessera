import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/CreateCar/CreateCarController";

const carsRouter = Router();

const createCarController = new CreateCarController();

carsRouter.post("/", createCarController.handle);

export default carsRouter;
