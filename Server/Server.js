const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'smitha@TS13',
  database: 'instagram_clone',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});
  

// Register endpoint
app.post('/signup', (req, res) => {
  const { username, email, password, gender, mobileNumber } = req.body;

  // Generate a unique userId using uuidv4()
  const userId = uuidv4();

  const insertQuery = 'INSERT INTO users (userId, username, email, password, gender, mobileNumber) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(insertQuery, [userId, username, email, password, gender, mobileNumber], (err, result) => {
    if (err) {
      console.error('Error registering user:', err);
      res.status(500).send('Error registering user');
    } else {
      res.status(200).send('User registered successfully');
    }
  });
});

// Other routes and server logic go here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
