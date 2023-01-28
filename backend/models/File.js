const mongoose = require("mongoose")

const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true,
        enum:["image","video","audio","document","other"],
        default:"other"
    },
    parent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Folder",
        default:"desktop"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const File = mongoose.model("File",fileSchema);

module.exports = File;
