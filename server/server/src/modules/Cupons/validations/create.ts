import { validate, Joi } from "express-validation";

export default validate({
  body: Joi.object({
    nome: Joi.string().required(),
    desconto: Joi.number().required(),
    descontoporcentagem: Joi.boolean().required(),
  }),
});
