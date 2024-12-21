import { CategoriesRepository } from "./../repositories/categoriesRepositories";
import { Router } from "express";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response
      .status(400)
      .json({ MessageError: "Category Already exists!" });
  }

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const AllCategories = categoriesRepository.list();

  return response.status(201).json(AllCategories);
});

export default categoriesRoutes;
