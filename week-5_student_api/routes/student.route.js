const express = require('express');
const router = express.Router();

const student_controller = require('../controllers/student.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', student_controller.test);
router.post('/addstudent',student_controller.Add_Student);
router.get('/:id',student_controller.detail_student);
router.put('/:id/update', student_controller.update_Student_information);
router.delete('/:id/remove', student_controller.remove_Student);


module.exports = router;
