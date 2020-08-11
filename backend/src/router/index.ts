import { Router } from "express";
import ToneAnalyzerController from '../app/controllers/ToneAnalyzer.controller';
import NaturalLanguageController from '../app/controllers/NaturalLanguage.controller';

const router = Router();

router.get('/', (request, response) =>{
    return response.status(200).json({message: "Olá"});
});

router.get('/tone/v1/index',ToneAnalyzerController.index);
router.post('/tone/v1/create',ToneAnalyzerController.create);
router.put('/tone/v1/update',ToneAnalyzerController.update);
router.delete('/tone/v1/delete',ToneAnalyzerController.delete);

router.get('/natural/v1/index',NaturalLanguageController.index);
router.post('/natural/v1/create',NaturalLanguageController.create);
router.put('/natural/v1/update',NaturalLanguageController.update);
router.delete('/natural/v1/delete',NaturalLanguageController.delete);


export default router;