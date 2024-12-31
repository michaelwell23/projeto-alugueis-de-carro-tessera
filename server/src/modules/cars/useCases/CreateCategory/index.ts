import { CreateCategoryController } from "./CreateCategoryController";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepositories";
import { CreateCategoryUseCase } from "./CreateCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
);
