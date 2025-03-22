import { Router } from "express";

import { CreateRentalsController } from "@modules/rentals/UseCases/CreateRentals/CreateRentalsController";
import { DevolutionRentalController } from "@modules/rentals/UseCases/DevolutionRental/DevolutionRentalController";
import { ListRentalsByUserController } from "@modules/rentals/UseCases/ListRentalsByUser/ListRentalsByUserController";

import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const rentalRoutes = Router();

const createRentalsController = new CreateRentalsController();
const devolutionRentalController = new DevolutionRentalController();
const listRentalsByUserController = new ListRentalsByUserController();

rentalRoutes.post("/", ensureAuthenticated, createRentalsController.handle);
rentalRoutes.get(
  "/user",
  ensureAuthenticated,
  listRentalsByUserController.handle
);
rentalRoutes.post(
  "/devolution/:id",
  ensureAuthenticated,
  devolutionRentalController.handle
);

export default rentalRoutes;
