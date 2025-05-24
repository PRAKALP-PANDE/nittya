import connectDb from "@/middleware/mongoose";
import User from "@/models/User";
import jwt from 'jsonwebtoken'; // Import the jwt library

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({ error: "Access Denied: No token provided" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (!decoded.isAdmin) {
        return res.status(403).json({ error: "Access Denied: Admins only" });
      }

      const users = await User.find();
      res.status(200).json({ users });

    } catch (err) {
      console.error("Error verifying token:", err);
      res.status(401).json({ error: "Invalid token" });
    }

  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);