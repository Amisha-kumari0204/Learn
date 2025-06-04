//import express from 'express';
//import {path} from 'path';
const express = require('express'); //outdated
const path = require('path'); //import path module to use path.join
const app = express();
const port=3000;
app.use(express.json());//middleware----koi v data kisi v format v fronted se aaye to backend usko json m convert krke read kr sake
app.set('view engine', 'ejs'); //set the view engine to ejs--ejs template engine ka use kr rhe h
app.set('views', path.join(__dirname, 'views'));
app.get('/',(req,res)=>{
    res.render('fronted'); //render the index.ejs file
});
app.get('/1',(req,res)=>{
    res.render('fronted1'); //render the index.ejs file
});
app.listen(port,()=>{
console.log("Hello world1");
});
