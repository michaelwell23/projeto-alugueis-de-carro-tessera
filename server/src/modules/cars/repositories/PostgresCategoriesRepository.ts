import { Category } from "../entities/Category";
import { ICategoriesRepository } from "./ICategoriesRepository";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Promise<Category> {
    return null;
  }
  list(): Promise<Category[]> {
    return null;
  }
  create({ name, description }: ICreateCategoryDTO): Promise<void> {
    return null;
  }
}
