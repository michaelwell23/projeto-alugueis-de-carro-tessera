import { Router } from "express";

import { SendForgotPasswordMailController } from "../../../../modules/accounts/useCases/SendForgotPasswordMail/SendForgoPasswordMailController";

const passwordRoutes = Router();
const sendForgotPasswordMailController = new SendForgotPasswordMailController();

passwordRoutes.post("/forgot", sendForgotPasswordMailController.handle);

export default passwordRoutes;
