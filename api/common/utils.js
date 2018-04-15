const https = require('https');

exports.getLatestPrice = function (symbol, callback) {
    https.get('https://api.binance.com/api/v3/ticker/price?symbol=' + symbol, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            let jsonData = JSON.parse(data);
            // console.log('receive full data');
            // console.log(data);
            // console.log(jsonData);
            callback(jsonData);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
};
