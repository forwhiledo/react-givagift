
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://localhost/');

mongoose.connection.on('error', function(err) {
    console.error('Could not connect.  Error:', err);
});

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config= require('./config');


var app = express();

// app.use(express.static('build'));

var jsonParser = bodyParser.json();

app.use(jsonParser);
var passport = require('passport');

var LocalStrategy = require('passport-local').Strategy;

var amazon = require('amazon-product-api');


var client = amazon.createClient({
  awsId: "AKIAIFAXTMOZPQMH7NKA",
  awsSecret: "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",
  awsTag: "yosuke-assignment-20"
});


app.get('/amazon/:index', function(req, res){
          console.log(req.params.index);
  client.itemSearch({
   keywords: req.params.index,
   searchIndex: 'All'
  //  responseGroup: 'ItemAttributes,Offers,Images'
}, function(err, data){
      console.log(data[0].ItemAttributes[0]);
       res.json(data);
 });
});





passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }

       res.json(user);
      return done(null, user);

    });
  }
));

app.use(bodyParser.json());
app.use(express.static('build'));

var User = require('./models/users.js');

app.use(passport.initialize());


app.get('/hidden', passport.authenticate('basic', {session: false}), function(req, res) {

    console.log('sercret message');
    console.log(req.body.username);

    res.json({
          message: 'Luke... I am your father'
    });
});



app.post('/users', function(req, res) {

    if (!req.body) {
        return res.status(400).json({
            message: "No request body"
        });
    }

    if (!('username' in req.body)) {
        return res.status(422).json({
            message: 'Missing field: username'
        });
    }

    var username = req.body.username;

    if (typeof username !== 'string') {
        return res.status(422).json({
            message: 'Incorrect field type: username'
        });
    }

    username = username.trim();

    if (username === '') {
        return res.status(422).json({
            message: 'Incorrect field length: username'
        });
    }

    if (!('password' in req.body)) {
        return res.status(422).json({
            message: 'Missing field: password'
        });
    }

    var password = req.body.password;

    if (typeof password !== 'string') {
        return res.status(422).json({
            message: 'Incorrect field type: password'
        });
    }

    password = password.trim();

    if (password === '') {
        return res.status(422).json({
            message: 'Incorrect field length: password'
        });
    }

      var newUser= new User({

        username:username,
        password:password

      }) ;

        User.createUser(newUser , function(err, user ){
            if(err) throw err;
            console.log(user);
             res.json(user);
        });

});


passport.use(new LocalStrategy(
  function(username, password, done) {

    User.getUserByUsername(username, function(err, user){

        if(err)  throw err;

        if(!user){
          return done(null, false, {message: 'Unknown User'});
        }

          console.log(user);

         User.comparePassword(password, user.password, function(err, res){

            if(err) throw err;

            if(res){
              return done(null, user);

            }  else  {
              return done(null, false, {message:'invalid password'});
            }

        });

         console.log('user logged in!');
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

app.post('/login',
  passport.authenticate('local'),function(req, res){

     res.json(req.user);
  });




app.get('/hidden', function(req, res) {

    console.log('using the path');

});

app.get('/', function(req, res) {

    console.log('using the path');

});



var runServer = function(callback) {
    mongoose.connect(config.DATABASE_URL, function(err) {
        if (err && callback) {
            return callback(err);
        }
        app.listen(config.PORT, function() {
            console.log('Listening on localhost:' + config.PORT);
            if (callback) {
                callback();
            }
        });
    });
};


if (require.main === module) {
    runServer(function(err) {
        if (err) {
            console.error(err);
        }
    });
}
