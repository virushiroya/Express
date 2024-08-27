// const users = require('../friend.json');
const User = require("../model/user.model")

exports.addNewUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
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
}

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
}

// exports.replaceUsers = (req, res) => {
//     let id = +req.params.id;
//     let userIndex = users.findIndex((user) => user.id === id)
//     users.splice(userIndex, 1, req.body);
//     res.json({ message: "User Replaced Success" });
// }

// exports.updateUsers = (req, res) => {
//     let id = +req.params.id;
//     let userIndex = users.findIndex((user) => user.id === id)
//     users.splice(userIndex, 1, req.body);
//     res.json({ message: "User Replaced Success" });
// }

// exports.deleteUsers = (req, res) => {
//     let id = +req.params.id;
//     let userIndex = users.findIndex((item) => item.id === id)
//     users.splice(userIndex, 1);
//     res.json({ message: "User delete Success" });
// }