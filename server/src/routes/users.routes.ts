import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/CreateUser/CreateUserControllers";

const usersRouter = Router();

const createUsercontroller = new CreateUserController();

usersRouter.post("/", createUsercontroller.handle);

export default usersRouter;
