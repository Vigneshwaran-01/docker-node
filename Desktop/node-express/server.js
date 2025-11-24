import express from "express"

import pool from "./db.js";



const app =express()



app.get('/', async(req,res)=>{
    const result = await pool.query("SELECT current_database()")

     return res.json({result});
})


app.listen(5001,()=>{
    console.log("node is listen 5001");
    
})