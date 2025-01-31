import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, driver_license } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);
    console.log(createUserUseCase, "useCase");

    const user = await createUserUseCase.execute({
      name,
      email,
      password,
      driver_license,
    });

    console.log(user, "userController");
    return response.status(201).send();
  }
}
