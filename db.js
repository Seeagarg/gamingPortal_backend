//connecting backend to database
const mysql = require('mysql');
require('dotenv').config();
const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
});

connection.connect((err)=>{
    if(err){
        console.log('not connected due to ', err);
        return;
    }
    console.log('connected to the db');
})

module.exports = connection;