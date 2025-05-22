// pages/api/admin/verify-token.js
import jwt from "jsonwebtoken"; // Import jwt for token verification

const handler = (req, res) => {
  if (req.method === 'POST') {
    const authHeader = req.headers['authorization']; // Extract the authorization header

    if (!authHeader) {
      return res.status(401).json({ success: false, error: 'Authorization header is missing' });
    }

    const token = authHeader.split(' ')[1]; // Extract the token from "Bearer <token>"
    if (!token) {
      return res.status(401).json({ success: false, error: 'Token is missing' });
    }

    try {
      // Verify and decode the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Check if the user has admin privileges
      if (!decoded.isAdmin) {
        return res.status(403).json({ success: false, error: 'Not authorized' });
      }

      // If the token is valid and the user is an admin, return user info
      return res.status(200).json({ success: true, user: decoded });
    } catch (error) {
      return res.status(403).json({ success: false, error: 'Invalid token' });
    }
  }

  return res.status(405).json({ success: false, error: 'Method not allowed' }); // Use 405 for unsupported methods
};

export default handler;
