// Db connect

import dotenv from "dotenv"
import express from "express"
import connectDB from "./db/index.js";
// require('dotenv').config({path: './env'})

dotenv.config({path: './env'})
connectDB()


















// const app = express()
/* ;( async function connectDB(){
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",  (error) => {
            console.log("ERROR: ", error);
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("ERROR: ", error)
        new Error(error)
    }
})()
*/
