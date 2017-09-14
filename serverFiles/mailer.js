const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'madhavbahl20@gmail.com',
    pass: '*********'
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

  var mailOptions = {
    from: 'Apple Developers Group',
    to: userInfo.email,
    subject: 'Thanks For Attending UniDev',
    text: send
  };

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
