const express = require('express')
const router = express.Router()

router.use(function timelog(req,res,next){
    console.log('time' ,Date.now())
    next()
})

router.get('/',(req,res)=>{
    res.send('bird home page')
})

router.get('/about',(req,res)=>{
    res.send('about bird')
})

module.exports=router