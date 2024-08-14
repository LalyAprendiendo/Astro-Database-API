import { Response, Request, Router } from "express";
import AuthController from "../controllers/auth-controller";

const authRouter = Router();

authRouter.post("/register", (request: Request, response: Response) => {
  AuthController.register(request, response);
});
authRouter.post("/login", (request: Request, response: Response) => {
  AuthController.logIn(request, response);
});

export default authRouter;
