const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "dsamsondeen@gmail.com",
    subject: "Welcome to Task manager",
    text: `Welcome to the app, ${name}`
  });
};
const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "dsamsondeen@gmail.com",
    subject: "We are unhappy to see you go",
    text: `Hello ${name}, We are a bit sad you have to go. kindly specify your reason below`
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
};
