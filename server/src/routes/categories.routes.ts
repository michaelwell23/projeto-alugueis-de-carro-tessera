import { CreateCategoryService } from "./../Services/CategoriesServices";
import { CategoriesRepository } from "./../repositories/CategoriesRepositories";
import { Router } from "express";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const AllCategories = categoriesRepository.list();

  return response.status(201).json(AllCategories);
});

export default categoriesRoutes;
