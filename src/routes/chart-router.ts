///ROUTES
//Es el directorio que contiene los routers relativos a cada base de datos. Cada módulo router contiene dentro una instancia del Router de Express con todas los endpoints relativos a cada entidad.

import { Request, Response, Router } from "express";
import db from "../database/natal-charts.json";

const chartsRouter = Router()

chartsRouter.get("/", (request: Request, response: Response) => {
    response.status(200).json({message: db.charts})
});

chartsRouter.get("/:name", (request: Request, response: Response) => {response.status(200).json({message: db.charts[0]})  
});
chartsRouter.post("/", (request: Request, response: Response) => {});
chartsRouter.patch("/id", (request: Request, response: Response) => {});
chartsRouter.delete("/id", (request: Request, response: Response) => {});

export default chartsRouter