require('dotenv').config();

const SERVICE_ACCOUNT_JSON_FILE_PATH = process.env.SERVICE_ACCOUNT_JSON_FILE_PATH;
const DIALOGFLOW_CX_AGENT_ID = process.env.DIALOGFLOW_CX_AGENT_ID;
const DIALOGFLOW_CX_AGENT_LOCATION = process.env.DIALOGFLOW_CX_AGENT_LOCATION;
const ERROR_MESSAGE = process.env.ERROR_MESSAGE;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const TELEGRAM_API_KEY = process.env.TELEGRAM_API_KEY;

module.exports = {
    SERVICE_ACCOUNT_JSON_FILE_PATH,
    DIALOGFLOW_CX_AGENT_ID,
    DIALOGFLOW_CX_AGENT_LOCATION,
    ERROR_MESSAGE,
    GEMINI_API_KEY,
    TELEGRAM_API_KEY
};
