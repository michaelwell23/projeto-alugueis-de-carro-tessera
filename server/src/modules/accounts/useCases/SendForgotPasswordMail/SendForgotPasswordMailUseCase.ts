import { inject, injectable } from "tsyringe";
import { v4 as uuidv4 } from "uuid";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokenRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { IMailProvider } from "@shared/container/providers/MailProvider/IMailProvider";
import { AppError } from "@shared/errors/AppError";

@injectable()
export class SendForgotPasswordMailUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository,

    @inject("UsersTokenRepository")
    private usersTokensRepository: IUsersTokensRepository,

    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider,

    @inject("MailProvider")
    private mailProvider: IMailProvider
  ) {}

  async execute(email: string): Promise<void> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError("User does not exists!");
    }

    const token = uuidv4();
    const expires_date = this.dateProvider.addHours(3);

    await this.usersTokensRepository.create({
      refresh_token: token,
      user_id: user.id,
      expires_date,
    });

    await this.mailProvider.sendMail(
      email,
      "Recuperação de senha",
      `O link para o reset é ${token}`
    );
  }
}
