const User = require("../model/user.model");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        // console.log(user);
        if (user) {
            return res.status(400).json({ message: 'User already exist.....' });
        }
        let hashPassword = await bcrypt.hash(req.body.password, 10);
        console.log(hashPassword);        
        user = await User.create({...req.body, password : hashPassword});
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
        if (user) {
            return res.status(400).json({ message: 'User already exist.....' });
        }
        let comparedPassword = await bcrypt.compare(req.body.password, user.password);
        // console.log(comparedPassword);      
        if(!comparedPassword)
            {
                return res.json({message: "Email or Password does not matched..."})
            }  
        res.status(201).json({ user, message: "Login successfully" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

