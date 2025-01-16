import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepositories";
import { ListCategoriesController } from "./ListCategoriesControllers";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = null;
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
export const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);
