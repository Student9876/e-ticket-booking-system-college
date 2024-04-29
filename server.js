const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const PDFDocument = require('pdfkit');

const mongoose = require('mongoose');
const Train = require('./database/train');
const User = require('./database/user');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));




mongoose.connect('mongodb://localhost:27017/eticketbooking', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));



app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));



let className = null;
let trainNo = null;
let classPrice = null;
let setPassenger = null;
let setTrain = null;


// Middleware for authentication
const authenticateUser = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
};


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'login.html'));
});

app.get('/dashboard', authenticateUser, async (req, res) => {
  try {
    const trains = await Train.find();
    console.log(trains);
    res.render('dashboard', { trains });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});


app.get('/booking', (req, res) => {
  className = req.query.class;
  trainNo = String(req.query.train_no);
  classPrice = Number(req.query.price.slice(1));
  console.log(className, trainNo, classPrice);
  res.render('booking');
});


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


app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  try {
    const collection = await User.find({ username: username, password: password });
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


app.post('/booking', async (req, res) => {
  const passengers = req.body;
  setPassenger = passengers;

  try {
    const train = await Train.findOne({ train_no: trainNo });
    if (!train) {
      return res.status(404).send('Train not found');
    }
    setTrain = train;
    const totalPassengers = passengers.name.length;
    const totalFee = classPrice * totalPassengers;

    res.render('confirm-booking', { passengers, train, totalPassengers, totalFee, classPrice });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});


app.post('/confirm-booking', (req, res) => {
  const { train_no, total_fee } = req.body;
  console.log(train_no, total_fee, setPassenger);

  // Create a new PDF document
  const doc = new PDFDocument();
  const fileName = 'ticket.pdf';
  res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
  doc.pipe(res);


  doc.fontSize(18).text('Train Details:', { underline: true }).moveDown();

  const trainDetails = setTrain;
  doc.text(`Train Number: ${train_no}`);
  doc.text(`Train Name: ${trainDetails.train_name}`);
  doc.text(`Next Departure: ${trainDetails.weekday_for_departure[0]} at ${trainDetails.departure_time}`);
  doc.text(`Train Path: ${trainDetails.starting_point} - ${trainDetails.ending_point}`);
  doc.moveDown();


  doc.fontSize(18).text('Passenger Details:', { underline: true }).moveDown();
  setPassenger.name.forEach((name, index) => {
    doc.text(`Name: ${name}, Age: ${setPassenger.age[index]}, Phone: ${setPassenger.phone[index]}`).moveDown();
  });

  doc.fontSize(18).text(`Total Fee: ${total_fee}`, { underline: true }).moveDown();

  doc.end();
});





app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
