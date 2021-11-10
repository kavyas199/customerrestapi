const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
//import routes
const customerRoute= require('./routes/customers');
app.use('/customers',customerRoute);

//Routes//listening
mongoose.connect("mongodb://localhost:27017/kavyadb",()=>{
    console.log("Connected to DB");
});

app.listen(8080);