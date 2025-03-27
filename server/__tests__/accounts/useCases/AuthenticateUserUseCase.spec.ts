import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { AuthenticateUserUseCase } from "@modules/accounts/useCases/AuthenticateUser/AuthenticateUserUseCase";
import { CreateUserUseCase } from "@modules/accounts/useCases/CreateUser/CreateUserUseCase";
import { AppError } from "@shared/errors/AppError";

import { UsersRepositoryInMemory } from "../in-memory/UsersRepositoryInMemory";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

let createUserUseCase: CreateUserUseCase;

describe("Authenticate user", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "000123",
      email: "user@test.com",
      password: "1234",
      name: "User Test",
    };
    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("sould not be able to authenticate an nonexistent user", async () => {
    await expect(
      authenticateUserUseCase.execute({
        email: "false@email.com",
        password: "12345",
      })
    ).rejects.toEqual(new AppError("Email or Password Incorrect!"));
  });

  it("should not be able to authenticate with incorrect password", async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: "999987",
        email: "user@test.com",
        password: "1234",
        name: "User Test",
      };

      await createUserUseCase.execute(user);

      await expect(
        authenticateUserUseCase.execute({
          email: user.email,
          password: "12345",
        })
      );
    }).rejects.toEqual(new AppError("Email or Password Incorrect!"));
  });
});
