/* jshint esversion: 6*/
var express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    Add_Routes = require('./Routes/Add'),
    Find_Routes = require('./Routes/Find');

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended : false
}));

app.use('/find', Find_Routes);
app.use('/create', Add_Routes);

const port = 8081;

app.listen(port, () => {
    console.log('[LOGGER] There are ' + port + ' White Walkers on their way! Listen up!');
});
