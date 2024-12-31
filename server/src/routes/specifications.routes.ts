import { Router } from "express";
import { createSpecificationontroller } from "../modules/cars/useCases/CreateSpecification";

const SpecificationsRoutes = Router();

SpecificationsRoutes.post("/", (request, response) => {
  return createSpecificationontroller.handle(request, response);
});

export default SpecificationsRoutes;
