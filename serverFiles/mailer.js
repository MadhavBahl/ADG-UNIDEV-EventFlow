const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'iosfusionvit@gmail.com',
    pass: 'iOSFusionADG3.0'
  }
});

var sendMail = (userInfo,callback) => {
  var send = `Hi ${userInfo.name}, \n
We recieved your Feedback :),
Thanks for attending our workshop,
We hope you got to learns new things :)
Hope to see you soon.\n
REGARDS,
TEAM ADG
(Apple Developer's Group)`;

  var sendSelf = `Feedback from ${userInfo.name}, \n
${userInfo.feedback}`;


  var mailOptions = {
    from: 'Apple Developers Group',
    to: userInfo.email,
    subject: 'Thanks For Attending UniDev',
    text: send
  };
  var selfMailOptions = {
    from: userInfo.email,
    to: 'iosfusionvit@gmail.com',
    subject: `Feedback from ${userInfo.name}`,
    text: sendSelf
  };

  transporter.sendMail(selfMailOptions,(err,info) => {
    if(err){
      return callback(err);
    } else {
      // return callback(undefined,send);
      console.log(info.response);
    }
  });
  transporter.sendMail(mailOptions,(err,info) => {
    if(err){
      return callback(err);
    } else {
      return callback(undefined,send);
      console.log(info.response);
    }
  });
};

module.exports = {sendMail}
