//connecting backend to database
const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'seea@020203',
    database:'gaming_portal'
});

connection.connect((err)=>{
    if(err){
        console.log('not connected due to ', err);
        return;
    }
    console.log('connected to the db');
})

module.exports = connection;