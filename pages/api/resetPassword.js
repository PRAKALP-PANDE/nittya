import User from "../../models/User";
import connectDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            const { token, newPassword } = req.body;

            // Verify the reset token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const email = decoded.email;

            // Find the user by email
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ success: false, error: "Invalid token or user does not exist." });
            }

            // Encrypt the new password
            const encryptedPassword = CryptoJS.AES.encrypt(newPassword, process.env.AES_SECRET).toString();

            // Update the user's password
            user.password = encryptedPassword;
            await user.save();

            res.status(200).json({ success: true, message: "Password has been reset successfully." });
        } catch (error) {
            console.error(error);

            if (error.name === "TokenExpiredError") {
                return res.status(400).json({ success: false, error: "Reset link has expired." });
            }

            res.status(500).json({ success: false, error: "Internal Server Error." });
        }
    } else {
        res.status(400).json({ error: "This method is not allowed." });
    }
};

export default connectDb(handler);
