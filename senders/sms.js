async function sendSMS({ userId, message }) {
    console.log(`Sending SMS to ${userId}: ${message}`);
    // Simulated SMS send logic
  }
  
  module.exports = { sendSMS };
  