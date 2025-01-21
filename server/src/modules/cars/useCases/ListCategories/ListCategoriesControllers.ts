import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  handle(request: Request, response: Response) {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

    const categoriesAll = listCategoriesUseCase.execute();

    return response.json(categoriesAll);
  }
}
