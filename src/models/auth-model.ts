import db from "../database/auth.json";
import { writeFileSync } from "jsonfile";

class AuthModel {
  constructor() {}

  static getData() {
    return db;
  }
  static writeData(data: {}) {
    writeFileSync("./src/database/auth.json", data);
  }
}

export default AuthModel;
