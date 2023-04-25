import { validate, Joi } from "express-validation";

export default validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    nome: Joi.string(),
    preco: Joi.number(),
    descricao: Joi.string(),
    categoria: Joi.number(),
  }),
});
