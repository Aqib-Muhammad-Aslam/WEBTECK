const Student = require('../models/student.model')

     exports.test=(req, res)=>{
     res.send('greetings froms test controllers')
    }
     exports.Add_Student=(req, res)=>{
     let student =new Student({
          student_name:req.body.student_name,
          registration:req.body.registration
     })

     student.save((err)=>{
          if(err){
               return next(err)
          }
          res.send('view student name and id')
     })
    }
    exports.detail_student=(req,res)=>{
         Student.findById(req.params.id,(err,student)=>{
              if(err)return next(err);
              res.send(student)
         })
    }
     exports.remove_Student=(req, res)=>{
          Student.findByIdAndRemove(req.params.id,(err,student)=>{
               if(err) return next(err)
               res.send('DELETE SUCCEFULLY') 
          })
    }
     exports.update_Student_information=(req,res)=>{
          Student.findByIdAndUpdate(req.params.id,{$set:req.body},(err,student)=>{
               if(err) return next(err);
               res.send('Student request updated')
          });

    }


