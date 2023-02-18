const express = require('express');
const { Storage } = require('@google-cloud/storage');
const storage = new Storage();
const bucket = storage.bucket('my-bucket');
const { proxyRequest } = require('./handler');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

const ADMIN_URL = 'https://admin.stage.meepcloud.com/';

app.use(express.json());
// Proxy endpoints
app.use(
  '/sign-up',
  createProxyMiddleware({
    target: ADMIN_URL,
    changeOrigin: true,
    // pathRewrite: {
    //   [`^/sign-up`]: '',
    // },
  })
);

app.get('*', (req, res) => {
  // const file = bucket.file(`pages${req.url}.html`);
  // file.exists((err, exists) => {
  //   if (err) {
  //     console.error(err);
  //     return proxyRequest(req, res);
  //   }
  //   if (exists) {
  //     file.createReadStream().pipe(res);
  //     return;
  //   }
  //   proxyRequest(req, res);
  // });
  proxyRequest(req, res);
  // console.log(res, 'res');
});

app.listen(8000, () => {
  console.log('Express server listening on http://localhost:8000');
});

// v2.
// const http = require('http');

// const server = http.createServer((req, res) => {
//   // 代理伺服器轉發請求到目標伺服器
//   proxyRequest(req, res);
// });

// server.listen(8000, () => {
//   console.log('Reverse proxy is running on port 8000');
// });
