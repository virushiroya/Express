const User = require("../model/user.model");
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const fs =  require('fs')

exports.registerUser = async (req, res) => {
    try {
        let imagePath = "";
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        // console.log(user);
        if (user) {
            return res.json({ message: 'User already exist.....' });
        }
        if(req.file){
            console.log(req.file);
            imagePath = req.file.path.replace(/\\/g, "/");            
        }
        let hashPassword = await bcrypt.hash(req.body.password, 10);
        // console.log(hashPassword);
        user = await User.create({ ...req.body, password: hashPassword, profileImage: imagePath });
        res.status(201).json({ user, message: "Register successfully" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.loginUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        // console.log(user);
        if (!user) {
            return res.status(400).json({ message: 'User not found.....' });
        }
        let comparedPassword = await bcrypt.compare(req.body.password, user.password);
        console.log(comparedPassword);      
        if (!comparedPassword) {
            return res.json({ message: "Email or Password does not matched..." })
        }
        let token = await jwt.sign({ userId: user._id}, process.env.JWT_SECRETEKEY);
        res.status(200).json({message: 'Login Successfully....', token});
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getProfile = async (req, res) => {
    try {
        res.json(req.user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.updateProfile = async (req, res) => {
    try {
        let user = req.user;
        user = await User.findIdAndUpdate(
            user._id,
            { $set: req.body },
            { new: true}
        );
        res.status(202).json({ user, message: "User profile update..."})
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

exports.specialUser = async (req, res) => {
    try {
        // let user = {
        //     firstName: 'abc',
        //     lastName: 'xyz',
        //     age: 40,
        //     email: "abc@xyz.com",
        //     mobileNo: "1234567890",
            
        // }
        let user = await User.findOne({ firstname: req.query.name, isDelete: false });
        if(!user){
            return res.render('notfound.ejs');
        }
        res.render('student.hbs',{user});
        // res.render('user.ejs',{user});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Server Error"});
    }
}
