import Watson from "./Watson.controller";
import { Response, Request } from "express";

class PersonalityInsightsController {
    index(request: Request, response: Response){
        try {

        } catch (err) {
            throw new Error(err);
        }
    }

    create(request: Request, response: Response){
        try {
            const { } = request.body;
        } catch (err) {
            throw new Error(err);
        }
    }

    update(request: Request, response: Response){
        try {

        } catch (err) {
            throw new Error(err);
        }
    }

    delete(request: Request, response: Response){
        try {

        } catch (err) {
            throw new Error(err);
        }
    }
}

export default new PersonalityInsightsController;