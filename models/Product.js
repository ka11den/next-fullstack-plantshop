import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxlength: 50,
        },
        desc: {
            type: String,
            required: true,
            maxlength: 1000,
        },
        img: {
            type: String,
            required: true,
        },
        prices: {
            type: [Number],
            required: true,
        },
    },
    { timestamps: true }
)

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);