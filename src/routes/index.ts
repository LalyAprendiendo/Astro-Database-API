import { Router } from "express";
import { checkToken } from "../middlewares/check-token";
import usersRouter from "./user-router";
import chartsRouter from "./chart-router";
import authRouter from "./auth-router";

const indexRouter = Router();

indexRouter.use("/users", checkToken, usersRouter);
indexRouter.use("/charts", checkToken, chartsRouter);
indexRouter.use("/auth", authRouter);

export default indexRouter;
