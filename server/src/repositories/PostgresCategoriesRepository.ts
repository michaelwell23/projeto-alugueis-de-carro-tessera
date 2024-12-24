import { Category } from "model/Category";
import { ICategoriesRepository } from "./ICategoriesRepository";

interface ICreateCateoryDTO {
  name: string;
  description: string;
}

export class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: ICreateCateoryDTO): void {
    console.log(name, description);
    return null;
  }
}
