import express, { Request, Response } from "express";
import { routes } from "./routes";
import { Validations } from "./Validations";
import cors from "cors";

const validations = new Validations();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((error: any, req: Request, res: Response, next: any) => {
  validations.formatValidate(error, res); // Ajusto uma resposta formatada para o retorno de erro
});

app.listen(process.env.PORT || 3333);
