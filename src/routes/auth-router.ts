import { Response, Request, Router  } from "express";
import AuthController from "../controllers/auth-controller";

const authRouter = Router();

authRouter.post("/register", (request: Request, response: Response) =>  {
    AuthController.register(request, response )

})

export default authRouter