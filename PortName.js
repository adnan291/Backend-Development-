const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, my name is ChatGPT!');
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
