import { celebrate, Segments, Joi } from "celebrate";

export const AnalyzeGeneralTone = celebrate({
  [Segments.BODY]: Joi.object().keys({
    text: Joi.string().required(),
  }),
});

export const AnalyzeCustomerEngagementTone = celebrate({
  [Segments.BODY]: Joi.object().keys({
      chat: Joi.array().items(Joi.object().keys({
        text: Joi.string().required(),
        user: Joi.string().required()
      }))
  }),
});