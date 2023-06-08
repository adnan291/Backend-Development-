const http = require('./home');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Welcome home</h1></body>');
    res.write('</html>');
    res.end();
    process.exit;
});

server.listen(4000);

const http = require('./about');

const server1 = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Welcome to About Us page</h1></body>');
    res.write('</html>');
    res.end();
    process.exit;
});

server.listen(4000);

const http = require('./node');

const server2 = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    res.write('</html>');
    res.end();
    process.exit;
});

server.listen(4000);