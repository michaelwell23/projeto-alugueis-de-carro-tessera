import { ICreateCarDTO } from "../dtos/ICreateCarsDTO";

export interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<void>;
}
