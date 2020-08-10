import {
  ToneAnalyzerV3,
  NaturalLanguageClassifierV1,
  VisualRecognitionV3,
  PersonalityInsightsV3,
} from "ibm-watson/sdk";
import { IamAuthenticator } from "ibm-watson/auth";
import { ToneAnalyzerConfig } from "../../config/watson.config";

class Watson {

    // Instance
    private static ToneAnalyzer: ToneAnalyzerV3;
    private static NaturalLanguageClassifier: NaturalLanguageClassifierV1;
    private static PersonalityInsights: PersonalityInsightsV3;
    private static VisualRecognition: VisualRecognitionV3;

    /**
     * Method responsible for checking the 
     * existing instance of ToneAnalyzerV3
     * 
     * @returns ToneAnalyzerV3: ToneAnalyzerV3
     */
    protected getInstanceToneAnaluzer(): ToneAnalyzerV3 {
        if (!Watson.ToneAnalyzer) {
        Watson.ToneAnalyzer = new ToneAnalyzerV3({
            version: ToneAnalyzerConfig.version,
            authenticator: new IamAuthenticator({
            apikey: ToneAnalyzerConfig.apiKey,
            }),
            url: ToneAnalyzerConfig.URL,
        });
        }
        return Watson.ToneAnalyzer;
    }

    /**
     * Method responsible for checking the 
     * existing instance of NaturalLanguageClassifierV1
     * 
     * @returns NaturalLanguageClassifierV1: NaturalLanguageClassifierV1
     */
    protected getInstanceNaturalLanguage(): NaturalLanguageClassifierV1 {
        if(!Watson.NaturalLanguageClassifier){
            Watson.NaturalLanguageClassifier = new NaturalLanguageClassifierV1({

            });
        }
        return Watson.NaturalLanguageClassifier;
    }

    /**
     * Method responsible for checking the 
     * existing instance of PersonalityInsightsV3
     * 
     * @returns PersonalityInsightsV3: PersonalityInsightsV3
     */
    protected getInstancePersonalityInsights(): PersonalityInsightsV3 {
        if(!Watson.PersonalityInsights){
            Watson.PersonalityInsights = new PersonalityInsightsV3({

            });
        }
        return Watson.PersonalityInsights;
    }

    /**
     * Method responsible for checking the 
     * existing instance of VisualRecognitionV3
     * 
     * @returns VisualRecognitionV3: VisualRecognitionV3
     */
    protected getInstancPersonalityInsights(): VisualRecognitionV3 {
        if(!Watson.VisualRecognition){
            Watson.VisualRecognition = new VisualRecognitionV3({

            });
        }
        return Watson.VisualRecognition;
    }
}

export default Watson;
