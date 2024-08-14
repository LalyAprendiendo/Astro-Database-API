import { NextFunction, Request, Response } from "express";
import AuthModel from "../models/auth-model";

export function checkToken(
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (!request.query.token) {
    return response.status(400).json({ message: "El token es requerido" });
  }
  const { auth } = AuthModel.getData();
  const authUser = auth.find((user) => user["token"] == request.query.token);
  if (!authUser) {
    return response.status(401).json({ message: "Token invalido" });
  }
  next();
}
