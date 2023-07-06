const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/lite',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
    })
  );
  app.use(
    '/api/v1/bots',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware('/socket.io', {
      target: 'ws://localhost:3001',
      ws: true
    })
  );
  app.use(
    '/api/v1',
    createProxyMiddleware({
      target: 'http://luna-api',
      changeOrigin: true,
    })
  );
};
