import { Router } from "express";

import { CreateRentalsController } from "@modules/rentals/UseCases/CreateRentals/CreateRentalsController";

import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const rentalRoutes = Router();

const createRentalsController = new CreateRentalsController();

rentalRoutes.post("/", ensureAuthenticated, createRentalsController.handle);

export default rentalRoutes;
