const amqp = require('amqplib');

let channel, connection;
const QUEUE_NAME = 'notifications';

async function connectQueue() {
  connection = await amqp.connect('amqp://localhost');
  channel = await connection.createChannel();
  await channel.assertQueue(QUEUE_NAME);
}

async function sendToQueue(message) {
  await channel.sendToQueue(QUEUE_NAME, Buffer.from(JSON.stringify(message)));
}

module.exports = { connectQueue, sendToQueue, QUEUE_NAME };