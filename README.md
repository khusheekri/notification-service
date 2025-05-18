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
##### API Testing with Postman

## 📫 1. Send Notification (POST)
![image](https://github.com/khusheekri/notification-service/blob/9bc52f4a30d8451ece5ab81e25036c50512e5abb/assets/post.png)

## 🔍 2. Fetch User Notifications (GET)
![image](https://github.com/khusheekri/notification-service/blob/51174958ab4cfb588fe3e604bea1e8edafa60e24/assets/get.png)

## 🧠 3. Worker Processing Log
![image](https://github.com/khusheekri/notification-service/blob/9bc52f4a30d8451ece5ab81e25036c50512e5abb/assets/working.png)
### Test API
```bash
curl -X POST http://localhost:3000/notifications \
-H "Content-Type: application/json" \
-d '{"userId": "user123", "type": "email", "message": "Hello"}'

```







