// server.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const mongoose = require('mongoose');
const Train = require('./database/train');
const User = require('./database/user');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));




mongoose.connect('mongodb://localhost:27017/eticketbooking', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));



app.use(session({
  secret: 'secret', // Change this to a more secure secret
  resave: true,
  saveUninitialized: true
}));



// Middleware for authentication
const authenticateUser = (req, res, next) => {
  if (req.session && req.session.user) {
    // User is authenticated
    next();
  } else {
    // User is not authenticated, redirect to login page
    res.redirect('/login');
  }
};


app.get('/', (req, res) => {
  // Serve the homepage (index.html)
  res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
});

app.get('/login', (req, res) => {
  // Serve the login page (login.html)
  res.sendFile(path.join(__dirname, 'public', 'html', 'login.html'));
});

app.get('/dashboard', authenticateUser, async (req, res) => {
  try {
    // Fetch all trains from the database
    const trains = await Train.find();
    // Render the Dashboard page with the fetched trains
    res.render('dashboard', { trains });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});


app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  try {
    const collection = await User.find({ username: username, password:password });
    console.log(collection);
    if (collection.length) {
      req.session.user = collection;
      res.redirect('/dashboard');
    } else {
      res.status(401).send('Invalid username or password');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});










// Define routes
app.get('/trains', async (req, res) => {
  try {
    const trains = await Train.find();
    res.json(trains);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.get('/trains/:id', async (req, res) => {
  try {
    const train = await Train.findById(req.params.id);
    if (!train) {
      return res.status(404).json({ message: 'Train not found' });
    }
    res.json(train);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Start server



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
