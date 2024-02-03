let http = require('http');
const fs = require('fs');
// reqCount = 0;

module.exports.server =
    http.createServer((req, res) => {
        if (req.url === '/favicon.ico') {
            fs.readFile('./favicon.ico', (err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.end('Not Found');
                } else {
                    res.writeHead(200, { 'Content-Type': 'image/x-icon' });
                    res.end(data);
                }
            });
        } else {
            res.end();
        }
    }).listen(port);
