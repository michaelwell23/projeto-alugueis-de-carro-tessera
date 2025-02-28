import { ICreateCarDTO } from "../../../src/modules/cars/dtos/ICreateCarsDTO";
import { Car } from "../../../src/modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "../../../src/modules/cars/repositories/ICarsRepository";

export class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({
    name,
    description,
    daily_rate,
    color,
    license_plate,
    fine_amount,
    brand,
    category_id,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      name,
      description,
      daily_rate,
      color,
      license_plate,
      fine_amount,
      brand,
      category_id,
    });

    this.cars.push(car);
    return Promise.resolve(car);
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find((car) => car.license_plate === license_plate);
  }

  async list(): Promise<Car[]> {
    return this.cars;
  }

  async findAvailable(category_id, brand, name): Promise<Car[]> {
    const all = this.cars.filter((car) => {
      if (
        car.available === true ||
        (brand && car.brand === brand) ||
        (category_id && car.category_id === category_id) ||
        (name && car.name === name)
      ) {
        return car;
      }
      return null;
    });

    return all;
  }
  async findById(id: string): Promise<Car> {
    return this.cars.find((car) => car.id === id);
  }

  async updateAvailable(id: string, available: boolean): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
