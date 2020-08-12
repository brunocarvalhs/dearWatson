import Watson from "./Watson.controller";
import { Response, Request } from "express";

class ToneAnalyzerController {

  /**
   * 
   * @param request 
   * @param response 
   */
  AnalyzeGeneralTone(request: Request, response: Response) {
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
          return response.status(401).json({ error: err });
        });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * 
   * @param request 
   * @param response 
   */
  AnalyzeCustomerEngagementTone(request: Request, response: Response) {
    try {
      const { chat } = request.body;

      const toneChatParams = {
        utterances: chat,
      };

      Watson.getInstanceToneAnaluzer()
        .toneChat(toneChatParams)
        .then((data: any) => {
          const { result } = data;
          return response.status(200).json(result);
        })
        .catch((err: Error) => {
          return response.status(401).json({ error: err });
        });
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new ToneAnalyzerController();
