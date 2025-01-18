import { Category } from "../entities/Category";
import { ICategoriesRepository } from "./ICategoriesRepository";

interface ICreateCateoryDTO {
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
  create({ name, description }: ICreateCateoryDTO): Promise<void> {
    console.log(name, description);
    return null;
  }
}
