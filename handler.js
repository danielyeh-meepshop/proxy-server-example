const request = require('request');
const httpProxy = require('http-proxy');

const publishMessage = require('./publish');

const proxy = httpProxy.createProxyServer();

const proxyRequest = (req, res) => {
  // 網址要代理的目標伺服器
  const target = 'http://localhost:8888';

  console.log('start');
  proxy.web(req, res, { target });

  res.on('finish', function (e, data) {
    publishMessage({
      url: req.headers.referer,
    });
    console.log('finished');
  });
};

module.exports = { proxyRequest };
