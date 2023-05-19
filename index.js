// server instantiate
const express = require('express');
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// I need middleware to parse json request body
app.use(express.json());

//import routes for TODO api
const todoRoutes = require("./routes/todos");
//mount the todo API routes
app.use("/api/v1", todoRoutes);


// start server 
app.listen(PORT, () => {
    console.log(`server started successfully on ${PORT}`); 
})

//connect to the database
const dbConnection = require("./config/database");
dbConnection();

// default routes
app.get('/', (req,res) => {
    res.send(`<h1> This is HOMEPAGE baby </h1>`)
})
