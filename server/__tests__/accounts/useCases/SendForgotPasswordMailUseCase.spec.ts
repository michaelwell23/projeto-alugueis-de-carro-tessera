import { SendForgotPasswordMailUseCase } from "@modules/accounts/useCases/SendForgotPasswordMail/SendForgotPasswordMailUseCase";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";

import { MailProviderInMemory } from "../../MailProvider/In-memory/MailProviderInMemory";
import { UsersRepositoryInMemory } from "../in-memory/UsersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "../in-memory/UsersTokensRepositoryInMemory";

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let mailProvider: MailProviderInMemory;

describe("Send forgot Mail", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    mailProvider = new MailProviderInMemory();
    dateProvider = new DayjsDateProvider();

    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProvider
    );
  });

  it("should be able to send a forgot password mail to user", async () => {
    const sendMail = spyOn(mailProvider, "sendMail");

    await usersRepositoryInMemory.create({
      driver_license: "816949",
      email: "ji@na.sz",
      name: "John Doe",
      password: "1234",
    });

    await sendForgotPasswordMailUseCase.execute("ji@na.sz");

    expect(sendMail).toHaveBeenCalled();
  });
});
