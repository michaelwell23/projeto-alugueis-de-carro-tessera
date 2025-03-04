import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  car_id: string;
  images_name: string[];
}

export class UploadCarImagesUseCase {
  constructor(private carsRepository: ICarsRepository) {}

  async execute({ car_id, images_name }: IRequest): Promise<Car> {}
}
