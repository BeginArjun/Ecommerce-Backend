const express=require('express')
const env=require('dotenv').config()

const PORT=process.env.PORT 

const app=express()

app.use(express.json())

const start=async()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on ${PORT}`)
    })
}
start()