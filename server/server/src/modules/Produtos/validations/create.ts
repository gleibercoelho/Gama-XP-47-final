import { validate, Joi } from "express-validation";

export default validate({
  body: Joi.object({
    nome: Joi.string().required(),
    //foto: Joi.string().required(),
    preco: Joi.number().required(),
    descricao: Joi.string().allow(""),
    categoria: Joi.number().required(),
  }),
});
