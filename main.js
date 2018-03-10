const config = require('./config');
const request = require('request');
const crypto = require('crypto');

function signPrivateRequest() {
    let key = config.cexApiKey;
    let nonce = Date.now();
    let signature = crypto.createHmac('sha256', config.cexApiSecret)
        .update(`${nonce}${config.cexUserId}${key}`)
        .digest('hex');

    return JSON.stringify({ key, nonce, signature })

}

const options = {
    baseUrl: 'https://cex.io/api',
    headers: {
        'content-type': 'application/json'
    }
};


request.post({
    headers: options.headers,
    url: `${options.baseUrl}/balance/`,
    body: signPrivateRequest()
}, (err, res, body) => {
    console.log(body)
})
