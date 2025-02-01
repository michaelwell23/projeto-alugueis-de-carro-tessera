import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    console.log("🔎 Verificando se usuário já existe...");

    const userAlreadyExists = await this.usersRepository.findByEmail(email);
    console.log("✅ findByEmail executado!");

    if (userAlreadyExists) {
      console.log("⛔ Usuário já existe!");
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);
    console.log(passwordHash);
    console.log("✅ Senha criptografada!");

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    });
    console.log("✅ Usuário criado com sucesso!");
  }
}
