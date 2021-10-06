// importing modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// importing routes
const usersRouter = require('./routes/users');

// configuring dotenv
require('dotenv').config();

// initializing app 
const app = express();
const port = process.env.PORT || 5000;

// adding cors and .json middlewares
app.use(cors());
app.use(express.json());

// database connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongoose database connection established successfully");
}).on('error', function(err){
    console.log(err);
})

// using user routes
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});