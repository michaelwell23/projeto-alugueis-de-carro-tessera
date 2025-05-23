import { SendForgotPasswordMailUseCase } from "../../../src/modules/accounts/useCases/SendForgotPasswordMail/SendForgotPasswordMailUseCase";
import { DayjsDateProvider } from "../../../src/shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { AppError } from "../../../src/shared/errors/AppError";
import { MailProviderInMemory } from "../../MailProvider/In-memory/MailProviderInMemory";
import { UsersRepositoryInMemory } from "../in-memory/UsersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "../in-memory/UsersTokensRepositoryInMemory";

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let mailProvider: MailProviderInMemory;

describe("Send Forgot Mail", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    dateProvider = new DayjsDateProvider();
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    mailProvider = new MailProviderInMemory();

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
      driver_license: "664168",
      email: "avzonbop@ospo.pr",
      name: "Blanche Curry",
      password: "1234",
    });

    await sendForgotPasswordMailUseCase.execute("avzonbop@ospo.pr");

    expect(sendMail).toHaveBeenCalled();
  });

  it("should not be able to send an email if user does not exists", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("ka@email.com")
    ).rejects.toEqual(new AppError("User does not exists!"));
  });

  it("should be able to create an users token", async () => {
    const generateTokenMail = spyOn(usersTokensRepositoryInMemory, "create");

    await usersRepositoryInMemory.create({
      driver_license: "787330",
      email: "abome@regrog.ee",
      name: "Leon Perkins",
      password: "1234",
    });

    await sendForgotPasswordMailUseCase.execute("abome@regrog.ee");

    expect(generateTokenMail).toBeCalled();
  });
});
