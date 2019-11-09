const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
//const logger = require('./middleware/logger')
const morgan = require('morgan');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
// Lode env variables
dotenv.config({path: './config/config.env'});
//coonect to database
connectDB();
//Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

//Body Parser
app.use(express.json());


// Dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
//Mount Routes
app.use('/api/v1/bootcamps', bootcamps)
app.use(errorHandler);


const PORT = process.env.PORT || 7450;
const server = 
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))

//Handle unhadled promise rejection

process.on('unhandledRejection',(err, promise)=>{
    console.log(`Error: ${err.message}`.red);

    //close server and exit process
    server.close(()=>{
        process.exit(1)
    })
    
})