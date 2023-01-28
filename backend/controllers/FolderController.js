const Folder = require('../models/Folder');
const File = require('../models/File');

exports.createFolder = async (req,res)=>{
    try{
        const {name,parent} = req.body;
        const folder = await Folder.create({
            name,
            parent:parent?parent:process.env.DEFAULT_FOLDER,
            user:req.user._id
        });
        res.status(201).json({
            success:true,
            folder
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

exports.getFolders = async (req,res)=>{
    try{
        const {parentFolder} = req.params;
        const folders = await Folder.find({parent:parentFolder});
        res.status(200).json({
            success:true,
            folders
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

exports.getFolderContent = async (req,res)=>{
    try{
        const {id} = req.params;
        const folder = await Folder.findById(id);
        const folders = await Folder.find({parent :id});
        const files = await File.find({parent :id});
        res.status(200).json({
            success:true,
            id,
            name:folder.name,
            folders,
            files
        });
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

async function getIdsRecursively(parentId) {
    if(!parentId) return;
    const childrenFile = await File.find({parent: parentId});
    for (let i = 0; i < childrenFile.length; i++) {
        await childrenFile[i].deleteOne();
    }
    const childrenFolder = await Folder.find({parent: parentId});
    for (let i = 0; i < childrenFolder.length; i++) {
        await getIdsRecursively(childrenFolder[i]._id);
        await childrenFolder[i].deleteOne();
    }
}

exports.getFolder = async (req,res)=>{
    try{
        const {id} = req.params;
        const folder = await Folder.findById(id);
        res.status(200).json({
            success:true,
            folder
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

exports.updateFolder = async (req,res)=>{
    try{
        const {id} = req.params;
        const {name} = req.body;
        const oldFolder = await Folder.findById(id);
        if(oldFolder.name === name){
            return res.status(200).json({
                success:true,
                folder:oldFolder
            });
        }
        await Folder.findByIdAndUpdate(id,{name},{new:true});
        res.status(200).json({
            success:true,
            folder
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

exports.deleteFolder = async (req,res)=>{
    try{
        const {id} = req.params;
        const folder = await Folder.findById(id);

        // Delete all the files and folders inside the folder
        getIdsRecursively(folder._id);
        // await Folder.deleteMany({_id: {$in: result}});
        // await File.deleteMany({_id: {$in: result}});

        // Delete the folder
        await Folder.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:"Folder deleted successfully"
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}


