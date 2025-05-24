import User from "../../models/User"
import connectDb from "../../middleware/mongoose"
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');

const handler = async (req, res) => {
  if (req.method == 'POST') {
    try {
      const { email } = req.body;

      let user = await User.findOne({ email })
      if (!user) {
        return res.status(200).json({ success: false, error: "user not found" });
      }

      const resetToken = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        },
      });

      const emailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Action Required: Reset Your Password",
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Password Reset</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0fdf4;
      margin: 0;
      padding: 0;
      color: #1a1a1a;
    }

    .container {
      max-width: 600px;
      margin: 40px auto;
      padding: 30px;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    h1 {
      text-align: center;
      color: #2d9155;
      font-size: 24px;
      margin-bottom: 20px;
    }

    p {
      line-height: 1.6;
      font-size: 16px;
      margin-bottom: 16px;
    }

    .button {
      display: inline-block;
      padding: 12px 24px;
      background-color: #2d9155;
      color: #ffffff !important;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      transition: background-color 0.3s ease;
    }

    .button:hover {
      background-color: #247a46;
    }

    .footer {
      font-size: 14px;
      color: #888;
      text-align: center;
      margin-top: 30px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Password Reset Request</h1>
    <p>Hello ${user.name},</p>
    <p>You recently requested to reset your password. Click the button below to proceed. For your security, this link will expire in 1 hour.</p>
    <p><a href="${process.env.NEXT_PUBLIC_HOST}/reset-password?token=${resetToken}" class="button">Reset Password</a></p>
    <p>If you didn’t request this, you can safely ignore this email.</p>
    <p class="footer">© ${new Date().getFullYear()} Nittya. All rights reserved.</p>
  </div>
</body>
</html>
  `
      };


      await transporter.sendMail(emailOptions);

      res.status(200).json({ success: true, message: "Password reset link has been sent to your email" });
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, error: "Internal Server Error." });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" })
  }
};
export default connectDb(handler);