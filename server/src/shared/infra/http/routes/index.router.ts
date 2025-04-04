import { Router } from "express";

import authenticateRoutes from "./authenticate.routes";
import carsRouter from "./cars.routes";
import categoriesRoutes from "./categories.routes";
import passwordRoutes from "./password.routes";
import rentalsRoutes from "./rentals.routes";
import specificationsRoutes from "./specifications.routes";
import usersRouter from "./users.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRouter);
router.use("/cars", carsRouter);
router.use("/rentals", rentalsRoutes);
router.use("/password", passwordRoutes);
router.use(authenticateRoutes);

export default router;
