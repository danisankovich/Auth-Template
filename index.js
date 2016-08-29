// App Starting Point
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./routes/index');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost:auth/auth');

//APP SETUP
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));

router(app);


//SERVER SETUP
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on Port: ', port);
