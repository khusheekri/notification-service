const express = require('express');
const bodyParser = require('body-parser');
const { connectQueue, sendToQueue } = require('./queue');

const app = express();
app.use(bodyParser.json());

connectQueue().then(() => console.log('Connected to RabbitMQ'));

app.post('/notifications', async (req, res) => {
  const { userId, type, message } = req.body;
  if (!userId || !type || !message) return res.status(400).send("Missing fields");
  await sendToQueue({ userId, type, message });
  res.send({ status: 'Queued' });
});

app.get('/users/:id/notifications', (req, res) => {
  res.send({ userId: req.params.id, messages: ['Hello from DB'] });
});

app.listen(3000, () => console.log('API server running on port 3000'));