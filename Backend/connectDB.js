const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});


router.get('/connect', (req, res) => {
  connection.connect(function(err) {
    if (err) {
        res.status(500).send('Error connecting to database');
        return;
        }
    return res.status(200).send('Connected to database');
    });
});

router.get('/disconnect', (req, res) => {
    connection.end(function(err) {
        if (err) {
            res.status(500).send('Error disconnecting from database');
            return;
        }
        return res.status(200).send('Disconnected from database');
        });
    }
);

module.exports = router;