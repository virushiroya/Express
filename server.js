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
app.post('/login', (req, res) => {
    res.send('Welcome to Login Post method');
    res.end();
});
app.listen(2304, () => {
    console.log('Server is connected at http://localhost:2304');
});