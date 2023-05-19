

const mongoose = require('mongoose');

//creation of schema
const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        description: {
            type:String,
            required:true,
            maxLength:50,
        },
        createdAt: {
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt: {
            type:Date,
            required:true,
            default:Date.now(),
        }


    }
)
//exporting the model 
module.exports = mongoose.model("Todo", todoSchema);