import { inject, injectable } from "tsyringe";

import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}
@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specificaton Already exists!");
    }

    this.specificationsRepository.create({ name, description });
  }
}
