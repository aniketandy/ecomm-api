
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const apiRoutes = require('./server/routes'); 
const dbInit = require('./server/utilities/dbInit.js');
const sequalize = dbInit.sequalize;

var corsResolver = function(res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    return res;
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.set('port', (process.env.PORT || 3300));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api',cors(),apiRoutes);

app.listen(app.get('port'), () => {
    console.log('Exceed listening on port ' + app.get('port'));
});
