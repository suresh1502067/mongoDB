const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const insertRouter = require('./services/insert-route')

// const Router = require('./services/route')
const port = 3002;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', insertRouter);

//Set up default mongoose connection
var mongoDB = 'mongodb+srv://admin:admin@cluster0.vpbzd.mongodb.net/userDb?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {
  useNewUrlParser: true, useUnifiedTopology: true
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});

//route controller modal