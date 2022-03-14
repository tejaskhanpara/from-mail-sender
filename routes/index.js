var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");
const { getMaxListeners } = require('../app');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


 
router.post('/send', function(req, res, next) {
  console.log(req.body);

    
   

    var transporter = nodemailer.createTransport({
       service: 'gmail',
      auth: {
        user: 'khanparatejas1998@gmail.com',
        pass: 'raghu9924106241'
      }
    });
    
    var mailOptions = {
      from: 'khanparatejas1998@gmail.com',
      to: req.body.email,
      subject: req.body.subject,
      text: req.body.message
    };
    
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
   });


module.exports = router;
