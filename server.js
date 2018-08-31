const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

//API file for intrecting with MongoDB
const api = require('./server/routes/api');

//Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

//API location 
app.use('/api', api);

//Send all other request to Angular App
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/src/index.html'));
});

//Set port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
