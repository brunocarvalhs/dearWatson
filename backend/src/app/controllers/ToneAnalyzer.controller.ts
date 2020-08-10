import Watson from "./Watson.controller";
import { Response, Request } from "express";

class ToneAnalyzerController extends Watson {
  index(request: Request, response: Response) {}

  create(request: Request, response: Response) {
    try {
      const { text } = request.body;

      const params = {
        toneInput: { text: text },
        contentType: "application/json",
      };

      this.getInstanceToneAnaluzer()
        .tone(params)
        .then((data: any) => {
          const { result } = data;
          return response.status(200).json(result);
        })
        .catch((err: Error) => {
          console.log("error:", err);
        });
    } catch (error) {
      return response.status(404).json({ message: error });
    }
  }

  update(request: Request, response: Response) {}

  delete(request: Request, response: Response) {}
}

export default new ToneAnalyzerController();
