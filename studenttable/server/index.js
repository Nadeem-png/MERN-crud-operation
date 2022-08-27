const express = require("express");
const mongoose = require("mongoose")
// const { dbConnection } = require("./connection/db");
require("dotenv").config();

const studentRoutes = require('./routes/students')

//express app
const app = express();

app.use(express.json());

app.use((req, res, next)=>{
console.log(req.path, req.method);
next();
});

//routes
app.use("/api/students", studentRoutes);

//conncet to db
// dbConnection;

mongoose
    .connect(process.env.MONGO_URI)
    .then ( () => { 
        console.log("connected to DB.");});

        const {PORT} = process.env;
        app.listen (PORT, ()=>{
            console.log("Listening on port", PORT);
        });