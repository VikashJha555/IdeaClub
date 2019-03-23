const express = require('express');
const app = express();
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const cookieSession = require('cookie-session');
const keys=require('./config/keys');
const passport=require('passport');
const profileRoutes = require('./routes/profile-routes');
var auth = "Log In";
var usern;
var link='/auth';

app.use(express.static("public"));
app.use('/auth',express.static("public"));
app.use('/portal',express.static("public"));

const authCheck = (req,res,next) => {
  if(req.user){
    res.redirect('/portal');
  }
  else {
    next();
  }
};


app.set('view engine','ejs');

app.use(cookieSession({
  maxAge: 10*60*1000,
  keys: [keys.session.cookieKey]
}));

//initialize passportSetup

app.use(passport.initialize());
app.use(passport.session());

//set up routes
app.use('/auth', authRoutes);
app.use('/portal',profileRoutes);

app.get('/',  function(req,res){
  if(req.user){
    auth='Log Out';
    usern=req.user.name;
    usern='Hello, '+usern;
    link='/auth/logout';
  }
  else {
    auth='Log In';
    usern='';
    usern='';
    link='/auth';
  }
  res.render('home',{auth: auth, user:usern, link: link});
});

app.get('/about',  function(req,res){
  if(req.user){
    auth='Log Out';
    usern=req.user.name;
    usern='Hello, '+usern;
    link='/auth/logout';
  }
  else {
    auth='Log In';
    usern='';
    usern='';
    link='/auth';
  }
  res.render('about',{auth: auth, user:usern, link: link});
});

app.get('/contact', function(req,res){
  if(req.user){
    auth='Log Out';
    usern=req.user.name;
    usern='Hello, '+usern;
    link='/auth/logout';
  }
  else {
    auth='Log In';
    usern='';
    usern='';
    link='/auth';
  }
  res.render('contact',{auth: auth, user:usern, link: link});
});

app.get('/domains',  function(req,res){
  if(req.user){
    auth='Log Out';
    usern=req.user.name;
    usern='Hello, '+usern;
    link='/auth/logout';
  }
  else {
    auth='Log In';
    usern='';
    usern='';
    link='/auth';
  }
  res.render('about',{auth: auth, user:usern, link: link});
});

app.get('/resources',  function(req,res){
  if(req.user){
    auth='Log Out';
    usern=req.user.name;
    usern='Hello, '+usern;
    link='/auth/logout';
  }
  else {
    auth='Log In';
    usern='';
    usern='';
    link='/auth';
  }
  res.render('about',{auth: auth, user:usern, link: link});
});

app.listen(process.env.PORT || 3000, () => {
  console.log(process.env.PORT || 3000);
});
