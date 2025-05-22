import connectDb from "@/middleware/mongoose";
import Review from "@/models/Review";

const handler = async (req, res) => {
    if (req.method !== "POST") {
        res.status(400).json({ message: "Method not allowed" })
    }
    try {
        for (let i = 0; i < req.body.length; i++) {
            let r = new Review({
                name: req.body[i].name,
                image: req.body[i].image,
                date: req.body[i].date,
                content: req.body[i].content,
                isTop: req.body[i].isTop,
            });
            await r.save();
        }
        res.status(200).json({ success: "Review added successfully" });
    } catch (err) {
        res.status(400).json({ error: "Invalid token" });
    }
}

export default connectDb(handler);