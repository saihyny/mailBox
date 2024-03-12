const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const emailjs = require('@emailjs/browser'); 

exports.sendEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => { 
    const { to, subject, body } = req.body;

    // Option 1:  If using an API Key or such 
    emailjs.init('9IncZkxf9Gt_p0Ewv'); 


    // Construct the email parameters
    const emailParams = {
       from_name: 'Your Name or Company', // Optional
       to_email: to,
       subject, 
       message: body, // Assuming your HTML content is in the 'body' field 
    };

    // Send the email
    emailjs.send("service_tn4beqr", "template_8tz2wzi", emailParams)
      .then(() => {
        res.status(200).send('Email sent successfully');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
      });
  });
});