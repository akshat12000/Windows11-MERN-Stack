const User = require("../models/User")
const bcrypt = require('bcryptjs');

exports.register = async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({success:false,message:"User Already Exists"})
        }
        user = await User.create({name,email,password});
        const token = await user.generateToken();
        const options = {
            expires:new Date(Date.now()+90*24*60*60*1000),
            httpOnly:true
        }
        res.status(201).cookie("token",token,options)
        .json({
            success:true,
            user,
            token
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

exports.login = async (req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({success:false,message:"Please provide email and password"})
        }
        const user = await User.findOne({email}).select("+password");
        if(!user){
            return res.status(400).json({success:false,message:"Invalid Credentials"})
        }
        const isPasswordMatched = await bcrypt.compare(password,user.password)
        if(!isPasswordMatched){
            return res.status(400).json({success:false,message:"Invalid Credentials"})
        }
        const token = await user.generateToken();
        const options = {
            expires:new Date(Date.now()+90*24*60*60*1000),
            httpOnly:true
        }
        res.status(200).cookie("token",token,options)
        .json({
            success:true,
            user,
            token
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

exports.logout = async (req,res)=>{
    try{
        res.cookie("token","none",{
            expires:new Date(Date.now()+10*1000),
            httpOnly:true
        });
        res.status(200).json({
            success:true,
            message:"Logged Out"
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

exports.getUserProfile = async (req,res)=>{
    try{
        const user = await User.findById(req.user.id);
        res.status(200).json({
            success:true,
            user
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

