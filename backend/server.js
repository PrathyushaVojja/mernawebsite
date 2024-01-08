require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose') //connect to mongodb atlas (Mernapp)
const withoutRoutes = require('./routes/workouts')

// express app 
const app = express()

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
// app.get('/', (req,res)=>{
//     res.json({msg:"welcome to the app"})
// })
app.use('/api/workouts',withoutRoutes)

// Connect to db
mongoose.connect(process.env.MONGO_URI)  //connect to mongodb atlas (Mernapp) //as it is asyncronus then catch
     .then(() =>{
        app.listen(process.env.PORT, ()=>{
            console.log("Connected to db & listening on port", process.env.PORT)
        
        })
     })
     .catch((err)=>{
        console.log(err)
     })

//listen for request



