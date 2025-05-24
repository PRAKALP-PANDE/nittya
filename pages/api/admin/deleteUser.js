import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
    if (req.method === "DELETE") {
        const { token } = req.headers;

        if (!token) {
            return res.status(401).json({ error: "Access Denied: No token provided" });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET); // Decode and verify token
            if (!decoded.isAdmin) {
                return res.status(403).json({ error: "Access Denied: Admins only" });
            }
            const { id } = req.query;
            await User.findByIdAndDelete(id);
            res.status(200).json({ success: "User deleted successfully" });
        } catch (err) {
            res.status(400).json({ error: "Invalid token" });
        }
    } else {
        res.status(400).json({ error: "This method is not allowed" });
    }
};


export default connectDb(handler);