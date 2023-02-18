const { PubSub } = require('@google-cloud/pubsub');

const pubsub = new PubSub();
const topicName = 'my-topic';

// Publish
async function publishMessage(data) {
  let dataBuffer;
  if (typeof data === 'string') {
    dataBuffer = Buffer.from(data);
  } else {
    dataBuffer = Buffer.from(JSON.stringify(data));
  }

  const messageId = await pubsub.topic(topicName).publish(dataBuffer);

  console.log(`Message ${messageId} published.`);
}

module.exports = publishMessage;
