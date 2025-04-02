import { Router } from "express";

import { AuthenticateUserController } from "@modules/accounts/useCases/AuthenticateUser/AuthenticateUserController";
import { RefreshTokenController } from "@modules/accounts/useCases/refreshToken/RefreshTokenController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const refleshTokenController = new RefreshTokenController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);
authenticateRoutes.post("/refresh-token", refleshTokenController.handle);

export default authenticateRoutes;
