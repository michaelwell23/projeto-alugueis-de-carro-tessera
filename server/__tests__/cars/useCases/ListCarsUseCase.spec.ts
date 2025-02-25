import { ListCarsUseCase } from "../../../src/modules/cars/useCases/ListCars/ListCarsUseCase";
import { CarsRepositoryInMemory } from "../in-memory/CarsRepositoryInMemory";

describe("List Cars", () => {
  let listCarsUseCase: ListCarsUseCase;
  let carsRepositoryInMemory: CarsRepositoryInMemory;

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Description Car",
      daily_rate: 100,
      color: "white",
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Description Car",
      daily_rate: 150,
      color: "white",
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand_test",
      category_id: "category",
    });

    const cars = await listCarsUseCase.execute({ brand: "Brand_test" });

    expect(cars).toEqual([car]);
  });
});
