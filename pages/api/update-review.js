import Review from "@/models/Review";
import connectDb from "../../middleware/mongoose"
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const { token } = req.headers;

        if (!token) {
            return res.status(401).json({ error: "Access Denied: No token provided" });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET); // Decode and verify token
            if (!decoded.isAdmin) {
                return res.status(403).json({ error: "Access Denied: Admins only" });
            }

            for (let i = 0; i < req.body.length; i++) {
                let p = await Review.findByIdAndUpdate(req.body[i]._id, req.body[i])
            }
            res.status(200).json({ success: "Review Updated successfully" })
        } catch (err) {
            res.status(400).json({ error: "Invalid token" });
        }
    } else {
        res.status(400).json({ error: "This method is not allowed" });
    }
};
export default connectDb(handler);