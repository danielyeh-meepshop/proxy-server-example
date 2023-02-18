'use strict';
const functions = require('@google-cloud/functions-framework');

// Consumer
functions.cloudEvent('reverseProxyCrawler', (cloudEvent) => {
  (async () => {
    const nowTime = new Date().toISOString();
    logger.info(`Group-Buy-Convert started at ${nowTime}`, cloudEvent);

    // Get 頁面
    const data = atob(cloudEvent.data.message.data);
    console.log('data', data);
  })();
});
