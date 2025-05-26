import User from "../../models/User"
import connectDb from "../../middleware/mongoose"
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const { name, email, password, isAdmin } = req.body

        // 2. Check if the email already exists in the database
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already registered" });
        }

        // 3. Encrypt the password
        const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.AES_SECRET).toString();

        // 4. Create new user in the database
        let u = new User({ name, email, password: encryptedPassword, isAdmin });

        try {
            await u.save();
            // Respond to the user with success message
            res.status(200).json({ success: "Signup successful." });
        } catch (err) {
            res.status(500).json({ error: "Server error, please try again later." });
        }
    } else {
        res.status(400).json({ error: "This method is not allowed" });
    }
}

export default connectDb(handler);