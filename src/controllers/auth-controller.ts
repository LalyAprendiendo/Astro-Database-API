import { Request, Response } from "express";
import UserController from "./user-controller";
import AuthModel from "../models/auth-model";
import { v4 as uuidv4 } from "uuid";
import { createHash } from "../utils/hash";

class AuthController {
  static register(request: Request, response: Response) {
    const { password } = request.body;
    const user = UserController.getByEmail(request, response);
    if (user)
      return response.status(400).json({ message: "El usuario ya existe" });
    const userId = UserController.create(request, response);
    const db = AuthModel.getData();
    if (!userId) {
      if (user)
        return response.status(400).json({ message: "Datos invalidos" });
    }
    db.auth.push({
      id: uuidv4(),
      userId: userId,
      password: password,
    });
    AuthModel.writeData(db);
    response.status(201).json({ message: "Usuario registrado" });
  }
  // static logIn(request: Request, response: Response) {
  //   const { email, password } = request.body;
  // }
}

export default AuthController;
