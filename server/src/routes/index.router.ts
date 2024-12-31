import { Router } from "express";
import categoriesRoutes from "./categories.routes";
import SpecificationsRoutes from "./specifications.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", SpecificationsRoutes);

export default router;
