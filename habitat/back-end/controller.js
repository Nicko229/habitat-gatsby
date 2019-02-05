const sgMail = require('@sendgrid/mail');
// const authMiddleware = require("../middleware/auth");
// const Form = require('./App')
// import Form from './App'

const emailController = (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: '3223136crow@gmail.com',
    from: `${req.body.email}`,
    subject: `${req.body.subject}`,
    html: `${req.body.message}`,
  };
  sgMail.send(msg)
    .then(() => {
      res.redirect('./');
    }).catch((error) => {
      console.log('error', error);
    });
}

module.exports = emailController;

sendTicketEmail = (req) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  sgMail.setSubstitutionWrappers('{{', '}}');
  const msg = {
    to: '3223136crow@gmail.com',
    from: 'noreply@progressapp.com',
    // title: 'title',
    // text: 'text',
    // html: 'html',

    template_id: 'd-a1c4fa178d01475aa25d4a8a49fba85c',
    "dynamic_template_data": {
      "title": `${req.body.title}`,
      "type": `${req.body.type}`,
      "status": `${req.body.status}`,
      "description": `${req.body.description}`,
      "priority": `${req.body.priority}`,
      "dueDate": `${req.body.dueDate}`,
    },
  }
  console.log('hello')
  return sgMail.send(msg)
}