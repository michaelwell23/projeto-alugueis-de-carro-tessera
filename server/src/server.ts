import "reflect-metadata";

import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import { AppError } from "@errors/AppErrors";

import router from "./routes/index.router";
import swaggerFile from "./swagger.json";

import "./database";
import "@shared/container";

const port = 3333;
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "Error",
      message: `internal server error - ${err.message}`,
    });
  }
);

app.listen(port, () => console.log(`Server app listening on port ${port}!`));
