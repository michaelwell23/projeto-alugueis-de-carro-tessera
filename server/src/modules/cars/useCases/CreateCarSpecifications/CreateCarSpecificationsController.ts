import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAvailableCarsUseCase } from "../ListAvailableCars/ListAvailableCarsUseCase";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

export class CreateCarSpecificationController {
  handle(request: Request, response: Response): Response {
    const { id } = request.params;
    const { specifications_id } = request.body;

    const createCarSpecificationUseCase = container.resolve(
      CreateCarSpecificationUseCase
    );

    const cars = createCarSpecificationUseCase.execute({
      car_id: id,
      specifications_id,
    });

    return response.status(201).json(cars);
  }
}
