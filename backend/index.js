const express = require('express');
const app=express();
const port=5000;

const userRouter=require('./routers/userRouter');
const posterRouter=require('./routers/posterRouter');
const designRouter=require('./routers/designRouter');

const cors=require('cors');

app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json());

app.use('/user',userRouter);
app.use('/poster', posterRouter);
app.use('/design', designRouter);


app.get('/',(req,res)=>{     
    res.send('Working Fine') 
});

app.use(express.static('./static'));


app.get('/add',(req,res)=>{
    res.send('Add request on server')
});

//home
//getall

app.listen(port, ()=>{console.log('server started')});