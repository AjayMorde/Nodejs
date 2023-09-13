
const http = require('http');

const server = http.createServer((req, res) => {
 
  res.end('Ajay Morde');
});

server.listen(4000);