const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken'); // Import jsonwebtoken
require('dotenv').config(); // Import dotenv to use environment variables

// Express app setup
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/bylaw_Userinfo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Secure key for JWT
const JWT_SECRET = process.env.JWT_SECRET || 'default-secret-key'; // Use an environment variable or a default

// Define Officer schema and model
const officerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Officer = mongoose.model('Officer', officerSchema);

// Login route for GET
app.get('/login', async (req, res) => {
  const { email, password } = req.query;

  console.log('Email:', email);
  console.log('Password:', password);

  if (!email || !password) {
    console.error('Missing email or password');
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const officer = await Officer.findOne({ email });
    if (!officer) {
      console.error('Officer not found:', email);
      return res.status(404).json({ message: 'Officer not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, officer.password);
    if (!isPasswordValid) {
      console.error('Invalid password for officer:', email);
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate a token if login is successful
    const token = jwt.sign({ id: officer._id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Add officer route for POST
app.post('/add-officer', async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const newOfficer = new Officer({
      email: email.toLowerCase(), // Store email in lowercase
      password: hashedPassword,  // Store the hashed password
    });

    await newOfficer.save();
    res.status(201).json({ message: 'Officer added successfully', officer: newOfficer });
  } catch (error) {
    console.error('Error adding officer:', error);
    res.status(500).json({ message: 'Error adding officer', error });
  }
});

// Protected route (example usage of JWT)
app.get('/protected', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.status(200).json({ message: 'Access granted', userId: decoded.id });
  } catch (error) {
    console.error('Invalid token:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
