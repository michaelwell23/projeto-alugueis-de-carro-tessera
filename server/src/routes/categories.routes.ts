import { Router } from "express";

interface Category {
  name: string;
  description: string;
}

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/categories", (request, response) => {
  const { name, description } = request.body;

  categories.push({
    name,
    description,
  });

  return response
    .status(201)
    .json({ message: "Categoria criada com sucesso!" });
});

export default categoriesRoutes;
