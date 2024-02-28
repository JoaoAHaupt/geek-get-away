const express = require('express');
const app =express();
const bcrypt = require('bcryptjs')
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const UserModel = require('./models/User');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const bcryptString = bcrypt.genSaltSync(10);
const jwtSecret = 'ptFZ0PTt52ww605N6Bxz7BXvFJz0xZ';

app.use(express.json());
app.use(cookieParser());
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
    try{
        const userRes = await UserModel.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptString),
        });
        res.json(userRes);

    } catch{
        res.status(422).json(e);
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userDoc = await UserModel.findOne({ email });
        if (userDoc) {
            const passOk = bcrypt.compareSync(password, userDoc.password);
            if (passOk) {
                jwt.sign({ email: userDoc.email, id: userDoc._id}, jwtSecret, {}, (err, token) => {
                    if (err) throw err;
                    res.cookie('token', token).json(userDoc);
                });
            } else {
                res.status(422).json({ error: 'Invalid password' }); 
            }
        } else {
            res.status(404).json({ error: 'User not found' }); 
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' }); 
    }
});

app.get('/profile', async(req, res)=>{
    const {token} = req.cookies;

    if(token){
        jwt.verify(token, jwtSecret, {}, async (err, cookieData)=>{
            if(err) throw err;
            const {name, email, _id} = await UserModel.findById(cookieData.id);
            res.json({name, email, _id});
        });
    }else{
        res.json(null);
    }
});

app.post('/logout', (req, res)=>{
    res.cookie('token','').json(true);

});


app.listen(4000);