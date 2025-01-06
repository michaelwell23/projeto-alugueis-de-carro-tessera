import express from "express";
import swaggerUi from "swagger-ui-express";
import router from "./routes/index.router";

import swaggerFile from "./swagger.json";

const port = 3000;
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(port, () => console.log(`Server app listening on port ${port}!`));
