// nodejs and db connection
const mongoose = require('mongoose');

require("dotenv").config();

// func to connect nodejs application and database
const dbConnection = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB ka connection is succesful"))
    .catch( (error) => {
        console.log("Issue in DB connection");
        console.error(error.message);
        process.exit(1);
    } );
}

module.exports = dbConnection;




