import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepositories";
import { CreateCategoryUseCase } from "./CreateCategoriesUseCase";
import { CreateCategoryController } from "./CreateCategoryController";

export default (): CreateCategoryController => {
  const categoriesRepository = new CategoriesRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
  const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
  );

  return createCategoryController;
};
