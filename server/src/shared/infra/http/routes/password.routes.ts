import { Router } from "express";

import { ResetPasswordUserController } from "@modules/accounts/useCases/ResetPasswordUSer/ResetPasswordUserController";

import { SendForgotPasswordMailController } from "../../../../modules/accounts/useCases/SendForgotPasswordMail/SendForgoPasswordMailController";

const passwordRoutes = Router();
const sendForgotPasswordMailController = new SendForgotPasswordMailController();
const resetPasswordUserController = new ResetPasswordUserController();

passwordRoutes.post("/forgot", sendForgotPasswordMailController.handle);
passwordRoutes.post("/reset", resetPasswordUserController.handle);

export default passwordRoutes;
