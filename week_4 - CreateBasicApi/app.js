const express = require('express')
const app = express()
const birds=require('./routemod')
const Rbook=require('./book')

app.use('/birds',birds)

app.use('/books',Rbook);

const server=app.listen(80,()=>{
    console.log('server is runing at localhost')
})
