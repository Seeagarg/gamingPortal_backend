const express = require('express')
const db = require('../db')

const router = express.Router();

router.get('/games',(req,res)=>{
    db.query('SELECT * FROM games',(err,results)=>{
        if(err){
            console.log('Error in fetching data',err);
            res.status(500).json({error:'INTERNAL SERVER ERROR'})
            return;
        }
        res.json(results); 
    })
})

router.post('/addGame',(req,res)=>{
    const {game_name,img_url,game_url,category} = req.body;
    db.query(`INSERT INTO games (game_name,img_url,game_url,category) VALUES (?,?,?,?)`,[game_name,img_url,game_url,category],(err,result)=>{
        if(err){
            console.log('error in posting data',err);
            res.status(500).json({message:"INTERNAL SERVER ERROR"});
            return;
        }
        console.log('data added',result);
        res.status(201).json({message:"Data Inserted Successfully",data:result})
    })
})

module.exports = router