const express = require('express')
const router= express.Router();


router.get('/', (req,res)=>{
    res.send('get the book')
})

router.post('/',(req,res)=>{
    res.send('add the book')
})

router.put('/',(req,res)=>{
    res.send('update the book')
})
router.delete('/', (req,res)=>{
    res.send('delete the book')
})

module.exports=router;