const express = require('express');
const app=express();
const port=5000;

const userRouter=require('./routers/userRouter');
const cors=require('cors');

app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json());
app.use('/user',userRouter);

app.get('/',(req,res)=>{     
    res.send('Working Fine') 
});


app.get('/add',(req,res)=>{
    res.send('Add request on server')
});

//home
//getall

app.listen(port, ()=>{console.log('server started')});