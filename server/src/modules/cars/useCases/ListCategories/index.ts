import { CategoriesRepository } from "../../repositories/CategoriesRepositories";
import { ListCategoriesController } from "./ListCategoriesControllers";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
export const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase,
);