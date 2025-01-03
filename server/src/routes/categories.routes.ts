import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/CreateCategory";
import { listCategoriesController } from "../modules/cars/useCases/ListCategories";
import { importCategoryController } from "../modules/cars/useCases/ImportCategory";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./temp",
});

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export default categoriesRoutes;
