import { CreateCategoryController } from "./CreateCategoryController";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepositories";
import { CreateCategoryUseCase } from "./CreateCategoriesUseCase";

export const categoriesRepository = CategoriesRepository.getInstance();
export const createCategoryUseCase = new CreateCategoryUseCase(
  categoriesRepository,
);
export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
);
