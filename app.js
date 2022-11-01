require('dotenv').config()
const express=require('express')
const app=express()
const tasks=require('./routes/tasks')
const connectDB=require('./db/connect')
const notfound=require('./middleware/not-found')
const errorHandlerMiddleware=require('./middleware/error-handler')

// middleware
app.use(express.static('./public'))

app.use(express.json())

app.get('/hello',(req,res)=>{
    res.send('task manager')
})

app.use('/api/v1/tasks',tasks)
//app.use(notfound)
//app.use(errorHandlerMiddleware)
const port=3000

const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log('the server is running'))

    }catch(error){
        console.log(error)
    }
}

start()








