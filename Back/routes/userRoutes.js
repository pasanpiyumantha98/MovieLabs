import { Router } from "express";
import { connectDB } from "../config/db.js";



const router = Router();

const db = await connectDB();

router.post('/login', async(req,res) =>{


    const uname = req.body.Username;
    const pass = req.body.Password;

    const user = await db.collection('Users').findOne({Username:uname,Password:pass})

    if(user)
    {
 res.send(user);
    } else
    {
      res.send(null);   
    }

});

router.post('/signup', async(req,res) =>{

    const uname = req.body.Username;
    const email = req.body.Email;
    const pass = req.body.Password;

    const db = await connectDB();

    const userByUsername = await db.collection('Users').findOne({Username:uname})

    const userByEmail = await db.collection('Users').findOne({Email:email})

    await db.collection('Users').insertOne({

      Username: uname,
      Email: email,
      Password: pass,

    })

 if(userByUsername)
    {
 res.send('Username');
    } else if (userByEmail)
    {  
 res.send('Email');
    } else {
res.send('ok')    ;    
    }

});

export default router;