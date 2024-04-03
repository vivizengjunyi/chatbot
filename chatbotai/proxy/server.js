const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server with custom application logic
const proxy = httpProxy.createProxyServer({});

// To handle proxy errors and prevent app crashing
proxy.on('error', function (err, req, res) {
  res.writeHead(500, {
    'Content-Type': 'text/plain',
  });
  console.error(err);
  res.end('Something went wrong. And we are reporting a custom error message.');
});

const server = http.createServer(function (req, res) {
  // Modify the response headers
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');

  // Proxy the request to the target
  proxy.web(req, res, { target: 'http://localhost:3000' });
});

console.log("Listening on port 3001")
server.listen(3001);
