import Watson from "./Watson.controller";
import { Response, Request } from "express";

class ToneAnalyzerController {
  index(request: Request, response: Response) {}

  create(request: Request, response: Response) {
    try {
      const { text } = request.body;

      const params = {
        toneInput: { text: text },
        contentType: "application/json",
      };

      Watson.getInstanceToneAnaluzer()
        .tone(params)
        .then((data: any) => {
          const { result } = data;
          return response.status(200).json(result);
        })
        .catch((err: Error) => {
          return response.status(401).json({error: err});
        });
    } catch (error) {
      throw new Error(error);
    }
  }

  update(request: Request, response: Response) {}

  delete(request: Request, response: Response) {}
}

export default new ToneAnalyzerController();
