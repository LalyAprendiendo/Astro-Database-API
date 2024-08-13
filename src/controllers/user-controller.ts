//CONTROLLERS
//Tiene los controladores de user y chart. Son los encargados de manejar las Request/Response, de interactuar con los modelos, y de realizar chequeos.
import { Response, Request } from "express";
import UserModel from "../models/user-model";
import { usersValidator } from "../schemas/users";
import { v4 as uuidv4 } from "uuid";

class UserController {
  constructor() {}

  static getById(request: Request, response: Response) {
    // const db = UserModel.getData();
    // const user = db.users.find((user) => user.id == request.body.id);
    // response.status(200).json({ message: user });
  }
  static create(request: Request, response: Response) {
    const db = UserModel.getData();
    const result = usersValidator(request.body);

    if (!result.success) return false;
    const user: any = result.data;
    user.id = uuidv4();

    db.users.push(user);
    UserModel.writeData(db);
    return user.id;
  }

  static updateById(request: Request, response: Response) {}
  static getByEmail(request: Request, response: Response) {
    const db = UserModel.getData();
    const user = db.users.find((user) => user.email == request.body.email);
    return user;
  }
}

export default UserController;
