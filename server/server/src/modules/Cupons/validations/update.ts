import { validate, Joi } from "express-validation";

export default validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    desconto: Joi.number(),
    descontoporcentagem: Joi.boolean(),
  }),
});
