import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import messagesRoutes from './routes/messages.js';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
// register exteranl routes
app.use('/messages', messagesRoutes);

app.get('/', (req, res) => {
  res.send('Yay from express');
});

mongoose.connect(process.env.MONGOOSE_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.log('there was an error', err);
  } else {
    console.log('Connection successfull');
  }
});

app.listen(process.env.PORT);
