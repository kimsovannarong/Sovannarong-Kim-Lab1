const express = require('express'); 
const app = express(); 
app.get('/', (req, res) => { 
res.send('Hello, CI/CD!'); 
// testing pull request; 
}); 
module.exports = app;