import { CategoriesRepository } from "modules/cars/repositories/CategoriesRepositories";
import { createCategoryController } from "./../modules/cars/useCases/CreateCategory";

import { Router } from "express";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  const AllCategories = categoriesRepository.list();

  return response.status(201).json(AllCategories);
});

export default categoriesRoutes;
