// const users = require('../friend.json');
const User = require("../model/user.model")

exports.addNewUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        // console.log(user);
        if (user) {
            return res.status(400).json({ message: 'User already exist.....' });
        }
        user = await User.create(req.body);
        res.status(201).json({ user, message: "User Added Success" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        let users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getSingleUser = async (req, res) => {
    try {
        let user = await User.findOne({firstName: req.query.firstName});
        if(!user){
            res.status(504).json({ message: 'User not found' });
        }
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        let user = await User.findById(req.query.userId);
        // console.log(user);
        if(!user){
            res.status(504).json({ message: 'User not found' });
        }
        // user = await User.updateOne({_id:user._id}, req.body, {new: true});
        // user = await User.findByIdAndUpdate(user._id, {$set: req.body}, {new: true});
        user = await User.findOneAndUpdate({_id:user._id}, req.body, {new: true});
        res.status(200).json({user, message: 'User Update successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        let user = await User.findOne({_id:req.query.userId, isDelete: false});
        // console.log(user);
        if(!user){
            res.status(404).json({ message: 'User not found' });
        }
        user = await User.findByIdAndDelete(user._id);
        res.status(200).json({user, message: 'User Delete successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

