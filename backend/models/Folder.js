const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    parent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Folder",
        default:"63ce2a33982f772fa46f53da"
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

const Folder = mongoose.model("Folder",folderSchema);

module.exports = Folder;