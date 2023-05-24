const nodemailer = require("nodemailer");

async function sendEmail(email, message) {
  let emailSentSuccessfully = false;
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "amanmongodb@gmail.com",
      pass: "dkzwgwwxojbytmci",
    },
  });

  var mailOptions = {
    from: "amanmongodb@gmail.com",
    to: `${email}`,
    subject: "From Dog Managenet System",
    html: message,
  };

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      emailSentSuccessfully = true;
    }
  });
  return emailSentSuccessfully;
}

module.exports = { sendEmail };
