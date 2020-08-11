import {
  ToneAnalyzerV3,
  NaturalLanguageUnderstandingV1,
  PersonalityInsightsV3
} from "ibm-watson/sdk";
import VisualRecognitionV4 from "ibm-watson/visual-recognition/v4";
import { IamAuthenticator } from "ibm-watson/auth";
import {
  ToneAnalyzerConfig as TAConfig,
  NaturalLanguageUnderstandingConfig as NLUConfig,
  PersonalityInsightsConfig as PIConfig,
  VisualRecognitionConfig as VRConfig,
} from "../../config/watson.config";

class Watson {
  // Instance
  private static ToneAnalyzer: ToneAnalyzerV3;
  private static NaturalLanguageUnderstanding: NaturalLanguageUnderstandingV1;
  private static PersonalityInsights: PersonalityInsightsV3;
  private static VisualRecognition: VisualRecognitionV4;

  /**
   * Method responsible for checking the
   * existing instance of ToneAnalyzerV3
   *
   * @returns ToneAnalyzerV3: ToneAnalyzerV3
   */
  public static getInstanceToneAnaluzer(): ToneAnalyzerV3 {
    if (!Watson.ToneAnalyzer) {
      Watson.ToneAnalyzer = new ToneAnalyzerV3({
        version: TAConfig.version,
        authenticator: new IamAuthenticator({
          apikey: TAConfig.apiKey,
        }),
        url: TAConfig.URL,
      });
    }
    return Watson.ToneAnalyzer;
  }

  /**
   * Method responsible for checking the
   * existing instance of NaturalLanguageUnderstandingV1
   *
   * @returns NaturalLanguageUnderstandingV1: NaturalLanguageUnderstandingV1
   */
  public static getInstanceNaturalLanguage(): NaturalLanguageUnderstandingV1 {
    if (!Watson.NaturalLanguageUnderstanding) {
      Watson.NaturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
        version: NLUConfig.version,
        authenticator: new IamAuthenticator({
          apikey: NLUConfig.apiKey,
        }),
        url: NLUConfig.URL,
      });
    }
    return Watson.NaturalLanguageUnderstanding;
  }

  /**
   * Method responsible for checking the
   * existing instance of PersonalityInsightsV3
   *
   * @returns PersonalityInsightsV3: PersonalityInsightsV3
   */
  public static getInstancePersonalityInsights(): PersonalityInsightsV3 {
    if (!Watson.PersonalityInsights) {
      Watson.PersonalityInsights = new PersonalityInsightsV3({
        version: PIConfig.version,
        authenticator: new IamAuthenticator({
          apikey: PIConfig.apiKey,
        }),
        url: PIConfig.URL,
      });
    }
    return Watson.PersonalityInsights;
  }

  /**
   * Method responsible for checking the
   * existing instance of VisualRecognitionV4
   *
   * @returns VisualRecognitionV4: VisualRecognitionV4
   */
  public static getInstancVisualRecognition(): VisualRecognitionV4 {
    if (!Watson.VisualRecognition) {
      Watson.VisualRecognition = new VisualRecognitionV4({
        version: VRConfig.version,
        authenticator: new IamAuthenticator({
          apikey: VRConfig.apiKey,
        }),
        url: VRConfig.URL,
      });
    }
    return Watson.VisualRecognition;
  }
}

export default Watson;
