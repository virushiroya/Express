// const users = require('../friend.json');
const User = require("../model/user.model")

exports.addNewUser = async (req, res) => {
    try 
    {
        const user = await User.create(req.body);
        res.status(201).json({ user, message: "User Added Success" });
    } 
    catch(err) 
    {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// exports.getAllUsers = (req, res) => {
//     res.json(users);
// }

// exports.getSingleUser = (req, res) => {
//     let id = +req.params.id;
//     let iteam = users.find((user) => user.id === id)
//     res.json(iteam);
// }

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