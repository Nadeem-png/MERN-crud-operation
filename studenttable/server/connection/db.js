const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express ();

//const {MONGO_URI} = process.env;
const dbConnection = mongoose
    .connect(process.env.MONGO_URI)
    .then (()=>{
        //const {PORT} = processs.env;
        app.listen(process.env.PORT, ()=>{
            console.log("Connect to DB and Listening on Port", PORT);
        });
    })

    .catch((error)=>{
        console.log(error);
    })

    module.exports = dbConnection;