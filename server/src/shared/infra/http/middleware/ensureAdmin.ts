import { NextFunction, Request, Response } from "express";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.user;

  const UserRepository = new UsersRepository();

  const user = await UserRepository.findById(id);

  if (!user.isAdmin) {
    return response.status(401).json({
      error: "User is not an admin",
    });
  }

  return next();
}
