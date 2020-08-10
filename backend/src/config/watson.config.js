require('dotenv').config();

module.exports = {
    ToneAnalyzerConfig: {
        version: (process.env.TONE_ANALYZER_VERSION) ? (process.env.TONE_ANALYZER_VERSION) : "2017-09-21",
        apiKey: (process.env.TONE_ANALYZER_APIKEY) ? (process.env.TONE_ANALYZER_APIKEY) : '',
        URL: (process.env.TONE_ANALYZER_URL) ? (process.env.TONE_ANALYZER_URL) :  '',
    },
}