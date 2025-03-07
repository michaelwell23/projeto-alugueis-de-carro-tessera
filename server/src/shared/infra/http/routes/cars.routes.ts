import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateCarController } from "@modules/cars/useCases/CreateCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/CreateCarSpecifications/CreateCarSpecificationsController";
import { ListaAvailableCarsController } from "@modules/cars/useCases/ListAvailableCars/LIstAvailableCarsController";
import { UploadCarImageController } from "@modules/cars/useCases/UploadCarImage/UploadCarImageController";
import { ensureAdmin } from "@shared/infra/http/middleware/ensureAdmin";
import { ensureAuthenticated } from "@shared/infra/http/middleware/ensureAuthenticated";

const carsRouter = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListaAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImageController();

const upload = multer(uploadConfig.upload("/cars"));

carsRouter.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

carsRouter.get("/available", listAvailableCarsController.handle);
carsRouter.post(
  "/specifications/:id",
  ensureAuthenticated,
  ensureAdmin,
  createCarSpecificationController.handle
);
carsRouter.post(
  "/images/:id",
  ensureAuthenticated,
  ensureAdmin,
  upload.array("images"),
  uploadCarImagesController.handle
);

export default carsRouter;
