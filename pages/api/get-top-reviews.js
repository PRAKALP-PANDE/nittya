import connectDb from "../../middleware/mongoose";
import Review from "@/models/Review";

const handler = async (req, res) => {
    try {
        const reviews = await Review.find({ isTop: true });
        res.status(200).json({ reviews });
    } catch (error) {
        console.error("Error fetching price drop reviews:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default connectDb(handler);
