const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
    student_name: {type: String, required: true, max: 100},	
    registration: {type: Number, required: true}});

    // Export the model
    module.exports = mongoose.model('Student', StudentSchema);
