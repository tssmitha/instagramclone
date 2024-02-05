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
const multer = require('multer');
const path = require('path');

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

const crypto = require('crypto');

// Generate a random secret key
const secretKey = crypto.randomBytes(32).toString('hex');

// Use the generated secret key in your session middleware configuration
app.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: true
}));

// Now, the secretKey variable contains the randomly generated secret key
console.log('Generated Secret Key:', secretKey);

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

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Save uploaded files to the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Generate unique filenames
  }
});

// Initialize multer
const upload = multer({ storage: storage });

// Function to insert reel metadata into the database
const insertReel = async (userId, videoUrl, caption) => {
  try {
    const insertQuery = 'INSERT INTO reels (userId, videoUrl, caption) VALUES (?, ?, ?)';
    await db.query(insertQuery, [userId, videoUrl, caption]);
    console.log('Reel metadata inserted successfully');
    return true; // Return true indicating successful insertion
  } catch (error) {
    console.error('Error inserting reel metadata:', error);
    return false; // Return false indicating insertion failure
  }
};

// API endpoint for uploading a new reel
// API endpoint for uploading a new reel
app.post('/reels', upload.single('file'), async (req, res) => {
  const { caption } = req.body;
  console.log('Caption:', caption);
  const videoUrl = req.file ? path.join('uploads', req.file.filename) : null;
  console.log('videoUrl:', videoUrl);
  //const safeCaption = caption || ''; // Default to an empty string if caption is undefined

    // Check if videoUrl is undefined and provide a default value if necessary
    //const safeVideoUrl = videoUrl || null; // Default to null if videoUrl is undefined


  // Fetch userId from the users table based on some identifier (e.g., username or email) associated with the logged-in user
  // const { username } = req.session; // Assuming you store the username in the session upon login
  // console.log(username,"smitha");
  const userID = 1;
    
  try {
     const dummyuserId = "17afb904-77de-491d-8148-1f61e23d2b8b";
     /*const { username } = req.session;

    // Query the database to retrieve the userId based on the username
    const selectUserQuery = 'SELECT userId FROM users WHERE username = ?';
    const [userRow] = await db.execute(selectUserQuery, [username]);

    // Extract the userId from the query result
    const userId = userRow[0].userId;*/
    // Insert the reel into the database
    const insertQuery = 'INSERT INTO reels (userId, VideoUrl, Caption) VALUES (?, ?, ?)';
     // Log the insert query and parameters
     console.log('Insert Query:', insertQuery);
     console.log('Parameters:', [dummyuserId, videoUrl, caption]);

    await db.execute(insertQuery, [dummyuserId, videoUrl, caption]);
    res.status(201).json({ success: true, message: 'Reel uploaded successfully' });
  } catch (error) {
    console.error('Error inserting reel metadata:', error);
    res.status(500).json({ success: false, message: 'Error uploading reel' });
  }
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Endpoint to fetch reels
// app.get('/reels', async (req, res) => {
//   try {
//     // Query the reels table to fetch all reels data
//     const selectQuery = 'SELECT * FROM reels';
//     const [reelsRows] = await db.execute(selectQuery);

//     // Send the fetched reels data as a JSON response
//     res.json(reelsRows);
//   } catch (error) {
//     console.error('Error fetching reels:', error);
//     res.status(500).json({ message: 'Error fetching reels' });
//   }
// });
// Endpoint to fetch reels
// app.get('/reels', async (req, res) => {
//   try {
//     // Query the reels table to fetch reels data with user information
//     const selectQuery = 'SELECT reels.id, reels.user_id, reels.videoUrl, reels.caption, reels.createdAt, users.username FROM reels JOIN users ON reels.user_id = users.id';
//     const [reelsRows] = await db.execute(selectQuery);

//     // Send the fetched reels data as a JSON response
//     res.json(reelsRows);
//   } catch (error) {
//     console.error('Error fetching reels:', error);
//     res.status(500).json({ message: 'Error fetching reels' });
//   }
// });

app.get('/reels', async (req, res) => {
  try {
    // Query the reels table to fetch reels data with user information
    const selectQuery = `
      SELECT reels.id, reels.user_id, reels.videoUrl, reels.caption, reels.createdAt, users.username 
      FROM reels 
      JOIN users ON reels.user_id = users.id
    `;
    const [reelsRows] = await db.execute(selectQuery);

    // Send the fetched reels data as a JSON response
    res.json(reelsRows);
  } catch (error) {
    console.error('Error fetching reels:', error);
    res.status(500).json({ message: 'Error fetching reels' });
  }
});

