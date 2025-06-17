 import Order from '../models/orderModel.js';

export const placeOrder = async (req, res) => {
  try {
    const { name, email, location } = req.body;

    const order = new Order({ name, email, location });
    await order.save();

    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
