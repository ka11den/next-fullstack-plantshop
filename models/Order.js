import mongoose from "mongoose";

const OrdertSchema = new mongoose.Schema({
    customer: {
        type: String,
        required: true,
        maxlength: 50,
    },
    address: {
        type: String,
        required: true,
        maxlength: 200,
    },
    total: {
        type: String,
        required: true,
    },
    prices: {
        type: [Number],
        required: true,
    },
    status: {
        type: Number,
        default: 0,
    },
    method: {
        type: Number,
        required: true,
    }
},{ timestamps: true })

export default mongoose.models.Order ||
 mongoose.model('Order', OrdertSchema)