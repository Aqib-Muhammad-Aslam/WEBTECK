const express = require('express');
const bodyParser = require('body-parser');
const student= require('./routes/student.route');
const Mongoose = require('mongoose');
const app= express();

//mongoose connection
Mongoose.connect("mongodb://localhost/StudentDB",{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log('database conntected succefully')
})
.catch(err=>{
    console.log('cannot connect database', err)
    process.exit()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/student', student)


app.listen(80,()=>{
    console.log('server is up and running on port 80')
    
});
