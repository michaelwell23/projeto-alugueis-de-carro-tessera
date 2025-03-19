import { DevolutionRentalUseCase } from "@modules/rentals/UseCases/DevolutionRental/DevolutionRentalUseCase";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";

import { CarsRepositoryInMemory } from "../../cars/in-memory/CarsRepositoryInMemory";
import { RentalsRepositoryInMemory } from "../in-memory/RentalsRepositoryInMemory";

describe("DevolutionRentalUseCase", () => {
  let devolutionRentalUseCase: DevolutionRentalUseCase;
  let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
  let carsRepositoryInMemory: CarsRepositoryInMemory;
  let dateProvider: DayjsDateProvider;

  beforeEach(() => {});

  it("should be able to devolution a rental", async () => {});
});
