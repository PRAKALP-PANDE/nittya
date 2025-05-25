import connectDb from "@/middleware/mongoose";
import Review from "@/models/Review";
import User from "@/models/User";

const handler = async (req, res) => {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" })
    }

    try {
        const totalUser = await User.countDocuments();
        const totalReviews = await Review.countDocuments();
        const totalTopReviews = await Review.find({ isTop: true }).countDocuments();

        return res.status(200).json({ success: true, totalUser, totalReviews, totalTopReviews })
    } catch (err) {
        return res.status(500).json({ error: "Internal Server error" })
    }
};

export default connectDb(handler);