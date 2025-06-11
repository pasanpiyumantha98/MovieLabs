import { Router } from "express";
import { connectDB } from "../config/db.js";

const router =Router()

const db = await connectDB();

router.post('/watched', async(req,res) =>{


    const id = String(req.body.MovieId);
    const uname = req.body.Username;
    const release = req.body.Release;
    const title = req.body.Title;
    const poster = req.body.Poster;
   
    const movie = await db.collection('WatchedMovies').findOne({Username:uname,Movie:id})

    if(movie)
    {
        return res.send('NOOK');
    } else  {

    await db.collection('WatchedMovies').insertOne({Username:uname,Movie:id,release_date:release,title:title,poster_path:poster})

    return res.send('OK');
    }



});

router.post('/fav', async(req,res) =>{

    const id = String(req.body.MovieId);
    const uname = req.body.Username;
    const release = req.body.Release;
    const title = req.body.Title;
    const poster = req.body.Poster;

    const movie = await db.collection('FavMovies').findOne({Username:uname,Movie:id})

    if(movie)
    {
       return res.send('nook'); 
    } else {
    
    await db.collection('FavMovies').insertOne({Username:uname,Movie:id,release_date:release,title:title,poster_path:poster})

    return res.send('ok');
    }
});

router.get('/:type/remove/:Username/:MovieId', async(req,res) =>{

    const id = req.params.MovieId;
    const uname = req.params.Username;
    const type = req.params.type

    if(type=="wat"){
    await db.collection('WatchedMovies').deleteOne({Username:uname,Movie:id})
    return res.send('ok');
    } else if(type=="fav"){
    await db.collection('FavMovies').deleteOne({Username:uname,Movie:id})
    return res.send('ok');
    } else  {
         return res.send('nook');
    }

})




router.get('/watchedList/:username', async(req,res) =>{

    const uname = req.params.username
   

    const watched = await db.collection('WatchedMovies').find({Username:uname}).toArray();

    return res.json(watched);



});


router.get('/favList/:username', async(req,res) =>{

    const uname = req.params.username
   

    const watched = await db.collection('FavMovies').find({Username:uname}).toArray();

    return res.json(watched);



});













export default router