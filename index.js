const axios = require('axios');
const CronJob = require('cron').CronJob;
require('dotenv').config()
const Twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilio = new Twilio(accountSid, authToken);

const sendText = () => {
  twilio.messages.create({
    from: process.env.FROM,
    to: process.env.PHONE_NUMBER,
    body: 'HEY ITS CHRIS YOUR HUSBAND AND IM SENDING YOU A TEXT FROM CODE!!!'
  })
  .then(message => {
    console.log('Created message using promises');
    console.log(message.sid);
  })
  .catch(err => {
    console.log(err)
  })
}

sendText()

// const job = new CronJob(
// 	'0 0 8 * * *',
//   sendText,
// 	null,
// 	true,
// 	'America/Chicago'
// );