// Db connect

import dotenv from "dotenv"
import express from "express"
import connectDB from "./db/index.js";
// require('dotenv').config({path: './env'})

dotenv.config({path: './env'})
connectDB()
.then(()=>{
    app.on("error", (error)=>{
        console.log(`Error`, error);
        throw error
    })
    app.listen(process.env.PORT ||  8000, ()=>{
        console.log(`Server connected success on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("Mongo db connection failed !!! ", error);
})


















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
