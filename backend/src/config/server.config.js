require('dotenv').config();

module.exports = {
    port: BigInt = (process.env.APP_PORT) ? process.env.APP_PORT : 3333
}