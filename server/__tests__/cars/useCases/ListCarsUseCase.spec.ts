import { ListAvailableCarsUseCase } from "../../../src/modules/cars/useCases/ListAvailableCars/ListAvailableCarsUseCase";
import { CarsRepositoryInMemory } from "../in-memory/CarsRepositoryInMemory";

describe("List Cars", () => {
  let listAvailableCarsUseCase: ListAvailableCarsUseCase;
  let carsRepositoryInMemory: CarsRepositoryInMemory;

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
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
      category_id: "category1",
    });

    const cars = await listAvailableCarsUseCase.execute({});

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
      category_id: "category2",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Description Car",
      daily_rate: 169,
      color: "black",
      license_plate: "ABC-978",
      fine_amount: 70,
      brand: "Brand_test3",
      category_id: "category3",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "category3",
    });

    expect(cars).toEqual([car]);
  });
});
