import { Router } from "express";
import ToneAnalyzerController from '../app/controllers/ToneAnalyzer.controller';

const router = Router();

router.get('/', (request, response) =>{
    return response.status(200).json({message: "Olá"});
});

router.get('/tone/v1/index',ToneAnalyzerController.index);
router.post('/tone/v1/create',ToneAnalyzerController.create);
router.put('/tone/v1/update',ToneAnalyzerController.update);
router.delete('/tone/v1/delete',ToneAnalyzerController.delete);

export default router;