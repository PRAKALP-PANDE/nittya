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
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Password Reset</title>
      <style>
        body {
          font-family: sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }

        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #fff;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        h1 {
          color: #333;
          text-align: center;
          margin-bottom: 20px;
        }

        p {
          color: #666;
          margin-bottom: 15px;
        }

        a {
          color: #007bff;
          text-decoration: none;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Password Reset Request</h1>
        <p>Hello ${user.name},</p>
        <p>You requested a password reset for your account. <strong>Please keep this email confidential and do not share it with anyone.</strong></p>
        <p>Please click the button below to reset your password:</p>
        <a href="${process.env.NEXT_PUBLIC_HOST}/reset-password?token=${resetToken}" 
           style="background-color: #1f2937; color: #fff; padding: 10px 20px; border-radius: 5px; display: inline-block;">
          Reset Password
        </a>
        <p>This link will expire in 1 hour.</p>
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