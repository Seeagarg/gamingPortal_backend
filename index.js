const express = require('express')
const apiRouter = require('./Routes/api')
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 4001;


app.use(cors());

app.use(bodyParser.json());
app.use('/api',apiRouter)


// app.get('/',(req,res)=>{
//     res.send('Hello World!!')
// })



app.listen(port,(req,res)=>{
    console.log(`listening on port ${port}`)
})