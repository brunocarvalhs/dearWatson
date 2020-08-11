import Watson from "./Watson.controller";
import { Response, Request } from "express";

class NaturalLanguageController {
  index(request: Request, response: Response) {}

  create(request: Request, response: Response) {
    try {
      const { url } = request.body;
      const analyzeParams = {
        url: url,
        features: {
          categories: {
            limit: 3,
          },
        },
      };

      Watson.getInstanceNaturalLanguage()
        .analyze(analyzeParams)
        .then((data: any) => {
          const { result } = data;
          return response.status(200).json(result);
        })
        .catch((err) => {
          return response.status(401).json({ error: err });
        });
    } catch (error) {
      throw new Error(error);
    }
  }

  update(request: Request, response: Response) {}

  delete(request: Request, response: Response) {}
}

export default new NaturalLanguageController();
