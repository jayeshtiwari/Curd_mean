const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db');
const cors = require('cors');
var  employeeController  = require('./employeeController/employeeController');

var app = express();
app.use(bodyParser.json());
app.use(cors({origin : 'http://localhost:4200'}))
app.listen(3000, ()=> console.log('Server stared on port 3000'));
app.use('/employee',employeeController);
