const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
},
    Name:{
            type:String,
            required:true
    },
    Age:{
        type:Number,
        required:true
},
    Email:{
        type:String,
        required:true,
        
},
    Phone:{
        type:String,
        required:true,
    
},
    Address:{
        type:String,
        required:true
},
    Password:{
        type:String,
        
},

    access:{
        type:String,
        required:true,
        default:"user"

},


     
});

module.exports=mongoose.model("Task", taskSchema);