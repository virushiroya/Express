const users = require('../friend.json');

exports.addNewUser = (req, res) => {
    // console.log(req.body);
    users.push(req.body);
    res.json({ message: "User Added Success" });
}

exports.getAllUsers = (req, res) => {
    res.json(users);
}

exports.getSingleUser = (req, res) => {
    let id = +req.params.id;
    let iteam = users.find((user) => user.id === id)
    res.json(iteam);
}

exports.replaceUsers = (req, res) => {
    let id = +req.params.id;
    let userIndex = users.findIndex((user) => user.id === id)
    users.splice(userIndex, 1, req.body);
    res.json({ message: "User Replaced Success" });
}

exports.updateUsers = (req, res) => {
    let id = +req.params.id;
    let userIndex = users.findIndex((user) => user.id === id)
    users.splice(userIndex, 1, req.body);
    res.json({ message: "User Replaced Success" });
}

exports.deleteUsers = (req, res) => {
    let id = +req.params.id;
    let userIndex = users.findIndex((item) => item.id === id)
    users.splice(userIndex, 1);
    res.json({ message: "User delete Success" });
}