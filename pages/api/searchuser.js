import User from "@/models/User";
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method === "GET") {
        const { query } = req;
        const searchQuery = {};

        if (query.q) {
            const regex = { $regex: query.q, $options: "i" }; // Case-insensitive search
            searchQuery.$or = [
                { name: regex },
                { lastname: regex },
                { email: regex },
                { phone: regex }
            ];
        }

        try {
            const users = await User.find(searchQuery);
            res.status(200).json({ users });
        } catch (err) {
            res.status(500).json({ error: "An error occurred while fetching users." });
        }
    } else {
        res.status(400).json({ error: "Invalid request method." });
    }
};
export default connectDb(handler);