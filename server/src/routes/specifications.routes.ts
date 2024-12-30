import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { Router } from "express";
import { CreateSpecificationService } from "../modules/cars/Services/CreateSpecificationServices";

const SpecificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

SpecificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createSpecificationsService = new CreateSpecificationService(
    specificationsRepository,
  );

  createSpecificationsService.execute({ name, description });

  return response.status(201).send();
});

export default SpecificationsRoutes;
