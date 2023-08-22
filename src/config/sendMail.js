const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: 'loraine35@ethereal.email',
      pass: 'tUvC5qgHnZ4heS2Na2'
  }
  });

  let info = await transporter.sendMail({
    from: '"Mohit Kumar 👻" <makarya@gmail.com>', // sender address
    to: "mo2002hit@gmail.com", // list of receivers
    subject: "Hello Mohit", // Subject line
    text: "Congratulations, it worked!", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
  // res.send("I am sending mail");
};

module.exports = sendMail;
