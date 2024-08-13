//ROUTES
//Es el directorio que contiene los routers relativos a cada base de datos. Cada módulo router contiene dentro una instancia del Router de Express con todas los endpoints relativos a cada entidad.

import { Router } from "express";
import UserController from "../controllers/user-controller";
import { Response,Request  } from "express";

const usersRouter = Router();

usersRouter.get("/", (request: Request, response: Response) => {
});

usersRouter.get("/:id", (request: Request, response: Response) => {
    UserController.getById(request, response)
});

usersRouter.post("/", (request: Request, response: Response) => {
    UserController.create(request, response)
});
usersRouter.patch("/id", (request, response) => {});
usersRouter.delete("/id", (request, response) => {});

export default usersRouter;