const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

const mongoDB = 'mongodb://samcochrane:password1@ds149894.mlab.com:49894/edu'

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

app.listen(port);