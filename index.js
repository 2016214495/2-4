var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('lalala\n');
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');

var fs = require("fs");
try {
    var data = fs.readFileSync('lalala.txt');
    data = data.toString('utf-8');
    console.log(data);
} catch(e) {
    console.log(e);
}

fs.readFile('lalala.txt', 'utf-8', function(error, file) {
    if (error) {
        console.log(error);
    }
    console.log('finesh');
})

var data = 'You say that you love rain,but you open your umbrella when it rains.';
fs.writeFile('lalala.txt', data, function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log('success');
    }
})