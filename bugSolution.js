const http = require('http');

const server = http.createServer(async (req, res) => {
  // Simulate a slow operation asynchronously
  await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});