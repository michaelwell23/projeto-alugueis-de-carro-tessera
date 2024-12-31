import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

const specificationsRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository,
);
export const createSpecificationontroller = new CreateSpecificationController(
  createSpecificationUseCase,
);
