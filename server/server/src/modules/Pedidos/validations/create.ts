import { validate, Joi } from "express-validation";

export default validate({
  body: Joi.object({
    listaprodutos: Joi.array().items(Joi.object({
      idproduto: Joi.number().required(),
      quantidade: Joi.number().required(),
    })),
    nomeCupom: Joi.string().allow(""),
  }),
});
