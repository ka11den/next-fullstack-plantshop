import dbConnect from "../../../utils/mongo";
import Order from "../../../models/Order";

export default async function handler (req, res) { 
    const { method } = req;

    dbConnect()

    if (method === 'GET'){
        const orders = await Order.find();
        res.status(201).json(orders);
    }

    if (method === 'POST') {
        try {
            const order = await Order.create(req.body);
            res.status(201).json(order);
        } catch (err) {
            res.status(500).json(err)
        }
    }
}