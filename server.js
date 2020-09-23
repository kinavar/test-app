const { restElement } = require('@babel/types');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/file/:name', (req, res) => {
    const filename = req.params.name;

    res.sendFile(filename, {root: path.join(__dirname, 'static')});
})

app.get('/', (req, res) => {
    res.sendFile('index.html')
});

app.listen(8080);