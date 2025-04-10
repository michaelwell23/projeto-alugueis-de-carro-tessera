import { IMailProvider } from "@shared/container/providers/MailProvider/IMailProvider";

export class MailProviderInMemory implements IMailProvider {
  private messages: any[] = [];

  async sendMail(
    to: string,
    subject: string,
    variables: any,
    path: string
  ): Promise<void> {
    this.messages.push({
      to,
      subject,
      variables,
      path,
    });

    return Promise.resolve();
  }
}
