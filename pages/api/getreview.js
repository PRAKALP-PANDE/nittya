import Review from "@/models/Review";
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    let reviews = await Review.find()
    res.status(200).json({ reviews })
}
export default connectDb(handler);