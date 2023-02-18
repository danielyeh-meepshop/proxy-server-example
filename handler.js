const request = require('request');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();

const fsPromises = require('fs/promises');
const path = require('path');

const proxyRequest = (req, res) => {
  //v1
  //   req
  //     .pipe(
  //       request({
  //         uri: `http://localhost:8888${req.url}`,
  //       })
  //     )
  //     .pipe(res);

  // v2
  // 網址要代理的目標伺服器
  const target = 'http://localhost:8888';

  var option = {
    target: target,
    selfHandleResponse: true,
  };
  // proxy.on('proxyRes', function (proxyRes, req, res) {
  //   var body = [];
  //   proxyRes.on('data', function (chunk) {
  //     body.push(chunk);
  //   });
  //   proxyRes.on('end', function () {
  //     body = Buffer.concat(body).toString('utf8');
  //     console.log('res from proxied server:', JSON.stringify(body));
  //   });
  // });
  proxy.web(req, res, { target });
  //   proxy.on('proxyRes', function (proxyRes, req, res) {
  //     console.log(
  //       'RAW Response from the target',
  //       JSON.stringify(proxyRes.headers, true, 2)
  //     );
  //   });

  //   proxy.on('proxyRes', function (proxyRes, req, res) {
  //     proxyRes.on('data', function (dataBuffer) {
  //       var data = dataBuffer.toString('utf8');
  //       //   console.log('This is the data from target server : ' + data);
  //       fsPromises.writeFile(
  //         path.resolve(__dirname, 'hello.js'),
  //         data,
  //         function (err, data) {
  //           if (err) throw err;
  //           console.log('success');
  //         }
  //       );
  //     });
  //   });
};

module.exports = { proxyRequest };
