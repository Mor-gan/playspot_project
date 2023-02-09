var express = require("express");
var http = require("http");
var app = express();

var incomingRequest = require("request");
/*Using code from 
https://github.com/ccoenraets/cors-proxy/blob/master/server.js
*/
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});

app.listen(8100, '0.0.0.0');
console.log("Listening on 0.0.0.0: 8100");

app.get('/api', function(req, res) {
    var config = {
        url: 'https://www.globalcyclingnetwork.com/api/videos',
        method: 'GET'
    }

    var newRequest = incomingRequest(config);
    req.pipe(newRequest)
    .on('response', function(response) {
        delete response.headers['access-control-allow-origin']
    })
    .pipe(res);
});