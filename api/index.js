const express = require('express');
const app =express();
const bcrypt = require('bcryptjs')
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const UserModel = require('./models/User');
require('dotenv').config();

const bcryptString = bcrypt.genSaltSync(10);

app.use(express.json());
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173',
}));

mongoose.connect(process.env.MONGO_URL);

app.get('/test',(req,res) =>{
    res.json('test ok');
});

app.post('/register', async(req,res)=>{
    const {name, email, password} = req.body;

    const userRes = await UserModel.create({
        name,
        email,
        password: bcrypt.hashSync(password, bcryptString),
    });

    res.json(userRes);
});

app.listen(4000);