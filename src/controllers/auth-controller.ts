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
      return response.status(400).json({ message: "El email ya existe" });
    const userId = UserController.create(request, response);
   
    if (!userId) {
      if (user)
        return response.status(400).json({ message: "Datos invalidos" });
    }
    const db = AuthModel.getData();
    const token = uuidv4()
    db.auth.push({
      id: uuidv4(),
      userId: userId,
      password: createHash(password),
      token: token,
    });
    AuthModel.writeData(db);
    response.status(201).json({ message: "Usuario registrado", token: token });
  }
  static logIn(request: Request, response: Response) {
    const { password } = request.body;
    const user = UserController.getByEmail(request, response);
    if (!user)
      return response.status(400).json({ message: "Usuario no encontrado" });

    const userId = user.id;
    const authDb = AuthModel.getData().auth;
    const userAuth = authDb.find((user) => user["userId"] == userId);

    if (userAuth["password"] != createHash(password))
      return response.status(401).json({ message: "Contraseña incorrecta" });
    response.status(200).json({ message: "Bienvenido", token: userAuth["token"] });
  }
}

export default AuthController;
