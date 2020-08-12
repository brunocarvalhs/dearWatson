import { celebrate, Segments, Joi } from "celebrate";

export const AnalyzeText = celebrate({
  [Segments.BODY]: Joi.object().keys({
    url: Joi.string().required().uri(),
  }),
});