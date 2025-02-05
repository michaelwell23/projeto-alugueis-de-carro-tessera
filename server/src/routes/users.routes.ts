import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/CreateUser/CreateUserControllers";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/UpdateUserAvatar/UpdateUserAvatarController";

const usersRouter = Router();

const createUsercontroller = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRouter.post("/", createUsercontroller.handle);
usersRouter.patch("/avatar", updateUserAvatarController.handle);

export default usersRouter;
