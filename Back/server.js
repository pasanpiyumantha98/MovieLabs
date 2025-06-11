import express from "express";
import { connectDB } from "./config/db.js";
import { MongoClient } from "mongodb";
import userRoutes from './routes/userRoutes.js';
import cors from "cors";  
import movieRoutes from './routes/movieRoutes.js'



const app= express();

app.use(cors());                  // ← enable CORS for *all* origins

app.use(express.json());


app.use('/user', userRoutes);

app.use('/movies', movieRoutes);

app.post('/demoDB',async(req,res)=>{

    const uname = "PasanPiyumantha";
    const email = "pasan@mail.com";
    const pass = "12"

    const db = await connectDB();
      await db.collection('Users').insertOne({
      Username: uname,
      Emaill: email,
      Password: pass,
    
    });

  
    return res.send('OK');


});



app.listen(9000, ()=>{

console.log("App is listening on 9000!")

});
