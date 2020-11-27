const nodemailer = require("nodemailer");

async function sendEmailFunction(toUser,subjectTitle,contentText) {

  let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: "Your email without @gmail.com",
      pass: "Your Password",
    },
  });

  let info = await transporter.sendMail({
    from: `Your Complete Email`, 
    to: toUser,
    subject: subjectTitle,
    text: contentText, 
    html: `<b>${contentText}</b>`,
  });

  return info;
}

module.exports = sendEmailFunction;