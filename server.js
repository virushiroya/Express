// ---------------------------------------------------- lec_4

const express = require('express');
const server = express(); //create server
const morgan = require('morgan');

server.use(morgan('dev'));

const loggerFun = (req, res, next) => {
    console.log(req.ip, req.url, req.method);
    next();    
}

server.use(loggerFun);

// in-built middleware
server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use("/hello",express.static('public'))

const Middleware = (req, res, next) => {
    console.log(req.body);
    next();
    // console.log(req.query);
    // if(req.query.age >= "19")
    // {
    //     console.log('Success');
    //     next();        
    // }
    // else
    // {
    //     res.json({message: "Sorry....."})
    // }
    
}

// server.use(Middleware); //application

// // POST, GET, PUT, PATCH, DELETE
Server.get("/", (req,res)=>{
    res.write('Welcome to Express Server');
    res.end();
})

serever.get("/login", Middleware, (req,res)=>{
    res.write('Welcome to Login Page');
    res.end();
})

Server.post("/", (req,res)=>{
    // res.write('Welcome to Post Method');
    res.send('<h1>Send Method</h1>');
})

server.listen(2304, () => {
    console.log('server start at http://localhost:2304');
})
