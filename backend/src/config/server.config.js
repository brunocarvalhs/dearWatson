require('dotenv').config();

module.exports = {
    port: BigInt = (process.env.API_PORT) ? process.env.API_PORT : 3333
}