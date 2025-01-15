import { Category } from "../entities/Category";

export interface ICreateCateoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCateoryDTO): Promise<void>;
}
