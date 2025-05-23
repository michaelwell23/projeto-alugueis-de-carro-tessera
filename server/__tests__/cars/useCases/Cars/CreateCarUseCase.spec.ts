import { CreateCarUseCase } from "../../../../src/modules/cars/useCases/CreateCar/CreateCarUseCase";
import { AppError } from "../../../../src/shared/errors/AppError";
import { CarsRepositoryInMemory } from "../../in-memory/CarsRepositoryInMemory";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Name Car",
      description: "Description Car",
      daily_rate: 100,
      color: "white",
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with exists license plate", async () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Car1",
        description: "Description Car",
        daily_rate: 100,
        color: "white",
        license_plate: "ABC-1234",
        fine_amount: 60,
        brand: "Brand",
        category_id: "category 1",
      });

      await expect(
        createCarUseCase.execute({
          name: "Car2",
          description: "Description Car",
          daily_rate: 100,
          color: "white",
          license_plate: "ABC-1234",
          fine_amount: 60,
          brand: "Brand",
          category_id: "category 1",
        })
      );
    }).rejects.toEqual(new AppError("Car already exists"));
  });

  it("should be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "Car Available",
      description: "Description Car",
      daily_rate: 100,
      color: "white",
      license_plate: "ABCD-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category  1",
    });

    expect(car.available).toBe(true);
  });
});
