const express = require('express');
const app = express();
const path = require ('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8000, () => 
console.log('esta ready y flama para usar'));