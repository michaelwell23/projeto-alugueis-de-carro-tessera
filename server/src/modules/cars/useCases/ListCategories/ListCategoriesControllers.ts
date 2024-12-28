import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response) {
    const categoriesAll = this.listCategoriesUseCase.execute();

    return response.json(categoriesAll);
  }
}
