import jwt from 'jsonwebtoken';
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(400).json({ success: false, error: "This method is not allowed" });
    }

    const { token } = req.body;
    if (!token) {
        return res.status(401).json({ success: false, error: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return res.status(200).json({ success: true, user: decoded });
    } catch (error) {
        return res.status(401).json({ success: false, error: "Invalid or expired token" });
    }
};

export default connectDb(handler);
