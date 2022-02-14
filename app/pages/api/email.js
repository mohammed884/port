import nodemailer from 'nodemailer';
import joi from 'joi';
export default async function (req, res) {
  const { method } = req;
  const { subject, message, email } = req.body;
  const { MY_EMAIL, MY_PASSWORD } = process.env;
  console.log(method);
  if (method === 'GET') {
    res.status(200).json({ name: 'John Doe' })

  }
  if (method === 'POST') {
    const emailSchema = joi.object({
      subject: joi.string().min(3).max(30).required(),
      message: joi.string().min(3).max(330).required(),
      email: joi.string().email().min(3).max(150).lowercase().required(),
    });
    try {
      await emailSchema.validateAsync({ subject, message, email })
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
          console.log('Email sent: ' + info.response);
        }
      });
      res.send({ done: true })
    } catch (err) {
      if (err.isJoi) {
        res.send({ done: false, err: err.details[0].message })
      }
      else res.send({ done: false, err: err._message })
    }
  }
}
