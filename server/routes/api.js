const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient();
const objectID = require('mongodb').objectID;
const XMLWriter = require('xml-writer');
const fs = require('fs');
const parseString = require('xml2js').parseString;
const xml2js = require('xml2js');

//Datbase connection 
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/mean', (err, db) => {
        if (err) return console.log(err);
        closure(db);
    }); 
};

// Error handling 
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

//Response Handling 
let response = {
    status: 200,
    data: [{name:'Reliance'}],
    message: null
};

router.get('/users', (req, res) => {
    // connection((db) => {
    //     db.collection('users').find().toArray().then((users) => {
    //         response.data = users;
    //         req.json(response);
    //     }).catch((err) => {
    //         sendError(err, res);
    //     })
    // });
    res.send(response);
});

router.get('/createXml', (req, res) => {
    xw = new XMLWriter;
    xw.startDocument();
    xw.startElement('root');
    xw.writeAttribute('foo', 'value');
    xw.text('Some content');
    xw.endDocument();
    console.log(xw.toString());
    res.sendStatus(200);
});

router.get('/updateXml', (req, res) => {

    fs.readFile('test.xml', 'utf-8', function (err, data){
        if(err) console.log(err); 
        console.log(data);
        parseString(data, function(err, result){
            if(err) console.log(err);
            console.log(result); 
            let json = result;
            if(json.root.graph[0].node[0].name == 'Node1')
            json.root.graph[0].node[0].weight = "100";
            var builder = new xml2js.Builder();
            var xml = builder.buildObject(json);
            fs.writeFile('test.xml', xml, function(err, data){
                if (err) console.log(err);
                console.log("successfully written our update xml to file");
            })
        });
    });
    res.sendStatus(200);
});

module.exports = router;