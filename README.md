# Notification Service

## Description
A basic notification service with REST APIs, a RabbitMQ queue, and a background worker that handles email and SMS delivery.

## Tech Stack
- Node.js
- Express
- RabbitMQ
- Nodemailer

## Features
- `POST /notifications`: Queue a notification (email or SMS).
- `GET /users/:id/notifications`: Fetch user notifications (mocked).
- Worker processes queued messages and delivers them.

## Setup

### Prerequisites
- Node.js
- RabbitMQ (can run via Docker)

### Install Dependencies
```bash
npm install
```

### Run RabbitMQ with Docker
```bash
docker run -d --hostname rabbit --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

### Start API Server
```bash
npm start
```

### Start Worker
```bash
npm run worker
```

### Test API
```bash
curl -X POST http://localhost:3000/notifications \
-H "Content-Type: application/json" \
-d '{"userId": "user123", "type": "email", "message": "Hello"}'
