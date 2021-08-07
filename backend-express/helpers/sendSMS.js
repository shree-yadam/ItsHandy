const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const outgoingPhoneNumber = process.env.TWILIO_OUTGOING_PHONENUMBER;
const client = require('twilio')(accountSid, authToken);

const sendSMS = function(toNumber, message) {
  console.log("sendSMS: ", toNumber, message);
  return client.messages
    .create({
       body: message,
       from: outgoingPhoneNumber,
       to: toNumber
     });
}
exports.sendSMS = sendSMS;