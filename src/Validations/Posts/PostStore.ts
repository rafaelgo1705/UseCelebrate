import { celebrate, Joi, Segments } from "celebrate";

class PostStore {
  public validate() {
    return celebrate({
      [Segments.BODY]: this.body(),
    });
  }

  private body() {
    return Joi.object().keys({
      title: Joi.string().required().empty().messages({
        "any.required": "Título é obrigatório!", // Posso realizar a formatação das mensagens de retorno de acordo com as flags
        "string.empty": "Insira o Título!",
      }),

      description: Joi.string().required().empty().messages({
        "any.required": "Descrição é obrigatório!",
        "string.empty": "Insira uma descrição!",
      }),

      year: Joi.string().required().empty().messages({
        "any.required": "Ano da publicação obrigatório!",
        "string.empty": "Insira o ano da publicação!",
      }),

      author: {
        name: Joi.string().required().empty().messages({
          "string.empty": "Insira o nome do autor!",
          "any.required": "Nome do autor é obrigatório!",
        }),

        age: Joi.optional(),
        last_name: Joi.optional(),
      },
    });
  }
}

export { PostStore };
