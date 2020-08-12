import { Router } from "express";

//Validator
import {
  AnalyzeGeneralTone,
  AnalyzeCustomerEngagementTone,
} from "../app/validator/ToneAnalyzer.validator";
import { AnalyzeText } from "../app/validator/NatualLanguage.validator";

// Controllers
import ToneAnalyzerController from "../app/controllers/ToneAnalyzer.controller";
import NaturalLanguageController from "../app/controllers/NaturalLanguage.controller";

const router = Router();

router.get("/", (request, response) => {
  return response.status(200).json({ message: "Olá" });
});

router.post(
  "/tone/v1/analyze",
  AnalyzeGeneralTone,
  ToneAnalyzerController.AnalyzeGeneralTone
);
router.post(
  "/tone/v1/chat",
  AnalyzeCustomerEngagementTone,
  ToneAnalyzerController.AnalyzeCustomerEngagementTone
);

router.post(
  "/natural/v1/create",
  AnalyzeText,
  NaturalLanguageController.AnalyzeText
);

export default router;