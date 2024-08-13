import { Router } from "express";
import usersRouter from "./user-router";
import chartsRouter from "./chart-router";
import authRouter from "./auth-router";


const indexRouter = Router();


  indexRouter.use("/users", usersRouter);
  indexRouter.use("/charts", chartsRouter);
  indexRouter.use("/auth", authRouter);

  export default indexRouter