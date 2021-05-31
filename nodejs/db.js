const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/curdDb',(err)=>{
    if(!err){
        console.log("Connection Successfull..")
    }else{
        console.log("Error connecting database" + JSON.stringify(err))
    }
});
module.exports = mongoose;