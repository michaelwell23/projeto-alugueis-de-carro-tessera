import { Router } from "express";

import { CreateRentalsController } from "@modules/rentals/UseCases/CreateRentals/CreateRentalsController";
import { DevolutionRentalController } from "@modules/rentals/UseCases/DevolutionRental/DevolutionRentalController";

import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const rentalRoutes = Router();

const createRentalsController = new CreateRentalsController();
const devolutionRentalController = new DevolutionRentalController();

rentalRoutes.post("/", ensureAuthenticated, createRentalsController.handle);
rentalRoutes.post(
  "/devolution/:id",
  ensureAuthenticated,
  devolutionRentalController.handle
);

export default rentalRoutes;
