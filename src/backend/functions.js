const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const emailjs = require('@emailjs/browser'); 

exports.sendEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => { 
    const { to, subject, body } = req.body;
    const content = JSON.parse(body).content; 
    emailjs.init('9IncZkxf9Gt_p0Ewv'); 


    // Construct the email parameters
    const emailParams = {
       from_name: 'sai sai sai',
       to_email: 'satyasaikiransingle@gmail.com',
       subject:'subject', 
       message: 'content', 
    };

    // Send the email
    emailjs.send("service_tn4beqr", "template_8tz2wzi", emailParams)
      .then(() => {
        res.status(200).send(res.body);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
      });
  });
});