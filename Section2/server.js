
const express = require('express');
const dotenv = require('dotenv')

// Lode env variables

dotenv.config({path: './config/config.env'});

const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({success:true, msg: 'Show all bootcamps'})
});

app.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({success:true, msg: `Show  bootcamp ${req.params.id}`})
});

app.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({success:true, msg: 'create  bootcamps'})
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({success:true, msg: `update bootcamp ${req.params.id}`})
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({success:true, msg: `delete bootcamp ${req.params.id}`})
});


const PORT = process.env.PORT || 7450;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))