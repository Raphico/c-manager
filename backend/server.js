require('dotenv').config()
const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

app.post('/api', (req, res) => {
  try {
    client.messages
    .create({
      body: req.body.text, 
      from: '+15626208802', 
      to: req.body.to
    })
    .then(message => {
      res.status(200);
      console.log(message.sid)
    })
  } catch (error) {
    res.status(400);
    console.log(error);
  }
})

if (process.env.NODE_ENV === 'production')
{
  app.use(express.static(path.join(__dirname, '../', 'frontend', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html'));
  })
}
else
{
  app.get('/', (req, res) => {
    res.send('Not in production');
  })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at Port ${PORT}`));
