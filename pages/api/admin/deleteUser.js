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
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Only allow admins to delete users
            if (!decoded.isAdmin) {
                return res.status(403).json({ error: "Access Denied: Admins only" });
            }

            const { id } = req.query;

            // Check if the user to be deleted is a super admin
            const userToDelete = await User.findById(id);
            if (!userToDelete) {
                return res.status(404).json({ error: "User not found" });
            }

            if (userToDelete.isSuperAdmin) {
                return res.status(403).json({ error: "You cannot delete a super admin" });
            }

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
