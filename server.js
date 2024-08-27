const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Express');
    res.status(200);
    res.end();
});
app.get('/login', (req, res) => {
    res.json({ msg: 'Welcome to Login Page' });
    res.end();
});
app.post('/login', (req, res) => {// ----------------------------------------------- lec_2

    const express = require('express');
    const app = express();
    // const data = require('./friend.json');
    const fs = require('fs');
    const data = fs.readFilesync('./friend.json', 'utf-8');
    // console.log(data);
    
    // POST, GET, PUT, PATCH, DELETE
    Server.get("/", (req,res)=>{
        res.write('Welcome to Express Server');
        res.end();
    })
    
    // Server.get("/", (req,res)=>{
    //     res.write('GET Method - 1');
    //     res.end();
    // })
    
    Server.post("/", (req,res)=>{
        // res.write('Welcome to Post Method');
        res.send('<h1>Send Method</h1>');
    })
    
    server.put("/", (req,res)=>{
        res.json({message: 'Hello'});
    })
    
    server.patch("/", (res,req)=>{
        res.status(400);
        res.json({message:'Hello'})
    })
    
    server.get("/user", (req,res)=>{
        res.json(json.parse(data));
    })
    
    serever.get("/login", (req,res)=>{
        res.write('Welcome to Login Page');
        res.end();
    })
    
    server.listen(2304, ()=>{
        console.log('Server Start at http://localhost:2304');   
    })
    
    res.send('Welcome to Login Post method');
    res.end();
});
app.listen(2304, () => {
    console.log('Server is connected at http://localhost:2304');
});