import express, { json } from "express";
import { Response,Request  } from "express";
import indexRouter from "./routes";
import usersDb from "./database/users.json";
import chartsDb from "./database/natal-charts.json";

const PORT = 8080;
export const app = express();

app.use(json());



indexRouter.get("/", (request: Request, response: Response) => {
  console.log(usersDb, chartsDb);
  const userInfo = usersDb.info;
  const chartsInfo = chartsDb.info;
  const description = {
    userInfo,
    chartsInfo,
  };
  response.status(200).json(description);
});

app.use("/api", indexRouter );

app.listen(PORT, () => {
  console.log("Server listening on port:", PORT);
});
