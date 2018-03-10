require('dotenv').config(); // this loads the defined variables from .env

const config = {
    cexApiKey: process.env.CEX_API_KEY,
    cexApiSecret: process.env.CEX_API_SECRET,
    cexUserId: process.env.CEX_USER_ID
};

module.exports = config;