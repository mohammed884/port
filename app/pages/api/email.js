// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';
import joi from 'joi';
export default async function handler(req, res) {
  const { method } = req;
  const { subject, message, email } = req.body;
  const { MY_EMAIL, MY_PASSWORD } = process.env;
  if (method === 'POST') {
    const emailSchema = joi.object({
      subject: joi.string().min(3).max(30).required(),
      message: joi.string().min(3).max(330).required(),
      email: joi.string().email().min(3).max(150).lowercase().required(),
    });
    await emailSchema.validateAsync({ subject, message, email })
    try {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: MY_EMAIL,
          pass: MY_PASSWORD
        }
      });

      var mailOptions = {
        from: email,
        to: MY_EMAIL,
        subject: subject,
        text: message
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log(info);
          console.log('Email sent: ' + info.response);
        }
      });
      res.send({ done: true })
    } catch (err) {
      if (err.isJoi) {
        res.send({ done: true, err: err._message })
      }
      else res.send({ done: false, err: err._message })
    }
  }
}
