import { Response } from "express";

class Validations {
  public formatValidate(error: any, res: Response) {
    if (error?.details?.get("body")?.details[0]) {
      return res.status(400).json({
        // Você pode definir um status diferente caso queira
        message: error?.details?.get("body")?.details[0]?.message,
        field: error?.details?.get("body")?.details[0]?.path[0],
        validation: error?.details?.get("body")?.details[0]?.type,
      });
    }

    return res.status(500).json({ message: "Erro de validação!" }); // Caso ocorra um erro de validação retorna 500
  }
}

export { Validations };
