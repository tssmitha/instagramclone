require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const session = require('express-session');
const port = 5000;
const app = express();
const { v4: uuidv4 } = require('uuid');

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(session({
  secret: 'secret_key',
  resave: false,
  saveUninitialized: false
}));


//MySQL Connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'smitha@TS13',
  database: 'instagram_clone',
});

/*const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB
  });
  */

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

  const insertQuery = 'INSERT INTO users (`userId`, `username`, `email`, `password`, `gender`, `mobileNumber`) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(insertQuery, [userId, username, email, password, gender, mobileNumber], (err, result) => {
    if (err) {
      console.error('Error registering user:', err);
      res.status(500).send('Error registering user');
    } else {
      res.status(200).send('User registered successfully');
    }
  });
});

// Login endpoint (handling both GET and POST requests)
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const selectQuery = 'SELECT * FROM users WHERE username = ?';
  db.query(selectQuery, [username], async (err, result) => {
    if (err) {
      console.error('Error fetching user:', err);
      res.status(500).send('Error fetching user');
    } else {
      if (result.length === 0) {
        res.status(401).send('User not found');
      } else {
        const user = result[0];
        if (user.password === password) { // Check plaintext password directly
          req.session.userId = user.userId; // Store userId in session
          res.status(200).send('Login successful');
        } else {
          res.status(401).send('Invalid username or password');
        }
      }
    }
  });
});




app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      res.status(500).send('Error destroying session');
    } else {
      res.status(200).send('Logout successful');
    }
  });
});
// Other routes and server logic go here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
