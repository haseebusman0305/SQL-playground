const express = require('express');
const connectDB = require('./connectDB');
const app = express();
import dotenv from 'dotenv';
dotenv.config();

app.use(connectDB);
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Backend is running');
  });
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 