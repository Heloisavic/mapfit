var express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');
const bcrypt = require('bcryptjs');



mongoose.Promise = global.Promise;
mongoose.connect(' mongodb://127.0.0.1:27017/mapfit', { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)});



const userRoutes = require('./routes/user.route');
const personalRoutes = require('./routes/personal.route');
var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRoutes)
app.use('/personal', personalRoutes)
app.get('/', function(req, res){
   res.send("Hello World!");
});
app.get('/test', function(req, res){
  res.sendFile(path.join(__dirname, 'frontend/index.html'));
});




app.listen(3000,function(){
    console.log('Listening on port 3000!');
});