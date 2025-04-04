import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateUserController } from "@modules/accounts/useCases/CreateUser/CreateUserControllers";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/UpdateUserAvatar/UpdateUserAvatarController";
import { ensureAuthenticated } from "@shared/infra/http/middleware/ensureAuthenticated";

const usersRouter = Router();
const uploadAvatar = multer(uploadConfig);

const createUsercontroller = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRouter.post("/", createUsercontroller.handle);
usersRouter.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

export default usersRouter;
