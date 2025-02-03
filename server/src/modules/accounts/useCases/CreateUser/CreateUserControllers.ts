import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password, driver_license } = request.body;

      const createUserUseCase = container.resolve(CreateUserUseCase);
      await createUserUseCase.execute({
        name,
        email,
        password,
        driver_license,
      });

      return response.status(201).send();
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}
