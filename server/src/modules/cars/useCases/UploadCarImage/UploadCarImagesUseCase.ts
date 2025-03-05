import { inject, injectable } from "tsyringe";

import { ICarsImageRepository } from "@modules/cars/repositories/ICarsImageRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  car_id: string;
  images_name: string[];
}
@injectable()
export class UploadCarImagesUseCase {
  constructor(
    @inject("CarsImagesRepository")
    private carsImagesRepository: ICarsImageRepository
  ) {}

  async execute({ car_id, images_name }: IRequest): Promise<void> {
    images_name.map(async (image) => {
      await this.carsImagesRepository.create(car_id, image);
    });
  }
}
