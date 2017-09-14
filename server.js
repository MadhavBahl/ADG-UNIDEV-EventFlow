var express = require('express');
const bodyparser = require('body-parser');
const hbs = require('hbs');

var mailer = require('./serverFiles/mailer');

const port = process.env.PORT || 8080;

var app = express();
app.use(bodyparser());
app.set('view engine','hbs');
app.use(express.static(__dirname + '/views'));

app.get('/',(req,res) => {
  res.render('index.hbs');
});

app.post('/sendFeedback',(req,res) => {
  var userInfo = {
    name: req.body.name,
    email: req.body.email,
    feedback: req.body.feedback
  }

  mailer.sendMail(userInfo,(err,info) => {
    if(err){
      console.log('Unable to send mail',err);
    } else{
      res.redirect('http://adgvit.com/');
    }
  });
  console.log(userInfo);
});

app.listen(port,() => {
  console.log(`Server is up on ${port}`);
});
