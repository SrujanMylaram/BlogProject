const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json({limit:'10mb'}))
app.use(express.urlencoded({extended:true,limit:'10mb'}))

app.get('/',(req,res)=>{
    res.status(200).send('hello, srujan');
})

app.post('/user/login',(req,res)=>{
    const {email,password} = req.body;
    console.log(req.body);
    res.status(200).json("details recevied")
   
})

app.post('/user/registration',(req,res)=>{
    const {name,email,phone,password} = req.body;
    console.log(req.body);
    if(err){
        res.status(500).send(err);
    }
    res.status(200).send({message:'Resitration successfull'})
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})