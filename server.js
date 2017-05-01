var express = require('express');
var fs = require('fs');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;


// Read Serverlist.XML file and Sername

var fs = require('fs'),
    parseString = require('xml2js').parseString;


fs.readFile('serverlist.xml', 'utf-8', function(err, data) {
    if (err) console.log(err);
    // we log out the readFile results
    console.log(data);
    // we then pass the data to our method here
    parseString(data, function(err, result) {
        if (err) console.log(err);

        var json = result;
        // here we log the results of our xml string conversion
        var serverList = json.serverlist.server;
        console.log('Serverlist: ', JSON.stringify(serverList) + '\n\n');

        // get the serverNames from json and save as array
        var serverNames = serverList.map((server) => {
            return server.serverName[0];
        });
        console.log('Servernames: ', serverNames );
    });
});

//Editing new JSON object


fs.readFile('serverlist.xml', 'utf-8', function(err, data) {
    if (err) console.log(err);
    // we log out the readFile results
    console.log(data);
    // we then pass the data to our method here
    parseString(data, function(err, result) {
        if (err) console.log(err);

        // save our json to a variable
        var json = result;

        // here we log the results of our xml string conversion
        var serverList = json.serverlist.server;
        console.log('Serverlist: ', JSON.stringify(serverList) + '\n\n');

        // get the serverNames from json and save as array
        var serverNames = serverList.map((server) => {
            return server.serverName[0];
        });
        console.log('Servernames: ', serverNames);

        serverList.push({"serverName":["Lokal2"],"serverAdress":["http://localhost2"],"port":["18083"]});
        console.log(serverList);

    });
});


//Remove Server from Serverlist



fs.readFile('serverlist.xml', 'utf-8', function(err, data) {
    if (err) console.log(err);
    // we log out the readFile results
    console.log(data);
    // we then pass the data to our method here
    parseString(data, function(err, result) {
        if (err) console.log(err);

        // save our json to a variable
        var json = result;

        // here we log the results of our xml string conversion
        var serverList = json.serverlist.server;
        console.log('Serverlist: ', JSON.stringify(serverList) + '\n\n');

        // get the serverNames from json and save as array
        var serverNames = serverList.map((server) => {
            return server.serverName[0];
        });
        console.log('Servernames: ', serverNames);
        //Add node in XML file
        serverList.push({"serverName":["Lokal2"],"serverAdress":["http://localhost2"],"port":["18083"]});
        console.log(serverList);

        //Delete node in XML file
        var serverList2 = serverList.filter(server =>
          server.serverName[0] != "Lokal"
        );
        console.log(JSON.stringify(serverList2));

    });
});







//common pattern for express middleware => let us do something with every request
//req => index.html or bundle.js
//res => what cant sent back
//next => move on e.g call when middles is done
app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log('Express server is up on port ' + PORT);
});
