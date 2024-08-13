//MODELS
//Contiene los modelos de user y chart. Cada uno tiene por objetivo ejecutar todas las acciones para poder interactuar con las bases de datos. Realiza tambien los chequeos relativos a si un usuario o carta ya existe en la base de datos.
import db from "../database/natal-charts.json";
import { writeFileSync } from "jsonfile";

class ChartModel {
  constructor() {}

 static getData() {
    return db;
  }
 static writeData(data: {}) {
    writeFileSync("./src/database/natal-charts.json", data);
  }
}


export default ChartModel;