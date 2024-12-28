import { CreateCategoryController } from "./CreateCategoryController";
import { CategoriesRepository } from "../../repositories/CategoriesRepositories";
import { CreateCategoryUseCase } from "./CreateCategoriesUseCase";

export const categoriesRepository = new CategoriesRepository();
export const createCategoryUseCase = new CreateCategoryUseCase(
  categoriesRepository,
);
export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
);
