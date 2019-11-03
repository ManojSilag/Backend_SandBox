const express = require('express');
const dotenv = require('dotenv');
//const logger = require('./middleware/logger')
const morgan = require('morgan');

//Route files
const bootcamps = require('./routes/bootcamps');

// Lode env variables
dotenv.config({path: './config/config.env'});

const app = express();

// Dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//Mount Routes
app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 7450;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))