const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    image: { type: String, default: '', trim: true },
    date: { type: String, default: '' }, // Consider using Date type instead (see below)
    content: { type: String, default: '', trim: true },
    isTop: { type: Boolean, default: false },
}, { timestamps: true });
// mongoose.models = {}
// export default mongoose.model("Review", ReviewSchema);
export default mongoose.models.Review || mongoose.model("Review", ReviewSchema);
