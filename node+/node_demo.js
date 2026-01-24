const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json()); // To parse JSON bodies

// Connect to MySQL (change details if needed)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',        // Your MySQL username
    password: '@Ebinbabu2209',        // Your MySQL password
    database: 'mobile'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
});

