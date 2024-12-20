import { Router } from "express";
import { v4 as uuidV4 } from "uuid";
import { Category } from "../model/category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const category: Category = new Category();

  Object.assign(category, {
    name,
    description,
    create_at: new Date(),
  });

  categories.push(category);

  return response
    .status(201)
    .json({ message: "Categoria criada com sucesso!" });
});

export default categoriesRoutes;
