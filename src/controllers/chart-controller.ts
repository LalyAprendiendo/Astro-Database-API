///CONTROLLERS
//Tiene los controladores de user y chart. Son los encargados de manejar las Request/Response, de interactuar con los modelos, y de realizar chequeos.
import { Response, Request } from "express";
import ChartModel from "../models/chart-model";
import { chartsValidator } from "../schemas/charts";
import { writeFileSync } from "jsonfile";
import db from "../database/natal-charts.json";

class ChartController {
  constructor() {}
  static getAll(request: Request, response: Response) {
    const db = ChartModel.getData();
    response.status(200).json(db.charts);
  }

  static getById(request: Request, response: Response) {
    const db = ChartModel.getData();
    const chart = db.charts.find((chart) => request.params.id == chart.id);
    response.status(200).json({ message: chart });
  }
  static create(request: Request, response: Response) {
    const result = chartsValidator(request.body);
    if (!result.success)
      return response.status(400).json({ error: result.error });
    const chart = request.body;
    db.charts.push(chart);
    writeFileSync("./src/database/natal-charts.json", db.charts);

    response.status(200).json({ message: "Creado exitosamente" });
  }
  static deleteById(request: Request, response: Response) {}
  static updateById(request: Request, response: Response) {}
}

export default ChartController;
