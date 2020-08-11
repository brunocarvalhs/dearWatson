require('dotenv').config();

module.exports = {
    ToneAnalyzerConfig: {
        version: (process.env.TONE_ANALYZER_VERSION) ? (process.env.TONE_ANALYZER_VERSION) : "2017-09-21",
        apiKey: (process.env.TONE_ANALYZER_APIKEY) ? (process.env.TONE_ANALYZER_APIKEY) : '',
        URL: (process.env.TONE_ANALYZER_URL) ? (process.env.TONE_ANALYZER_URL) :  '',
    },
    NaturalLanguageUnderstandingConfig: {
        version: (process.env.NATURAL_LANGUAGE_UNDERSTANDING_VERSION) ? (process.env.NATURAL_LANGUAGE_UNDERSTANDING_VERSION) : "2019-07-12",
        apiKey: (process.env.NATURAL_LANGUAGE_UNDERSTANDING_APIKEY) ? (process.env.NATURAL_LANGUAGE_UNDERSTANDING_APIKEY) : '',
        URL: (process.env.NATURAL_LANGUAGE_UNDERSTANDING_URL) ? (process.env.NATURAL_LANGUAGE_UNDERSTANDING_URL) : '',
    },
    PersonalityInsightsConfig: {
        version: (process.env.PERSONALITY_INSIGHTS_VERSION) ? (process.env.PERSONALITY_INSIGHTS_VERSION) : "2017-10-13",
        apiKey: (process.env.PERSONALITY_INSIGHTS_URL) ? (process.env.PERSONALITY_INSIGHTS_URL) : '',
        URL: (process.env.PERSONALITY_INSIGHTS_APIKEY) ? (process.env.PERSONALITY_INSIGHTS_APIKEY) : '',
    },
    VisualRecognitionConfig: {
        version: (process.env.VISUAL_RECOGNITION_VERSION) ? (process.env.VISUAL_RECOGNITION_VERSION) : "2019-02-11",
        apiKey: (process.env.VISUAL_RECOGNITION_APIKEY) ? (process.env.VISUAL_RECOGNITION_APIKEY) : '',
        URL: (process.env.VISUAL_RECOGNITION_URL) ? (process.env.VISUAL_RECOGNITION_URL) : '',
    }
}