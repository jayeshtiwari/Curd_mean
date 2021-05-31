const mongoose = require('mongoose');
const employeeSchema = mongoose.Schema({
    name:{type:String},
    position:{type:String},
    office:{type:String},
    salary:{type:String},
    hobby:{type:String}
})
var Employee = mongoose.model('Employee',employeeSchema);
module.exports = { Employee };