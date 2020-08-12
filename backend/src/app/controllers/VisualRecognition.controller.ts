import Watson from "./Watson.controller";
import { Response, Request } from "express";

class VisualRecognitionController {
  index(request: Request, response: Response) {}

  create(request: Request, response: Response) {
    try {
      const { file } = request.body;

      const params = {
        imagesFile: [file],
        collectionIds: ['5826c5ec-6f86-44b1-ab2b-cca6c75f2fc7'],
        features: ['objects'],
      };

      Watson.getInstancVisualRecognition().analyze(params, function (err, response) {
        if (err) {
          console.log(err);
        } else {
          console.log(JSON.stringify(response, null, 2))
        }
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  update(request: Request, response: Response) {}

  delete(request: Request, response: Response) {}
}

export default new VisualRecognitionController();
