const amqp = require('amqplib');
const { QUEUE_NAME } = require('./queue');
const { sendEmail } = require('./senders/email');
const { sendSMS } = require('./senders/sms');

async function startWorker() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  await channel.assertQueue(QUEUE_NAME);

  console.log('Worker listening for messages...');

  channel.consume(QUEUE_NAME, async (msg) => {
    const notification = JSON.parse(msg.content.toString());
    console.log('Processing:', notification);

    try {
      if (notification.type === 'email') await sendEmail(notification);
      else if (notification.type === 'sms') await sendSMS(notification);
      else console.log('Unknown type:', notification.type);
      channel.ack(msg);
    } catch (err) {
      console.error('Error handling notification:', err);
    }
  });
}

startWorker();