const Folder = require('../models/Folder');
const File = require('../models/File');

exports.createFile = async (req, res) => {
    try {
        const { name, type, parent } = req.body;
        const file = await File.create({
            name,
            type,
            parent,
            user: req.user._id
        });
        res.status(200).json({
            success: true,
            file
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

exports.getFiles = async (req, res) => {
    try {
        const { parent } = req.params;
        const files = await File.find({ parent });
        res.status(200).json({
            success: true,
            files
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

exports.getFile = async (req, res) => {
    try {
        const { id } = req.params;
        const file = await File.findById(id);
        res.status(200).json({
            success: true,
            file
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

exports.updateFile = async (req, res) => {
    try {
        const { id } = req.params;
        const { name ,type} = req.body;
        const file = await File.findByIdAndUpdate(id, {name,type}, { new: true });
        res.status(200).json({
            success: true,
            file
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

exports.deleteFile = async (req, res) => {
    try {
        const { id } = req.params;
        const file = await File.findById
        const deletedFile = await File.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            file:deletedFile
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

